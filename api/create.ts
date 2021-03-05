import { NowRequest, NowResponse } from '@vercel/node';
import { Accounts } from 'iotex-antenna/lib/account/accounts';

export default async function (req: NowRequest, res: NowResponse) {
  const acct = new Accounts().create();

  res.send(`created account: ${JSON.stringify(acct)}!`);
};
