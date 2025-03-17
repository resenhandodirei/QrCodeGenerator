import chalk from "chalk";

const promptQRCODE = [
    {
        name: "link",
        description: chalk.yellow.bold("Enter the link to generate a QR Code"),
        required: true,
    }, 
    {
        name: "type", 
        description: chalk.yellow.bold("Enter the type of QR Code: (1 - URL, 2 - TEXT)"),
        pattern: /^[1-2]$/,
        message: chalk.red.bold("Select a valid option"),
        required: true
    },
];

export default promptQRCODE;