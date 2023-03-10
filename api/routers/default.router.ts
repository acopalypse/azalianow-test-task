import { Headers, Methods, RouterResult, RoutersList } from '@/types/api.types';
import DB_ROUTERS from '../utils/db/db_routers';

export class Router {
  private readonly routers = DB_ROUTERS;
  public result: RouterResult;

  constructor(private readonly headers: Headers) {
    this.result = this.init();
  }

  private init(): RouterResult {
    return {
      endpoint: this.headers.endpoint,
      method: this.headers.method,
      code: this.findRouter(),
    };
  }

  private findRouter(): number {
    if (
      this.routers[this.headers.endpoint]?.find(
        (method: Methods) =>
          this.headers.method === method || this.headers.method === 'OPTIONS',
      )
    ) {
      return 200;
    }
    return 404;
  }

  public setRequestVariables(variables: Headers['variables']) {
    this.result.variables = variables;
  }

  public getRouteInfo(): RoutersList {
    return this.result;
  }
}
