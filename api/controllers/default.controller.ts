import { EndpointResult, NotFound, RouterResult } from '@/types/api.types';
import { MessageData } from '@/types/fetcher.type';
import DB_AVERAGES from '../utils/db/db_averages';
import DB_MESSAGES from '../utils/db/db_messages';

export class Controller {
  private messages = DB_MESSAGES;
  private averages = DB_AVERAGES;
  public data: EndpointResult<MessageData[] | NotFound>;

  constructor(private readonly router: RouterResult) {
    this.data = this.init();
  }

  private init(): typeof this.data {
    if (this.router.endpoint === '/messages' && this.router.method === 'POST') {
      return this.getMessagesData();
    }

    return this.get404();
  }

  private getMessagesData(): EndpointResult<MessageData[]> {
    if (this.router.variables?.message && this.router.variables?.author) {
      this.messages.push({
        message: this.router.variables.message,
        author: this.router.variables.author,
      });
    }
    return { data: this.messages };
  }

  private get404(): EndpointResult<NotFound> {
    return { data: { message: 'Response not found...' } };
  }

  public update() {
    return this.init();
  }
}
