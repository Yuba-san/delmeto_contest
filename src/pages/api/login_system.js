import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();
export default async function handler(req, res) {
    const req_mail = req.body.mail;
    const req_pass = req.body.password;
  const data = await prisma.user.findMany({
    where: {
      mail: req_mail, 
    },
  });
  if(data != [])
  {
    if (req_pass === data[0].password) {
      res.status(200).json({status: "ok", cookie: data[0].cookie, id: data[0].id});
    } else {
      res.status(200).json({status: "miss_password"});
    }
  }
  else{
    res.status(200).json({status: "miss_mail"});
  }
}