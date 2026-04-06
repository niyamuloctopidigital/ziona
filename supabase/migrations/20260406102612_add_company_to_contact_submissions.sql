/*
  # Add company column to contact_submissions

  ## Changes
  - `contact_submissions`
    - Added `company` (text) — optional company name of the submitter
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'company'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN company text DEFAULT '';
  END IF;
END $$;
