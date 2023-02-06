import { Routers } from '@/types/api.types';

const db_routers: Routers = {
  '/messages': ['POST'],
  '/averages': ['POST'],
  '/history': ['GET'],
};
export default db_routers;
