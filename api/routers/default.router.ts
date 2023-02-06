import { Headers } from '@/types/api.types';
import DB_ROUTERS from 'api/utils/db/db_routers';

export class Router {
  private readonly routers = DB_ROUTERS;

  constructor(private readonly headers: Headers) {}
}
