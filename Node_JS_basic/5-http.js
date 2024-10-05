const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/') {
    res.end('Hello Holberton School!');
  } else if (parsedUrl.pathname === '/students') {
    try {
      const databaseFile = process.argv[2] || 'database.csv'; 
      let consoleOutput = ''; 
      const originalConsoleLog = console.log;
      console.log = (message) => {
        consoleOutput += `${message}\n`; 
      };

      await countStudents(databaseFile); 

      consoleOutput = consoleOutput.trim(); 

      console.log = originalConsoleLog; 

      res.end(`This is the list of our students\n${consoleOutput}`);
    } catch (error) {
      
      res.statusCode = 400;
      res.end(`This is the list of our students\n${error.message}`);
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

app.listen(1245); 

module.exports = app;
