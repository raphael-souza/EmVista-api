import { IMailProvider, IMessage } from "../IMailProvider";
import * as nodemailer from "nodemailer";
import * as Mail from "nodemailer/lib/mailer";

export class MailtrapMailProvider implements IMailProvider {
  private transporter: Mail;
  constructor(){
    
    // dados devem ser substituidos!

    this.transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '5b037fde40d482',
        pass: 'ef053ffe25135f'
      }
    })
   }

  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email
      },
      from: {
        name: message.from.name,
        address: message.from.email
      },
      subject: message.subject,
      html: message.body
    })
  }
}
