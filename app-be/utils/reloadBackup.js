const fs = require("fs/promises");
const path = require("path");

const reloadBackup = async () => {
  const backupFile = path.join(__dirname, "./backup.json");
  const destinationFile = path.join(__dirname, "../test.json");

  const backupData = await fs.copyFile(backupFile, destinationFile);
  console.log(`Backup in ${backupFile} copied to ${destinationFile}`);
};

reloadBackup();
