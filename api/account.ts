import { NowRequest, NowResponse } from '@vercel/node';
import Antenna from 'iotex-antenna';

export default async function (req: NowRequest, res: NowResponse) {
  const antenna = new Antenna("http://api.testnet.iotex.one:80");
  const { address = 'io1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqd39ym7' } = req.query;
  // @ts-ignore
  const account = await antenna.iotx.getAccount({address});
  console.log(account);
  res.send(`account ${address} balance: ${account.accountMeta.balance}!`);
};
