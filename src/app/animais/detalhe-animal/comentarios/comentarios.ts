export type Comentarios = Array<Comentario>;

export interface Comentario {
  date: Date;
  text: string;
  userName: string;
}
