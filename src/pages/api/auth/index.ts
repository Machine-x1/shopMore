import { setCookie } from 'cookies-next';
import type { NextApiRequest, NextApiResponse } from 'next';

import handleLoginServer from '@/source/server/Auth/Login';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(403).json({ message: 'Method Not Support ' });
  }

  const { email, password } = req.body;
  const values = {
    email,
    password,
  };
  const handleLogin = await handleLoginServer(values);

  // save token in the cookies
  setCookie('access_token', handleLogin, { req, res });

  return res.status(200).json({ access_token: handleLogin });
}
