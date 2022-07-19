const fs = require("fs/promises");

const reloadBackup = async () => {
  const backupFile =
    "/Users/jose/practice/notifications-app/app-be/utils/backup.json";
  const destinationFile =
    "/Users/jose/practice/notifications-app/app-be/test.json";

  const backupData = await fs.copyFile(backupFile, destinationFile);
  console.log(`File copied to ${destinationFile}`);
};

reloadBackup();
