-- Darshan Bharat Database Schema
-- Tables for trips, customer registrations, events, and bookings

-- Customers table
CREATE TABLE IF NOT EXISTS customers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  phone VARCHAR(20) NOT NULL,
  address TEXT NOT NULL,
  city VARCHAR(100),
  state VARCHAR(100),
  country VARCHAR(100),
  zip_code VARCHAR(10),
  status VARCHAR(50) DEFAULT 'active'
);

-- Trips/Packages table
CREATE TABLE IF NOT EXISTS trips (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  package_name VARCHAR(255) NOT NULL,
  description TEXT,
  duration_days INT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  destinations TEXT[],
  start_date DATE,
  end_date DATE,
  max_capacity INT,
  current_registrations INT DEFAULT 0,
  status VARCHAR(50) DEFAULT 'active'
);

-- Registrations/Bookings table
CREATE TABLE IF NOT EXISTS registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  customer_id UUID REFERENCES customers(id),
  trip_id UUID REFERENCES trips(id),
  number_of_passengers INT NOT NULL,
  total_price DECIMAL(10, 2),
  booking_date DATE,
  status VARCHAR(50) DEFAULT 'pending'
);

-- Events table
CREATE TABLE IF NOT EXISTS events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  event_name VARCHAR(255) NOT NULL,
  event_date DATE NOT NULL,
  event_type VARCHAR(100),
  location VARCHAR(255),
  description TEXT,
  capacity INT,
  registered_count INT DEFAULT 0,
  status VARCHAR(50) DEFAULT 'active'
);

-- Event Registrations table
CREATE TABLE IF NOT EXISTS event_registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  event_id UUID REFERENCES events(id),
  customer_id UUID REFERENCES customers(id),
  status VARCHAR(50) DEFAULT 'registered'
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_customers_email ON customers(email);
CREATE INDEX IF NOT EXISTS idx_customers_phone ON customers(phone);
CREATE INDEX IF NOT EXISTS idx_registrations_customer_id ON registrations(customer_id);
CREATE INDEX IF NOT EXISTS idx_registrations_trip_id ON registrations(trip_id);
CREATE INDEX IF NOT EXISTS idx_registrations_status ON registrations(status);
CREATE INDEX IF NOT EXISTS idx_trips_status ON trips(status);
CREATE INDEX IF NOT EXISTS idx_events_status ON events(status);
