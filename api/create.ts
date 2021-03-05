import { NowRequest, NowResponse } from '@vercel/node';
import Antenna from 'iotex-antenna/lib/antenna';

export default async function (req: NowRequest, res: NowResponse) {
  const antenna = new Antenna("http://api.testnet.iotex.one:80");

  const acct = antenna.iotx.accounts.create();

  res.send(`created account: ${JSON.stringify(acct)}!`);
};
