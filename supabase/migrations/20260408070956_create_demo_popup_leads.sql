/*
  # Create demo_popup_leads table

  1. New Tables
    - `demo_popup_leads`
      - `id` (uuid, primary key)
      - `first_name` (text, required)
      - `last_name` (text, required)
      - `phone` (text, required)
      - `email` (text, required)
      - `created_at` (timestamptz, auto-set)

  2. Security
    - Enable RLS on `demo_popup_leads` table
    - Public INSERT policy: anyone can submit their info via the popup form
    - No SELECT/UPDATE/DELETE for unauthenticated users (data is admin-only)
*/

CREATE TABLE IF NOT EXISTS demo_popup_leads (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL DEFAULT '',
  last_name  text NOT NULL DEFAULT '',
  phone      text NOT NULL DEFAULT '',
  email      text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE demo_popup_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a demo lead"
  ON demo_popup_leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
