import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()

export default class ReservationsMailer {

    static async CancelReservation(email, price) {

        // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: process.env.EMAIL, // generated ethereal user
      pass: process.env.PASSWORD, // generated ethereal password
    },
  });

  const options ={
    from: 'airlineasquared@outlook.com', // sender address
  to: email, // list of receivers
  subject: "Ticket Cancellation", // Subject line
  text: `This is to confirm that you have cancelled your ticket reservation and will be refunded $${price}`,
}

  // send mail with defined transport object
transporter.sendMail(options, function(err,info){
if(err){
  console.log(err);
  return;
}
console.log("Sent: "+info.response);
  });



    }



}