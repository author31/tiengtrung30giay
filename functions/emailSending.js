const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API)
exports.handler = async (event, context, callback) => {
    
    const data = JSON.parse(event.body);
    console.log(data)
    const msg = {
        to: "authorwong31@gmail.com",
        from: "tiengtrung30s@outlook.com",
        templateId: "d-a0a242f61a5d4c53bebc863f22faca32",
        dynamic_template_data: {
            subject: `You have a new message from ${data.email}`,
            message: data.message,
            name: data.name,
            email: data.email
        }
        
    }
    try{
        await sgMail.send(msg).then(res => console.log(res))
        return {
            statusCode: 200,
            body: "Message sent"
        }
    } catch(e){
        console.log(e.response.body)
        return {
            statusCode: e.code,
            body: e.message
        }
    }
}