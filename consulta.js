export default class Consultorio {
  constructor(nombre, pacientes) {
    this.nombre = nombre;
    this.pacientes = pacientes;
  }
  agregarPaciente(nuevoPaciente) {
    this.pacientes.push(nuevoPaciente);
  }
  buscarPacienteRut(rutDelPaciente) {
    let resultado = this.pacientes.filter((paciente) => {
      return paciente.rut == rutDelPaciente;
    });
    console.log(resultado)
  }
  buscarPacienteNombre(nombreDelPaciente) {
    let resultado = this.pacientes.filter((paciente) => {
      return paciente.nombre == nombreDelPaciente;
    });
    console.log(resultado)
  }
  todosLosPacientes() {
    this.pacientes.forEach((paciente) => {
      console.log(paciente);
    });
  }
}
