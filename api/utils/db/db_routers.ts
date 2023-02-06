import { Routers } from '@/types/api.types';

const DB_ROUTERS: Routers = {
  '/messages': ['POST'],
  '/averages': ['POST'],
  '/history': ['GET'],
};
export default DB_ROUTERS;
