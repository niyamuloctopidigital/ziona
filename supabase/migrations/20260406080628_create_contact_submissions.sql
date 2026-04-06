/*
  # Create contact_submissions table

  ## Summary
  Stores form submissions from the Jack Ryan AI website contact form.

  ## New Tables
  - `contact_submissions`
    - `id` (uuid, primary key) — unique identifier
    - `name` (text, not null) — full name of the submitter
    - `email` (text, not null) — email address
    - `phone` (text) — optional phone number
    - `message` (text) — optional message body
    - `created_at` (timestamptz) — submission timestamp

  ## Security
  - RLS enabled on `contact_submissions`
  - INSERT policy: anyone (including unauthenticated users) can submit the form
  - SELECT policy: only authenticated users can read submissions (admin access)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
