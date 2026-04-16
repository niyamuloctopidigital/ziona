interface CTABandProps {
  onBook: () => void;
}

export default function CTABand({ onBook }: CTABandProps) {
  return (
    <div className="cta-band">
      <div className="cta-glow" />
      <div className="cta-inner">
        <h2>Start Booking More Appointments This Week</h2>
        <p>
          Try ZIONA AI free for 10 days. If it doesn't book appointments, cancel. No questions asked.
        </p>
        <button className="btn-primary" onClick={onBook}>
          START FREE TRIAL
        </button>
      </div>
    </div>
  );
}
