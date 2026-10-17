let input = "";
process.stdin.on("data", (d) => (input += d));
process.stdin.on("end", () => {
  const cmd = JSON.parse(input).tool_input?.command ?? "";
  const pattern = /\b(rm|rmdir|unlink|shred)\b|git\s+(rm|clean)|-delete\b|os\.remove|unlinkSync|rmSync|Remove-Item/;
  if (pattern.test(cmd)) {
    console.error("Suppression de fichiers interdite par la configuration.");
    process.exit(2);
  }
});