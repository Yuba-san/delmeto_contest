import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';

const prisma = new PrismaClient();
export default async function handler(req, res) {
    function getSecureRandom(){
        const buff = crypto.randomBytes(64);  // バイナリで8byteのランダムな値を生成
        const hex  = buff.toString("hex");   // 16進数の文字列に変換
      
        return ( hex );         // integerに変換して返却
      }
    const req_mail = req.body.mail;
    const req_pass = req.body.password;
    const req_name = req.body.name;
    if(req_mail != "")
    {
        if(req_pass != "")
        {
            if(req_name != "")
            {
                const req_cookie = getSecureRandom();
                try{
                const data = await prisma.user.create({
                    data: {
                        mail: req_mail, 
                        password: req_pass, 
                        name: req_name,
                        cookie: req_cookie,
                    },
                });
                    res.status(200).json({status: "ok", cookie: req_cookie});
                    }
                    catch(error){
                    res.status(400).json({status: "error", error: error});
                    }
            }
            else
            {
                res.status(200).json({status: "no_name"});
            }
        }
        else
        {
            res.status(200).json({status: "no_password"});
        }
    }
    else
    {
        res.status(200).json({status: "no_mail"});
    }
}