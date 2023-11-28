/** 
 * @file WWJ Node.js HTTP Server file.
 * @author wuwenjun555 <wuwenjun555@gmail.com>
 * @copyright wuwenjun555 2022
 * @license MIT
 * @version 0.0.1
 */

const
  nFs = require('fs'), cfg = JSON.parse(nFs.readFileSync('package.json', 'utf-8')),
  host = cfg.wwj.swsIP, port = cfg.wwj.swsPort, rootURL = 'http://${host}:${port}',
  nHttp = require('http'), nUrl = require('url'), nPath = require('path'),
  rootDir = typeof nw == 'undefined' ? process.cwd() : nw.__dirname,
  server = nHttp.createServer((req, res) => {
    const pathname = nUrl.parse(req.url, true).pathname;
    if (pathname === '/') {
      res.statusCode = 301;
      res.setHeader('Location', `/${cfg.wwj.indexPJ}/${cfg.wwj.index}`);
      return res.end();
    }
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
      factURL = isIndex ? `/${cfg.wwj.buildDir}/${cfg.wwj.indexPJ}/${cfg.wwj.index}` : pathname,
      fNM = factURL.split('/').pop(),
      arrFNM = fNM.split('.'),
      servMap = {
        getAllPJPath: getAllPJPath, getCfg: getCfg, getAppURL: getAppURL
      };

    if (fNM === 'stopserver') { return stop(); }
    if (isIndex || arrFNM.length > 1) {
      isIndex && (res.setHeader('Access-Control-Allow-Origin', 'null'));
      httpRS(req, res, factURL, fNM, arrFNM.pop());
    } else {
      let ret = {};
      req.query = nUrl.parse(req.url, true).query;
      console.log('req.query: ' + JSON.stringify(req.query));

      res.setHeader('Content-Type', 'application/json');
      console.log('servMap[fNM]: ' + servMap[fNM]);
      if (servMap[fNM]) {
        ret = servMap[fNM]();
        res.writeHead(200);
      } else {
        res.writeHead(500);
      }
      res.end(JSON.stringify(ret));
    }
  },
  httpU = (req, res) => { },
  httpC = (req, res) => { },
  httpD = (req, res) => { },
  httpRS = (req, res, fURL, fNM, fExt) => {
    const
      url = fURL === '/package.json' ? nPath.join(rootDir, fURL) : nPath.join(rootDir, cfg.wwj.buildDir, fURL),
      fTs = {
        'json': 'text/json',
        'js': 'text/javascript',
        'png': 'image/png',
        'svg': 'image/svg+xml',
        'html': 'text/html'
      };
    nFs.readFile(url, (err, file) => {
      if (err) {
        res.writeHead(404);
        res.end('Can not find file...');
        return;
      }

      res.setHeader('Content-Type', fTs[fExt]);
      res.writeHead(200);
      res.end(file);
    });
  };

start();


// build
const
  getAllPJPath = () => {
    const
      rootPath = process.cwd(), pjPath = rootPath + '\\pj\\', dstPath = rootPath + '\\wwww\\'
    dirs = nFs.readdirSync(pjPath);
    return { pjPath: pjPath, pjIDs: dirs, dstPath: dstPath };
  },
  getCfg = () => { return cfg; },
  getAppURL = () => { return { appURL: process.cwd() } };
