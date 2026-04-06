const industries = [
  { emoji: '🏠', label: 'Real Estate' },
  { emoji: '🏥', label: 'Healthcare & Clinics' },
  { emoji: '⚖️', label: 'Legal Services' },
  { emoji: '🔧', label: 'Home Services' },
  { emoji: '💰', label: 'Mortgage & Finance' },
  { emoji: '🚗', label: 'Automotive' },
  { emoji: '💅', label: 'Beauty & Wellness' },
  { emoji: '🎓', label: 'Education' },
  { emoji: '🏋️', label: 'Fitness & Gyms' },
  { emoji: '🍽️', label: 'Restaurants' },
  { emoji: '🏨', label: 'Hospitality' },
  { emoji: '📦', label: 'E-Commerce' },
  { emoji: '🛡️', label: 'Insurance' },
];

export default function IndustriesSection() {
  return (
    <section className="industries-section">
      <p className="section-tag text-center" style={{ display: 'block' }}>Works Across Every Industry</p>
      <div className="industries-grid">
        {industries.map((ind) => (
          <div key={ind.label} className="industry-pill">
            <span className="industry-emoji">{ind.emoji}</span>
            <span>{ind.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
