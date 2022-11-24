import { getCookie } from 'cookies-next';
import type { NextApiRequest, NextApiResponse } from 'next';

import handleUserProfileServer from '@/source/server/Auth/UserProfile';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(403).json({ message: 'Method Not Support ' });
  }

  // get token from the cookies
  const accessToken = getCookie('access_token', { req, res });

  if (
    accessToken === undefined ||
    accessToken === null ||
    typeof accessToken === 'boolean'
  ) {
    return res.status(404).json({ access_token: 'access token not found' });
  }

  const handleUserProfile = await handleUserProfileServer(accessToken);

  return res.status(200).json({ ...handleUserProfile });
}
