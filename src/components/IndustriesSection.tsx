import { Home, Activity, Scale, Wrench, DollarSign, Car, Heart, BookOpen, Dumbbell, UtensilsCrossed, Hotel, ShoppingCart, Shield } from 'lucide-react';

const industries = [
  { icon: Home, label: 'Real Estate' },
  { icon: Activity, label: 'Healthcare & Clinics' },
  { icon: Scale, label: 'Legal Services' },
  { icon: Wrench, label: 'Home Services' },
  { icon: DollarSign, label: 'Mortgage & Finance' },
  { icon: Car, label: 'Automotive' },
  { icon: Heart, label: 'Beauty & Wellness' },
  { icon: BookOpen, label: 'Education' },
  { icon: Dumbbell, label: 'Fitness & Gyms' },
  { icon: UtensilsCrossed, label: 'Restaurants' },
  { icon: Hotel, label: 'Hospitality' },
  { icon: ShoppingCart, label: 'E-Commerce' },
  { icon: Shield, label: 'Insurance' },
];

export default function IndustriesSection() {
  return (
    <section className="industries-section">
      <p className="section-tag text-center" style={{ display: 'block' }}>Works Across Every Industry</p>
      <div className="industries-grid">
        {industries.map((ind) => (
          <div key={ind.label} className="industry-pill">
            <ind.icon size={15} strokeWidth={1.7} className="industry-icon" />
            <span>{ind.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
