import nodemailer from'nodemailer';
let mailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: ''
  }
});

let mailDetails = {
  from: '',
  to: '',
  subject: '',
  text: ''
};
const sendEmail = (subjectEmail = '', templateEmail = '', toEmail = '') => {
  const customContent = {
    ...mailDetails,
    subject: subjectEmail,
    text: templateEmail,
    to: toEmail
  }
   mailTransporter.sendMail(customContent, function(err, data) {
    if(err) {
    return err;
    } else {
     return data;
    }
  })
}

export default sendEmail;
