const nodemailer = require('nodemailer');
const config = require('./config');
const template = require('./template');
const shell = require('shelljs')

if (!config || !config.email || !config.pass || !config.to) {
  console.log('oops! touch a config file for your gmail address, password and receiver!');
  return;
}

if (!config.repoPath) {
  console.log('oops! repo path is NEED!');
  return;
}

let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: config.email,
    pass: config.pass
  }
});

let date = new Date();

let mailOptions = {
  from: `${config.from}  <${config.email}>`,
  to: config.to,
  subject: `Daily Report - ${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}.`,
  html: ''
};

var sendMailToBoss = (commits) => {
  mailOptions.html = template(commits.replace(/\*/g, '').split('\n'));
  console.log(mailOptions.html);

  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     return _sendFailEmail(error);
  //   }

  //   console.log('Congratuations!\n Message %s sent: %s', info.messageId, info.response);
  // });
};

shell.cd(config.repoPath);

shell.exec('git log --graph --pretty=format:"%s" --abbrev-commit  --since="0am"', {
  silent: true
}, (code, stdout, stderr) => {
  if (code != 0) {

  }
  sendMailToBoss(stdout);
});

function _sendFailEmail(err) {
  console.log(err);

  transporter.sendMail({
    from: mailOptions.from,
    to: mailOptions.from,
    subject: 'Failed! Boss did not get your email!',
    text: err ? JSON.stringify(err) : `send email failed`
  });
}
