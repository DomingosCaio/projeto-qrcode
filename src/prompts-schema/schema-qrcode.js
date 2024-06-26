import chalk from "chalk";

const promptSchemaQRCode = [
  {
    name: "link",
    description: chalk.cyan("Digite o link para gerar o QR CODE"),
  },
  {
    name: "type",
    description: chalk.cyan(
      "escolha entre o tipo de QRCode (1- NORMAL ou (2- TERMINAL"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red("Escolha apenas entre 1 e 2"),
    required: true,
  },
];

export default promptSchemaQRCode;
