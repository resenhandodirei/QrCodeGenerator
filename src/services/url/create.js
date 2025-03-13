import prompt from "prompt";
import handle from "./handle.js";

async function createURLQRCode() {
    prompt.start();
    prompt.get({
        name: "url",
        description: "Digite a URL para gerar o QR Code",
        required: true
    }, (err, result) => {
        if (err) {
            console.error("Erro ao obter entrada do usuário", err);
            return;
        }
        handle(result.url);
    });
}

export default createURLQRCode;