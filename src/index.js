import prompt from 'prompt';

import mainPrompt from './prompts/prompt-main.js';

import createQRCODE from './services/qr-code/create.js';
import createPassword from './services/password/create.js';
import createURLQRCode from "./services/url/create.js";
import exit from './services/exit/create.js';

import dotenv from 'dotenv';
dotenv.config(); 


async function main() {
    prompt.get(mainPrompt, async (err, result) => {

        const choose = result;
        if (choose.select == "1") await createQRCODE();
        if (choose.select == "2") await createURLQRCode();
        if (choose.select == "3") await createPassword();
        if (choose.select == "4") await exit();

    })

    prompt.start();
}

main();