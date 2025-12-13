// Simple Node.js script to run migration
const { execSync } = require("child_process");

console.log("Running migration script...");
try {
  execSync("npx tsx scripts/migrate-data.ts", { stdio: "inherit" });
  console.log("Migration completed!");
} catch (error) {
  console.error("Migration failed:", error);
  process.exit(1);
}

