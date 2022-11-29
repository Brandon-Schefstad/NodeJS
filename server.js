require('dotenv').config();
const http = require('http');

const fs = require('fs/promises'); // Promise support!
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World\n');
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
	console.log(process.env.USER_ID);
});

const content = 'Some content!';

fs.writeFile(
	'/Users/bsche/onedrive/desktop/2nd brain/projects/nodeJS/test.txt',
	content,
	(err) => {
		if (err) {
			console.error(err);
		}
		// file written successfully
	}
);
async function example() {
	try {
		const data = await fs.readFile(
			'/Users/bsche/onedrive/desktop/2nd brain/projects/nodeJS/test.txt',
			{ encoding: 'utf-8' }
		);
		console.log(data);
	} catch (err) {
		console.error(err);
	}
}
example();
