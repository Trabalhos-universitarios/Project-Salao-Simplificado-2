export interface Funcionario {
  nome?: any;
  cpf?: any;
  email?: any;
  senha?: any
  isEdit?: any;
}

export const FuncionariosColumns = [
  {
    key: "nome",
    type: "text",
    label: "Full Name"
},
{
    key: "CPF",
    type: "text",
    label: "CPF"
},
{
    key: "email",
    type: "text",
    label: "email"
},
{
  key: "senha",
  type: "text",
  label: "senha"
},
{
key: "Edit",
type: "isEdit",
label: "Edit"
}
];
