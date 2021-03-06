import { NowRequest, NowResponse } from '@vercel/node';
import browserEnv from "browser-env";
import RpcMethod from 'iotex-antenna/lib/rpc-method/browser-rpc-method';

export default async function (req: NowRequest, res: NowResponse) {
  browserEnv();

  console.log("before new rpc method");
  const antenna = new RpcMethod("http://api.testnet.iotex.one:80");
  const { address = 'io1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqd39ym7' } = req.query;

  console.log("before request rpc");
  // @ts-ignore
  const acct = await antenna.getAccount({address});

  res.send(`account ${address} balance: ${JSON.stringify(acct)}!`);
};
