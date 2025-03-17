import chalk from "chalk";

const mainSchemaPrompt = [
    {
        name: "select",
        description: chalk.yellow.bold ("Select a command: 1 - QRCODE, 2 - URL, 3 - PASSWORD, 4 - EXIT"),
        pattern: /^[1-4]$/,
        message: chalk.red("Select a valid option"),
        required: true,
    }
]

export default mainSchemaPrompt;
