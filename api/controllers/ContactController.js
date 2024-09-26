
const nodemailer = require("nodemailer");
require('dotenv').config();


const contact = async (request, response, next) => {
    try{
        const { name, email, message } = request.body;
        if (!name || !email || !message) {
            return response.status(400).send({error:"Por favor preencha todos os campos disponíveis."})
        }

        console.log("teste", process.env.EMAIL_USER, process.env.EMAIL_PASS)
        const transporter = nodemailer.createTransport({
            port: 465,  
            host: "smtp.gmail.com",
               auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                 },
            secure: true,
            });

        const mailData = {
            from: email,  // sender address
            to: process.env.EMAIL_USER,   // list of receivers
            subject: `Contato realizado pelo website portfolio - ${name}`,
            text: message,
            };

        transporter.sendMail(mailData, function (err, info) {
            if(err)
               console.log(err)
            else
                return response.status(200).send({message:"Obrigado por entrar em contato, responderei em breve!"})
            });
      
    }catch(err) {
        console.log({ error });
        return response.status(500).send("Internal Server Error ")
    }

}

module.exports = contact;