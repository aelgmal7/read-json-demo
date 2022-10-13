const editJsonFile = require("edit-json-file");
const fs = require("fs");
let file = editJsonFile(`${__dirname}/filename.json`);
file.pop("trans")
file.save();
file = editJsonFile(`${__dirname}/filename.json`, {
    autosave: true
});



fs.readFile("./filename.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    console.log("File data:", JSON.parse(jsonString));
  })
  