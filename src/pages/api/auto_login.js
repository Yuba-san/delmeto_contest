import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();
export default async function handler(req, res) {
  const req_data = req.body.cookie;
  const data = await prisma.user.findMany({
    where: {
      cookie: req_data, 
    },
  });

  if (req_data === data[0].cookie) {
    res.status(200).json(true);
  } else {
    res.status(400).json(false);
  }
}