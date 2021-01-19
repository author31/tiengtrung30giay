const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API);

exports.handler = async function(event, context, callback) {
    const data = JSON.parse(event);
    const msg = {
        to: "authorwong31@gmail.com",
        from: data.email,
        subject: `You have a new message from ${data.email}`,
        message: data.message
    }
    sgMail.send(msg)
}