import { NowRequest, NowResponse } from '@vercel/node';
import { fromString } from 'iotex-antenna/lib/crypto/address'

export default function (req: NowRequest, res: NowResponse) {
  const { address = 'io1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqd39ym7' } = req.query;
  // @ts-ignore
  res.send(`eth address: ${fromString(address).stringEth}!`);
};
