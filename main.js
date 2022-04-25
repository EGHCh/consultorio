import Paciente from "./paciente.js";
import Consultorio from "./consulta.js";

const pacienteUno = new Paciente(
  "Luis",
  "Arancibia",
  30,
  "1239484-k",
  "Lorem ipsum"
);
const pacienteDos = new Paciente(
  "Otro",
  "Paciente",
  32,
  "10300303-k",
  "Loquillo"
);

const consultorioPenaBlanca = new Consultorio("Peñablanca", [pacienteUno, pacienteDos]);

consultorioPenaBlanca.buscarPacienteRut("1239484-k");

consultorioPenaBlanca.buscarPacienteNombre("Luis")

consultorioPenaBlanca.todosLosPacientes()