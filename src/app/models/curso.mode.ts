export class Curso {
  private static ultimoId = 0;

  public id: number

  constructor(
    public nombre: string,
    public instructor: string,
    public fechaInicio: Date,
    public fechaFin: Date,
    public descripcion: string,
    public duracion: number,
    public mostrarDescripcion: boolean = false
  ) {
    this.id = ++Curso.ultimoId;
  }
}
