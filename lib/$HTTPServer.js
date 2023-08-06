/** 
 * @file WWJ Node.js HTTP Server file.
 * @author wuwenjun555 <wuwenjun555@gmail.com>
 * @copyright wuwenjun555 2022
 * @license MIT
 * @version 0.0.1
 */

const
  host = '127.0.0.1', port = 5555, rootURL = 'http://${host}:${port}',
  rootDir = typeof nw == 'undefined' ? process.cwd() : nw.__dirname,
  nHttp = require('http'), nUrl = require('url'), nPath = require('path'), nFs = require('fs'),
  server = nHttp.createServer((req, res) => {
    const pathname = nUrl.parse(req.url, true).pathname;
    switch (req.method) {
      case 'GET':
        httpR(req, res);
        break;
      case 'POST':
        httpU(req, res);
        break;
      case 'PUT':
        httpC(req, res);
        break;
      case 'DELETE':
        httpD(req, res);
        break;
      default:
        httpR(req, res);
    }
  }),
  start = () => {
    server.listen(port, host, () => {
      console.log(`Server running at http://${host}:${port}/`);
    });
  },
  stop = () => {
    server.close();
  },
  httpR = (req, res) => {
    const
      pathname = nUrl.parse(req.url, true).pathname,
      isIndex = pathname === '/',
      factURL = isIndex ? '/A.html' : pathname,
      fNM = factURL.split('/').pop(),
      arrFNM = fNM.split('.');

    if (fNM === 'stopserver') { return stop(); }
    if (isIndex || arrFNM.length > 1) {
      isIndex && (res.setHeader('Access-Control-Allow-Origin', 'null'));
      httpRS(req, res, factURL, fNM, arrFNM.pop());
    } else {
      req.query = nUrl.parse(req.url, true).query;
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(200);
      res.end('{"test":"123"}');
    }
  },
  httpU = (req, res) => { },
  httpC = (req, res) => { },
  httpD = (req, res) => { },
  httpRS = (req, res, fURL, fExt, fNM) => {
    const url = nPath.join(rootDir, fURL);
    nFs.readFile(url, (err, file) => {
      if (err) {
        res.writeHead(404);
        res.end('Can not find file...');
        return;
      }
      res.writeHead(200);
      res.end(file);
    });
  };

start();
