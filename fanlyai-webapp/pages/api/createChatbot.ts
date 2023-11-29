import { NextApiRequest, NextApiResponse } from "next";

import prisma from '../../libs/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if (req.method !== 'POST') {
        return res.status(405).end();
      }

}