const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "9cf470180c2ef5",
        pass: "b4f0a92c0d0669",
    },
});

module.exports = {
    sendMail: async function (to, url) {
        await transporter.sendMail({
            from: 'admin@haha.com',
            to: to,
            subject: "reset password email",
            text: "click vao day de doi pass", // Plain-text version of the message
            html: "click vao <a href=" + url+ ">day</a> de doi pass", // HTML version of the message
        })
    },
    sendUserImportEmail: async function (to, username, password) {
        await transporter.sendMail({
            from: 'admin@haha.com',
            to: to,
            subject: "Welcome to the system - Your Account Credentials",
            text: `Hello ${username},\nYour account has been created.\nUsername: ${username}\nPassword: ${password}\nPlease change your password after logging in.`,
            html: `<p>Hello <b>${username}</b>,</p>
                   <p>Your account has been created.</p>
                   <p><b>Username:</b> ${username}</p>
                   <p><b>Password:</b> ${password}</p>
                   <p>Please change your password after logging in.</p>`,
        })
    }
}

// Send an email using async/await
