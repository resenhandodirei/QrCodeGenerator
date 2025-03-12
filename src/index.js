import prompt from 'prompt';

import mainPrompt from './prompts/prompt-main.js';

import createQRCODE from './services/qr-code/create.js';
//import promptQrcode from './prompts/prompt-qrcode.js';
import createPassword from './services/password/create.js';

import dotenv from 'dotenv';
dotenv.config(); 


async function main() {
    prompt.get(mainPrompt, async (err, result) => {

        const choose = result;
        if (choose.select == "1") await createQRCODE();
        if (choose.select == "3") await createPassword();

    })

    prompt.start();
}

main();