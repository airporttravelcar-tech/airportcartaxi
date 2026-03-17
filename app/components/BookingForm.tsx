'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './BookingForm.module.css';

const vehicles = [
  { value: 'standard', label: '🚗 Standard Saloon (1-4 passengers)' },
  { value: 'executive', label: '🚙 Executive Car (1-4 passengers)' },
  { value: 'mpv', label: '🚐 MPV 6-Seater (1-6 passengers)' },
  { value: 'minibus', label: '🚌 Minibus 8-Seater (1-8 passengers)' },
  { value: 'luxury', label: '🏆 Luxury Chauffeur (1-4 passengers)' },
];

interface BookingFormProps {
  variant?: 'hero' | 'page' | 'compact';
}

export default function BookingForm({ variant = 'page' }: BookingFormProps) {
  const router = useRouter();
  const [form, setForm] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    passengers: '1',
    luggage: '1',
    vehicle: 'standard',
    returnJourney: false,
    returnDate: '',
    returnTime: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate quote request
    await new Promise((r) => setTimeout(r, 800));
    // Build WhatsApp message as fallback
    const msg = encodeURIComponent(
      `Hi, I'd like to book a taxi!\n\nPickup: ${form.pickup}\nDrop-off: ${form.dropoff}\nDate: ${form.date}\nTime: ${form.time}\nPassengers: ${form.passengers}\nLuggage: ${form.luggage}\nVehicle: ${form.vehicle}`
    );
    window.open(`https://wa.me/447700900000?text=${msg}`, '_blank');
    setLoading(false);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className={`${styles.formCard} ${styles[variant]}`}>
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>Get an Instant Quote</h2>
        <p className={styles.formSubtitle}>Fixed prices — no hidden fees</p>
      </div>
      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        <div className={styles.fieldRow}>
          <div className={styles.field}>
            <label htmlFor="pickup" className={styles.label}>
              <span className={styles.labelIcon}>📍</span> Pickup Location
            </label>
            <input
              id="pickup"
              name="pickup"
              type="text"
              className={`form-input ${styles.input}`}
              placeholder="e.g. Heathrow Airport T5"
              value={form.pickup}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="dropoff" className={styles.label}>
              <span className={styles.labelIcon}>🏁</span> Drop-off Location
            </label>
            <input
              id="dropoff"
              name="dropoff"
              type="text"
              className={`form-input ${styles.input}`}
              placeholder="e.g. London Victoria Hotel"
              value={form.dropoff}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.fieldRow}>
          <div className={styles.field}>
            <label htmlFor="date" className={styles.label}>
              <span className={styles.labelIcon}>📅</span> Travel Date
            </label>
            <input
              id="date"
              name="date"
              type="date"
              className={`form-input ${styles.input}`}
              min={today}
              value={form.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="time" className={styles.label}>
              <span className={styles.labelIcon}>🕐</span> Pickup Time
            </label>
            <input
              id="time"
              name="time"
              type="time"
              className={`form-input ${styles.input}`}
              value={form.time}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.fieldRow}>
          <div className={styles.field}>
            <label htmlFor="passengers" className={styles.label}>
              <span className={styles.labelIcon}>👥</span> Passengers
            </label>
            <select
              id="passengers"
              name="passengers"
              className={`form-input form-select ${styles.input}`}
              value={form.passengers}
              onChange={handleChange}
            >
              {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} Passenger{n > 1 ? 's' : ''}</option>)}
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor="luggage" className={styles.label}>
              <span className={styles.labelIcon}>🧳</span> Luggage Bags
            </label>
            <select
              id="luggage"
              name="luggage"
              className={`form-input form-select ${styles.input}`}
              value={form.luggage}
              onChange={handleChange}
            >
              {[0,1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} Bag{n !== 1 ? 's' : ''}</option>)}
            </select>
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="vehicle" className={styles.label}>
            <span className={styles.labelIcon}>🚘</span> Vehicle Type
          </label>
          <select
            id="vehicle"
            name="vehicle"
            className={`form-input form-select ${styles.input}`}
            value={form.vehicle}
            onChange={handleChange}
          >
            {vehicles.map(v => <option key={v.value} value={v.value}>{v.label}</option>)}
          </select>
        </div>

        <label className={styles.checkboxRow}>
          <input
            type="checkbox"
            name="returnJourney"
            checked={form.returnJourney}
            onChange={handleChange}
            className={styles.checkbox}
          />
          <span>Add return journey</span>
        </label>

        {form.returnJourney && (
          <div className={styles.fieldRow}>
            <div className={styles.field}>
              <label htmlFor="returnDate" className={styles.label}>Return Date</label>
              <input
                id="returnDate"
                name="returnDate"
                type="date"
                className={`form-input ${styles.input}`}
                min={form.date || today}
                value={form.returnDate}
                onChange={handleChange}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="returnTime" className={styles.label}>Return Time</label>
              <input
                id="returnTime"
                name="returnTime"
                type="time"
                className={`form-input ${styles.input}`}
                value={form.returnTime}
                onChange={handleChange}
              />
            </div>
          </div>
        )}

        <button
          type="submit"
          className={`btn btn--primary btn--lg ${styles.submitBtn}`}
          disabled={loading}
          id="booking-form-submit"
        >
          {loading ? (
            <><span className={styles.spinner} /> Getting Your Quote...</>
          ) : (
            <>🚖 Get Instant Quote</>
          )}
        </button>

        <p className={styles.disclaimer}>
          ✓ Free cancellation &nbsp;|&nbsp; ✓ Free waiting time &nbsp;|&nbsp; ✓ Fixed price
        </p>
      </form>
    </div>
  );
}
