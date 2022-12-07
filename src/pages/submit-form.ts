import { APIRoute } from "astro"
import * as fs from "fs";
import * as Joi from "joi";
import * as path from "path";
import * as ejs from "ejs";
import * as nodemailer from "nodemailer";
import * as htmlToText from "html-to-text";
import * as http from "http";

export const post: APIRoute = async ({ request }) => {

  if (request.headers.get("Content-Type") === "application/json") {

    try {

      const body = await request.json();

      const name = body.name;
      const email = body.email;
      const organisation = body.organisation;
      const message = body.message;

      const bodySchemaVerify = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        organisation: Joi.string().required(),
        message: Joi.string().required()
      });

      const { error } = bodySchemaVerify.validate(body);

      if (error) throw new Error('invalidPayload');

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "email-smtp.eu-west-2.amazonaws.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'AKIA2F3J3LKWCOT5L25I',
          pass: 'BOdrNab1qYYZLz740fOuE423LFnkvcmjDEsHmrLFKHVW',
        },
      });

      const templatePath = 'https://litter-lotto.s3.eu-west-2.amazonaws.com/work-with-us-request.html';

      let compiledHtml = '';
      let compiledText = '';

      const response = await fetch(templatePath);
      const template = await response.text();

      const html = ejs.render(template, {
        name,
        email,
        organisation,
        message
      });

      const text = htmlToText.htmlToText(html);

      compiledHtml = html;
      compiledText = text;

      //send mail with defined transport object
      let info = transporter.sendMail({
        from: 'noreply@litterlotto.com', // sender address
        to: 'joshualyness@outlook.com, simon.jacobs@litterlotto.com, peter@litterlotto.com', // list of receivers
        subject: `${name} — New Work With Us Request | Litter Lotto`, // Subject line
        html: compiledHtml,
        text: compiledText
      });

      return new Response(JSON.stringify({
      }), {
        status: 200
      })
    } catch (e) {
      return new Response(e, { status: 400 });
    }
  }
  return new Response(null, { status: 400 });
}