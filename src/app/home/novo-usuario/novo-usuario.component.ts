import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NovoUsuarioService } from './novo-usuario.service';
import { NovoUsuario } from './novo-usuario';
import { minusculoValidator } from './minusculo.validator';
import { UsuarioExisteService } from './usuario-existe.service';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private usuarioExistenteService: UsuarioExisteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group(
      {
        email: ['', [Validators.email, Validators.required]],
        fullName: ['', [Validators.required, Validators.minLength(4)]],
        userName: [
          '',
          [minusculoValidator, Validators.required],
          [this.usuarioExistenteService.usuarioJaExiste()],
        ],
        password: [''],
      },
      {
        validators: [usuarioSenhaIguaisValidator],
      }
    );
  }

  cadastrar() {
    if(this.novoUsuarioForm.valid){
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;

      this.novoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe(() => {
        this.router.navigate(['']);
      },
      (error) => {
        console.log(error);
      });
    }
  }
}
