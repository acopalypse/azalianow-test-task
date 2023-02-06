import { EndpointResult, Error, NotFound, RouterResult } from '@/types/api.types';
import { AverageData, MessageData } from '@/types/fetcher.type';
import calculateAverage from '../utils/calculateAverage';

import DB_AVERAGES from '../utils/db/db_averages';
import DB_MESSAGES from '../utils/db/db_messages';

export class Controller {
  private messages = DB_MESSAGES;
  private averages = DB_AVERAGES;
  public data: EndpointResult<
    MessageData[] | AverageData | AverageData[] | NotFound | Error
  >;

  constructor(private readonly router: RouterResult) {
    this.data = this.init();
  }

  private init(): typeof this.data {
    if (this.router.endpoint === '/messages' && this.router.method === 'POST') {
      return this.getMessagesData();
    }
    if (this.router.endpoint === '/averages' && this.router.method === 'POST') {
      return this.getAveragesData();
    }

    if (this.router.endpoint === '/history' && this.router.method === 'GET') {
      return this.getHistoryData();
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

  private getAveragesData(): EndpointResult<AverageData | Error> {
    if (this.router.variables) {
      const output: AverageData = {
        number: Math.abs(this.router.variables.number),
        isNegative: this.router.variables.isNegative,
        isFractional: this.router.variables.isFractional,
      };

      output.result = calculateAverage(
        output,
        this.averages[this.averages.length - 1],
      );
      this.averages.push(output);

      return { data: output };
    }

    return { data: { message: 'Variables not found...' } };
  }

  private getHistoryData(): EndpointResult<AverageData[]> {
    return { data: this.averages };
  }

  private get404(): EndpointResult<NotFound> {
    return { data: { message: 'Response not found...' } };
  }

  public update() {
    this.data = this.init();
  }
}
