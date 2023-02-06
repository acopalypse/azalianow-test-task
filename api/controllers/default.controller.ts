import DB_AVERAGES from 'api/utils/db/db_averages';
import DB_MESSAGES from 'api/utils/db/db_messages';

export class Controller {
  private messages = DB_MESSAGES;
  private averages = DB_AVERAGES;

  constructor() {}
}
