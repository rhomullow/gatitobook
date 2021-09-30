import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AutencacaoInterceptor } from './autencacao.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AutencacaoInterceptor,
    multi: true
  }]
})
export class AutenticacaoModule { }
