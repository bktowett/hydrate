// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "hydrate" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('hydrate.helloWorld', () => {
		// The code you place here will be executed every time your command(onStartupFinished) is executed
		// Display a message box to the user every minute
		//vscode.window.showInformationMessage('Hello World from HydrateNow!');
		//1min = 60,000ms
		const time = 300000;
		setInterval(() => {
			vscode.window.showInformationMessage(getMessage());
		}, time);
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}

function getMessage(){
	const messages = [
		"Beloved, drink water",
		"Obey your thirst, hydate",
		"It's time - your body will thank you for it. Drink water",
		"Bad breath? Drink water.",
		"If they keep offering you mints, your breath stinks. Drink water...or yoghurt.",
		"Stand up. Go to the watering hole."
	];
	//randomly choose one message for display
	return messages[Math.floor(Math.random()*messages.length)];
}
