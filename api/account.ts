import { NowRequest, NowResponse } from '@vercel/node';
import Antenna from 'iotex-antenna';

export default async function (req: NowRequest, res: NowResponse) {
  const antenna = new Antenna("http://api.testnet.iotex.one:80");
  const { address = 'io1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqd39ym7' } = req.query;

  const acct = antenna.iotx.accounts.create();

  // const account = await antenna.iotx.getAccount({
  //   address: "io183utcxzg0haqa7df2qqlltrwaf42wswj2rpu5w"
  // });
  res.send(`account ${address} balance: ${JSON.stringify(acct)}!`);
};
