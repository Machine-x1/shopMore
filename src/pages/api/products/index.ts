import type { NextApiRequest, NextApiResponse } from 'next';

import { getAllProducts } from '@/source/server/products/fetchallproducts/getAllProducts';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
  const productsFetch = await getAllProducts();
  res.status(200).json({ message: productsFetch });
}
