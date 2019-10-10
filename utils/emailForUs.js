const nodemailer = require("nodemailer");
const pug = require("pug");
const htmlToText = require("html-to-text");

module.exports = class EmailForUs {
  constructor(name, email, content) {
    this.to = "florian.seran@gmail.com";
    this.name = name;
    this.content = content;
    this.from = email;
  }

  static newTransport() {
    // Sendgrid
    return nodemailer.createTransport({
      service: "SendGrid",
      auth: {
        user: process.env.SENDGRID_USERNAME,
        pass: process.env.SENDGRID_PASSWORD
      }
    });
  }

  // Send the actual email
  async send(template, subject) {
    // 1) Render HTML based on a pug template
    // const html = pug.renderFile(`./pages/templates/email/${template}.pug`, {
    //   name: this.name,
    //   email: this.from,
    //   content: this.content
    // });

    // 2) Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html: this.content,
      text: this.content
      // html,
      // text: htmlToText.fromString(html)
    };

    // 3) Create a transport and send email
    await EmailForUs.newTransport().sendMail(mailOptions);
  }

  async sendContactEmail() {
    await this.send("contactEmail", "Nouveau message");
  }
};
