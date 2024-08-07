// pages/api/send-contact-request.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, company, email, phone, projectDetails, selectedPackage, selectedFrequency, location } = req.body;

        // Create a transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        // Define the email options
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.EMAIL_RECIPIENT,
            subject: 'Contact Request',
            text: `
                Name: ${name}
                Company: ${company}
                Email: ${email}
                Phone: ${phone}
                Project Details: ${projectDetails}
                Selected Package: ${selectedPackage}
                Selected Frequency: ${selectedFrequency}
                Location: Latitude: ${location.latitude}, Longitude: ${location.longitude}
                `,
        };

        // Send the email
        try {
            await transporter.sendMail(mailOptions);
            console.log('Email sent successfully');
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            const errorMessage = (error instanceof Error) ? error.message : 'Unknown error';
            console.error('Error sending email:', errorMessage);
            res.status(500).json({ message: 'Error sending email', error: errorMessage });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}