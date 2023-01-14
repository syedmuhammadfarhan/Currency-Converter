#! /usr/bin/env node
import inquirer from 'inquirer';
import showBanner from 'node-banner';

await showBanner('Currency Converter', 'Develop by Farhan\n');


async function userInput() {
    const query = await inquirer.prompt([
        {
            type: 'list',
            name: 'input',
            message: 'SELECT CURRENCY AS INPUT :',
            choices: ['PKR', 'USD', 'AED', 'KSA RIYAL', 'EURO'],
        },
        {
            type: 'list',
            name: 'output',
            message: 'SELECT CURRENCY AS OUTPUT :',
            choices: ['PKR', 'USD', 'AED', 'KSA RIYAL', 'EURO'],
        },
        {
            type: 'number',
            name: 'amount',
            message: 'ENTER AMOUNT IN NUMBERS =',
        },

    ]) // inquirer prompt ending
    if (query.input === 'PKR') {
        if (query.output === 'USD') {
            console.log(`\nYOUR DESIRED`, query.input, `TO`, query.output, `=`, query.amount / 224.5, '\n');
        }
        if (query.output === 'AED') {
            console.log(`\nYOUR DESIRED`, query.input, `TO`, query.output, `=`, query.amount / 61.2, '\n');
        }
        if (query.output === 'KSA RIYAL') {
            console.log(`\nYOUR DESIRED`, query.input, `TO`, query.output, `=`, query.amount / 59.7, '\n');
        }
        if (query.output === 'EURO') {
            console.log(`\nYOUR DESIRED`, query.input, `TO`, query.output, `=`, query.amount / 237.4, '\n');
        }
    } // if block
    if (query.input === 'USD') {
        if (query.output === 'PKR') {
            console.log(`\nYOUR DESIRED`, query.input, `TO`, query.output, `=`, query.amount * 224.5, '\n');
        }
        if (query.output === 'AED') {
            console.log(`\nYOUR DESIRED`, query.input, `TO`, query.output, `=`, query.amount * 3.67, '\n');
        }
        if (query.output === 'KSA RIYAL') {
            console.log(`\nYOUR DESIRED`, query.input, `TO`, query.output, `=`, query.amount * 3.76, '\n');
        }
        if (query.output === 'EURO') {
            console.log(`\nYOUR DESIRED`, query.input, `TO`, query.output, `=`, query.amount * 0.95, '\n');
        }
    } // if block
    if (query.input === 'AED') {
        if (query.output === 'PKR') {
            console.log(`\nYOUR DESIRED`, query.input, `TO`, query.output, `=`, query.amount * 61.1, '\n');
        }
        if (query.output === 'USD') {
            console.log(`\nYOUR DESIRED`, query.input, `TO`, query.output, `=`, query.amount * 0.27, '\n');
        }
        if (query.output === 'KSA RIYAL') {
            console.log(`\nYOUR DESIRED`, query.input, `TO`, query.output, `=`, query.amount * 1.02, '\n');
        }
        if (query.output === 'EURO') {
            console.log(`\nYOUR DESIRED`, query.input, `TO`, query.output, `=`, query.amount * 0.26, '\n');
        }
    } // if block
    if (query.input === 'KSA RIYAL') {
        if (query.output === 'PKR') {
            console.log(`\nYOUR DESIRED`, query.input, `TO`, query.output, `=`, query.amount * 59.75, '\n');
        }
        if (query.output === 'USD') {
            console.log(`\nYOUR DESIRED`, query.input, `TO`, query.output, `=`, query.amount * 0.27, '\n');
        }
        if (query.output === 'AED') {
            console.log(`\nYOUR DESIRED`, query.input, `TO`, query.output, `=`, query.amount * 0.98, '\n');
        }
        if (query.output === 'EURO') {
            console.log(`\nYOUR DESIRED`, query.input, `TO`, query.output, `=`, query.amount * 0.25, '\n');
        }
    } // if block
    if (query.input === 'EURO') {
        if (query.output === 'PKR') {
            console.log(`\nYOUR DESIRED`, query.input, `TO`, query.output, `=`, query.amount * 239.6, '\n');
        }
        if (query.output === 'USD') {
            console.log(`\nYOUR DESIRED`, query.input, `TO`, query.output, `=`, query.amount * 1.06, '\n');
        }
        if (query.output === 'AED') {
            console.log(`\nYOUR DESIRED`, query.input, `TO`, query.output, `=`, query.amount * 3.91, '\n');
        }
        if (query.output === 'KSA RIYAL') {
            console.log(`\nYOUR DESIRED`, query.input, `TO`, query.output, `=`, query.amount * 4.00, '\n');
        }
    } // if block
}; //function userInput ending

async function restart() {
    do {
        await userInput();
        var again = await inquirer.prompt([
            {
                type: 'input',
                name: 'restart',
                message: 'Do you want to perform another conversion press (y/n):'
            }
        ])

    }
    while (again.restart === 'y' || again.restart === 'Y' || again.restart === 'YES' || again.restart === 'Yes' || again.restart === 'Yes')
}
restart();