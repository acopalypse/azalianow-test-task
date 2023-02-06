import * as http from 'http';
import * as dotenv from 'dotenv';

dotenv.config();

http
  .createServer(async function (req, res) {})
  .listen(process.env.NEXT_PUBLIC_API_PORT, () => {
    console.log('Http server start, port:', process.env.NEXT_PUBLIC_API_PORT);
  });
