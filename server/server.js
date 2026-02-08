const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const mongoose = require("mongoose");
const Contact = require("./models/Contact");

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

const nodemailer = require("nodemailer"); // Import Nodemailer

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Debug logging
    console.log("Attempting to save contact:", { name, email, message });
    console.log("Email User loaded:", !!process.env.EMAIL_USER);
    console.log("Email Pass loaded:", !!process.env.EMAIL_PASS);

    // Save to Database
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    console.log("Contact saved to DB");

    // Send Email Notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      replyTo: email, // Reply to the sender
      subject: `Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info.response);
      res.status(201).json({ message: "Message sent successfully" });
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      res.status(500).json({ error: "Failed to send email", details: emailError.message });
    }


  } catch (error) {
    console.error("Server Error Full Details:", error);
    res.status(500).json({ error: "Failed to send message", details: error.message });
  }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${PORT}`);
});


