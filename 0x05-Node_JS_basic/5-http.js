const { readFile } = require('fs');
const http = require('http');

const host = '127.0.0.1';
const port = 1245;

function countStudents(filePath) {
  let length = 0;
  const students = {};
  const fields = {};

  return new Promise((resolve, reject) => {
    readFile(filePath, (error, data) => {
      if (error) {
        reject(error);
      } else {
        let op = '';
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const field = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
	    if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }
	const len = length - 1;
        op += `Number of students: ${len}\n`;
        for (const [k, v] of Object.entries(fields)) {
          if (k !== 'field') {
            op += `Number of students in ${k}: ${v}. List: ${students[k].join(', ')}\n`;
          }
        }
        resolve(op);
      }
    });
  });
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((op) => {
      const content = op.slice(0, -1);
      res.end(content);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
});

app.listen(port, host, () => {
});

module.exports = app;
