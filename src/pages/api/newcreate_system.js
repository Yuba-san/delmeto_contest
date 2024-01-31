import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';

const prisma = new PrismaClient();
export default async function handler(req, res) {
    const req_name = req.body.name;
    const req_author = req.body.author;
    const req_cookie = req.body.cookie;
    if(req_name != "")
    {
        if(req_author != "")
        {
            if(req_cookie != "")
            {
                try{
                const login_data = await prisma.user.findMany({
                    where: {
                        cookie: req_cookie,
                    },
                    });
                    console.log(login_data)
                    if (req_cookie == login_data[0].cookie) {
                    const data = await prisma.page.create({
                        data: {
                            name: req_name,
                            author: req_author,
                            admin: String(login_data[0].id)
                        },
                    });
                    console.log(data)
                        res.status(200).json({status: "ok"});
                    }
                    else
                    {
                        res.status(200).json({status: "no_login"});
                    }
                }
                catch(error){
                    res.status(400).json({status: "error", error: error});
                    }
            }
            else
            {
                res.status(200).json({status: "no_login"});
            }
        }
        else
        {
            res.status(200).json({status: "no_author"});
        }
    }
    else
    {
        res.status(200).json({status: "no_name"});
    }
}