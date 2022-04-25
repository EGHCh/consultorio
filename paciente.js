export default class Paciente {
  #diagnostico;
  constructor(nombre, apellido, edad, rut, diagnostico) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.rut = rut;
    this.#diagnostico = diagnostico;
  }
  //Accessors
  get nombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  }
  set nombreCompleto(nuevoNombreCompleto) {
    this.nombre = nuevoNombreCompleto.split(" ")[0];
    this.apellido = nuevoNombreCompleto.split(" ")[1];
  }
}
