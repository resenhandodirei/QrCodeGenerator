import QRCode from "qrcode";
import chalk from "chalk";

function isValidURL(string) {
    try {
        new URL(string);
        return true;
    } catch (err) {
        return false;
    }
}

async function handle(url) {
    if (!isValidURL(url)) {
        console.log(chalk.red("URL inválida. Tente novamente."));
        return;
    }
    
    QRCode.toString(url, { type: "terminal" }, (err, qr) => {
        if (err) {
            console.error("Erro ao gerar QR Code", err);
            return;
        }
        console.log(qr);
    });
}

export default handle;