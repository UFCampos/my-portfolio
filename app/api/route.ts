import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


export const POST = async (req: NextRequest) => {
    try {
        const { name, email, message } = await req.json();
        const PASSWORD = process.env.PASSWORD
    
        if (!name || !email || !message) {
            throw Error ('Todos los campos son obligatorios')
          }
          console.log(PASSWORD)
          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'urielcampos448@gmail.com',
              pass: PASSWORD,
            },
          });
          

          await transporter.sendMail({
            from: `${name} <${email}>`, 
            to: 'urielcampos448@gmail.com', 
            subject: "Portfolio Contact Form", 
            text: message + '\n\n' + email, 
          });
          
        return NextResponse.json({ message: 'Email enviado correctamente.'} );
        
    } catch (error : any) {
        console.log(error)
        return NextResponse.json({ error: error.message });
    }
}
