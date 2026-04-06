interface CTABandProps {
  onBook: () => void;
}

export default function CTABand({ onBook }: CTABandProps) {
  return (
    <div className="cta-band">
      <div className="cta-glow" />
      <div className="cta-inner">
        <h2>Ready to Let AI Work Your Pipeline?</h2>
        <p>
          Book a 15-minute live demo. Watch the AI qualify a real lead in real time. No pressure — just proof of what's possible.
        </p>
        <button className="btn-primary" onClick={onBook}>
          Book Your Free Demo
        </button>
      </div>
    </div>
  );
}
