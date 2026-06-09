import { execSync, spawn } from "node:child_process";
import { rmSync } from "node:fs";

const ports = [3000, 3001, 3002];

for (const port of ports) {
  try {
    execSync(`lsof -ti:${port} | xargs kill -9`, { stdio: "ignore" });
  } catch {
    // port already free
  }
}

try {
  execSync('pkill -9 -f "next dev"', { stdio: "ignore" });
} catch {
  // no dev server running
}

rmSync(".next", { recursive: true, force: true });
rmSync("node_modules/.cache", { recursive: true, force: true });

console.log("Cleared .next cache and killed stale dev servers. Starting on :3000…");

const dev = spawn("npx", ["next", "dev", "-p", "3000"], {
  stdio: "inherit",
  shell: true,
});

dev.on("exit", (code) => process.exit(code ?? 0));
