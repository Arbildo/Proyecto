export class Cancion {

  idplaylist: string;
  nombre: string;
  autor: string;
  tags: string;
  url: string;

  contructor(u: any)
  {
    this.idplaylist =u._idplaylist;
    this.nombre = u.nombre;
    this.autor= u.autor;
    this.tags=u.tags;
    this.url=u.url;


  }
}
