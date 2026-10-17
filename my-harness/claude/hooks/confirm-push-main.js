// .claude/hooks/confirm-push-main.js
const fs = require("fs");
const { execSync } = require("child_process");

// Claude Code envoie au hook la commande qu'il s'apprête à lancer
const input = JSON.parse(fs.readFileSync(0, "utf8"));
const command = input.tool_input.command || "";

if (command.includes("git push")) {
  const branch = execSync("git branch --show-current").toString().trim();

  if (branch === "main" || command.includes("main")) {
    console.log(JSON.stringify({
      hookSpecificOutput: {
        hookEventName: "PreToolUse",
        permissionDecision: "ask",
        permissionDecisionReason: "Ce push vise main : il met le site en ligne. Confirme que c'est voulu.",
      },
    }));
  }
}