// REPL
// MPM - Node JS package manager

// 1. site https://www.npmjs.com/
// 2. CLI
// 3. Package rejistry
// Package -  это такие библиотеки и зависимости неоходимые для работы

// console.log("Vova");

// function sum(a, b) {
//     console.log(a + b);
// }

// sum(10, 5);

// __dirname
// __filename

// console.log(__dirname);
// console.log(__filename);

// ======================================
// let path = require("path");
// let fs = require("fs/promises");
// let filePath = path.join(__dirname, "./db/config.json");
// console.log(filePath);

// (async () => {
//     let data = await fs.readFile(filePath, "utf8");
//     console.log(data);
// })();

// ==================
// let http = require("http");

// let server = http.createServer((req, res) => {
//     // console.log(req.url);
//     // console.log(req.method);
//     res.setHeader("Content-type", "text/html");
//     res.end("<h1>Hello from node js</h1>");
// });

// const PORT = 5000;

// server.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
