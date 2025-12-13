import db from "../lib/db";
import bcrypt from "bcryptjs";

const EMAIL = "info@aimterior.com";
const PASSWORD = "#StrongPassword@123";

function createAdminUser() {
  console.log("Creating admin user...");
  
  // Check if user already exists
  const existingAdmin = db
    .prepare("SELECT id FROM admin_users WHERE email = ?")
    .get(EMAIL);

  if (existingAdmin) {
    console.log(`Admin user with email ${EMAIL} already exists.`);
    return;
  }

  // Hash the password
  const hashedPassword = bcrypt.hashSync(PASSWORD, 10);

  // Insert the new admin user
  try {
    db.prepare("INSERT INTO admin_users (email, password) VALUES (?, ?)").run(
      EMAIL,
      hashedPassword
    );
    console.log(`Admin user created successfully!`);
    console.log(`Email: ${EMAIL}`);
  } catch (error) {
    console.error("Error creating admin user:", error);
    process.exit(1);
  }
}

// Run the script
try {
  createAdminUser();
  console.log("Script completed successfully!");
} catch (error) {
  console.error("Script error:", error);
  process.exit(1);
}

