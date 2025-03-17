import permittedCharacters from "./utils/permitted-characters";

async function handle() {
    let characters = []
    let password = '';

    const passowrdLength = process.env.PASSWORD_LENGTH;
    characters = await permittedCharacters();

    for (let i = 0; i < passowrdLength; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }

    return password;
}

export default handle;