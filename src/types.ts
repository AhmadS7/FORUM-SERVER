// import { EntityManager, IDatabaseDriver, Connection } from '@mikro-orm/core';
// import { Request, Response, Express } from 'express';

// export type MyContext = {
//   em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
//   req: Request & { session?: Express.Session };
//   res: Response;
// };

import { EntityManager, IDatabaseDriver, Connection } from '@mikro-orm/core';
import { Request, Response } from 'express';
import { Session, SessionData } from 'express-session';

export type MyContext = {
  em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
  req: Request & {
    session: Session & Partial<SessionData> & { userId?: number };
  };
  res: Response;
};
