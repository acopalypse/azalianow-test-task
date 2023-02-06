import * as http from 'http';
import * as dotenv from 'dotenv';
import { Router } from './routers/default.router';
import { Controller } from './controllers/default.controller';
import headers from './utils/headers';

dotenv.config();

http
  .createServer(async function (req, res) {
    const router = new Router({
      endpoint: req.url || '',
      method: req.method || '',
    });
    const controller = new Controller(router.result);
    res.writeHead(router.result.code, headers);

    req.on('data', (data: string) => {
      router.setRequestVariables(JSON.parse(data));
      if (router.result.variables) {
        controller.update();
      }
    });

    req.on('end', () => {
      // console.log('end:', controller.data);
      res.end(JSON.stringify(controller.data));
    });
  })
  .listen(process.env.NEXT_PUBLIC_API_PORT, () => {
    console.log('Http server start, port:', process.env.NEXT_PUBLIC_API_PORT);
  });
