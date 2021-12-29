import * as vscode from "vscode";
import { SidebarProvider } from "./SidebarProvider";

const ENTRY_COMMAND = "vs-humor-light.meme";

export function activate(context: vscode.ExtensionContext) {
  const sidebarProvider = new SidebarProvider(context.extensionUri);

  const item = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right
  );
  item.text = "$(beaker) Start slacking off.";
  item.command = ENTRY_COMMAND;
  item.show();

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      "vs-humor-lite.side-bar",
      sidebarProvider
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(ENTRY_COMMAND, () => {
      sidebarProvider._view?.show();
    })
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
