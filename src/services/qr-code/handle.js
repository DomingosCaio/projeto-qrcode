import chalk from "chalk";
import qr from "qrcode-terminal";

async function handle(err, result) {
  if (err) {
    console.log("error on application");
    return;
  }
  console.log("result", result);
  const isSmall = result.type == 2;

  qr.generate(result.type, { small: isSmall }, (qrcode) => {
    console.log(chalk.green("QRCode gerado com sucesso: \n"));
    console.log(qrcode);
  });
}
export default handle;
