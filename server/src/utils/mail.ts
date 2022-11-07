import { createTransport, SendMailOptions } from "nodemailer";

import { development } from "../config";

const SendMail = async (mailOptions: SendMailOptions) => {
    const mailerTransport = createTransport({
        host:"smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            type: "OAUTH2",
            user: development.email,
            password: development.emailPassword,
            clientId: development.clientId,
            clientSecret: development.clientSecret,
            accessToken:development.accessToken,
            refreshToken: development.refreshToken
        }
    } as any);

    return mailerTransport.sendMail({...mailOptions, from: development.email}, (err, info) => {
        if (err) {
          console.log("Email sent Failed with err", err);
        } else {
          console.log("Email sent successfully", info.response);
        }
      })
}

export default SendMail;