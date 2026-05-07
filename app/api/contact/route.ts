import { NextResponse } from 'next/server';

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function extractEmailAddress(value: string): string {
  const match = value.match(/<([^>]+)>/);
  return (match?.[1] ?? value).trim();
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;
    const name = body.name?.trim() ?? '';
    const email = body.email?.trim() ?? '';
    const phone = body.phone?.trim() ?? '';
    const subject = body.subject?.trim() ?? '';
    const message = body.message?.trim() ?? '';

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { ok: false, error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim() ?? '';
    const toEmail = process.env.CONTACT_TO_EMAIL?.trim() || 'ck@contentcraftinfotech.com';
    const fromEmailAddress = extractEmailAddress(fromEmail);

    if (!apiKey || !fromEmail || !isValidEmail(fromEmailAddress) || !isValidEmail(toEmail)) {
      return NextResponse.json(
        {
          ok: false,
          error:
            'Email service is not configured correctly. Set RESEND_API_KEY, a valid CONTACT_FROM_EMAIL, and a valid CONTACT_TO_EMAIL in environment variables.',
        },
        { status: 500 }
      );
    }

    const emailPayload = {
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `Website Contact: ${subject}`,
      text: [
        'New contact form submission',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || 'N/A'}`,
        `Subject: ${subject}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    };

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    });

    if (!resendResponse.ok) {
      const resendError = await resendResponse.text();
      return NextResponse.json(
        { ok: false, error: 'Failed to send email.', details: resendError },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, message: 'Message sent successfully.' });
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid request payload.' },
      { status: 400 }
    );
  }
}
