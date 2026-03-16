import emailjs from '@emailjs/browser';

// Initialize EmailJS on first load
if (typeof window !== 'undefined') {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');
}

export async function sendMessage(name: string, email: string, message: string): Promise<boolean> {
    try {
        const result = await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
            {
                from_name: name,
                from_email: email,
                message: message,
            }
        );

        console.log('Email sent successfully:', result);
        return true;
    } catch (error) {
        console.error('Failed to send email:', error);
        return false;
    }
}