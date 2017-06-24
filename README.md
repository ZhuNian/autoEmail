# autoEmail

automatically send a email to your BOSS base on your daily commit message

## install
```
npm install
```

## config
a config template file elaborates the configs needed to send your mail, rename it to config.js. 

## email template
email template is template.js and there is a template html output, emailTemplate.html, which you can check the email you will send
out and change the template.js if needed

## usage
commit your message by: 'I did awesome things today;50%;BOSS is stupid'

```
node .
```

then you will send a email to your boss in a table:

```
index   work           percent    comment
0       I did..        50%        Boss is stupid
```

### Code example

```
config: {
repoPath: '',    //the absolue path of your repo
email: '',       //your email addr
pass: '',        //your email password
from: '',        //your name
to: '',          //your boss and workmates
phone: '',       //your phone
workingEmail: '' //your working email
}
```
