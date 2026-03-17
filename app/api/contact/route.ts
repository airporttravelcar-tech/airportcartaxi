import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''; 
    const supabase = createClient(supabaseUrl, supabaseKey);

    const resend = new Resend(process.env.RESEND_API_KEY || '');

    const data = await request.json();
    const id = uuidv4();

    // 1. Insert into Supabase database
    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert([
        { 
          id,
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          status: 'new'
        }
      ]);

    if (dbError) {
      console.error('Supabase DB Error:', dbError);
    }

    // 2. Send email notification via Resend
    const { error: emailError } = await resend.emails.send({
      from: 'onboarding@resend.dev', 
      to: 'airporttravelcar@gmail.com',
      subject: `New Contact Form Submission from ${data.name} - Airport Car Taxi`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p>A new message has been submitted through the contact form:</p>
        
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Message:</strong></p>
        <blockquote>${data.message.replace(/\n/g, '<br>')}</blockquote>
        
        <br/>
        <p><em>Message ID: ${id}</em></p>
      `
    });

    if (emailError) {
      console.error('Resend Email Error:', emailError);
      return NextResponse.json({ success: false, error: 'Failed to send email notification' }, { status: 500 });
    }

    return NextResponse.json({ success: true, messageId: id });
    
  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
