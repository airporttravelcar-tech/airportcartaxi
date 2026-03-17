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
      .from('bookings')
      .insert([
        { 
          id,
          pickup: data.pickup,
          dropoff: data.dropoff,
          date: data.date,
          time: data.time,
          passengers: data.passengers,
          luggage: data.luggage,
          vehicle_type: data.vehicleType,
          return_journey: data.returnJourney,
          return_date: data.returnDate,
          return_time: data.returnTime,
          name: data.name,
          email: data.email,
          phone: data.phone,
          status: 'pending'
        }
      ]);

    if (dbError) {
      console.error('Supabase DB Error:', dbError);
      // Even if DB fails, try to send the email so the lead is not lost
    }

    // 2. Send email notification via Resend
    let returnDetailsHtml = '';
    if (data.returnJourney) {
      returnDetailsHtml = `
        <h3>Return Journey Details</h3>
        <p><strong>Return Date:</strong> ${data.returnDate}</p>
        <p><strong>Return Time:</strong> ${data.returnTime}</p>
      `;
    }

    const { error: emailError } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Default sender for Resend free tier testing
      to: 'airporttravelcar@gmail.com', // Customer's email
      subject: `New Booking Request from ${data.name} - Airport Car Taxi`,
      html: `
        <h2>New Booking Request</h2>
        <p>A new booking request has been submitted through the website. Here are the details:</p>
        
        <h3>Customer Details</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        
        <h3>Journey Details</h3>
        <p><strong>Pickup:</strong> ${data.pickup}</p>
        <p><strong>Dropoff:</strong> ${data.dropoff}</p>
        <p><strong>Date:</strong> ${data.date}</p>
        <p><strong>Time:</strong> ${data.time}</p>
        <p><strong>Passengers:</strong> ${data.passengers}</p>
        <p><strong>Luggage:</strong> ${data.luggage}</p>
        <p><strong>Vehicle Type:</strong> ${data.vehicleType}</p>
        
        ${returnDetailsHtml}
        
        <br/>
        <p><em>Booking ID: ${id}</em></p>
      `
    });

    if (emailError) {
      console.error('Resend Email Error:', emailError);
      return NextResponse.json({ success: false, error: 'Failed to send email notification' }, { status: 500 });
    }

    return NextResponse.json({ success: true, bookingId: id });
    
  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
