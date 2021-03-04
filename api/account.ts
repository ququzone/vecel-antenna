import { NowRequest, NowResponse } from '@vercel/node';
import Antenna from 'iotex-antenna';

export default function (req: NowRequest, res: NowResponse) {
  const antenna = new Antenna("http://api.testnet.iotex.one:80");
  const { address = 'io1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqd39ym7' } = req.query;
  // @ts-ignore
  res.send(`account ${address} balance: ${(await antenna.iotx.getAccount({address})).accountMeta.balance}!`);
};
