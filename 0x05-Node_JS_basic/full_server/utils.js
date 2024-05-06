const fs = require(fs).promises;

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8')
      .then((data) => {
        const lines = data.trim().split('\n');
        const headers = lines[0].split(',');
        const db = [];

	for (let i = 1; i < lines.length; i++) {
          const vals = lines[].split(',');
	  const ent = {};

          for (let j = 0; j < headers.length; j++) {
            ent[headers[j].toLowerCase()] = vals[j];
          }

          db.push(ent);
        }

        resolve(db);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = { readDatabase };
