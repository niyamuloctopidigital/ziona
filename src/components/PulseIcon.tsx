import { type LucideIcon } from 'lucide-react';

interface PulseIconProps {
  icon: LucideIcon;
  color?: string;
  size?: number;
}

export default function PulseIcon({ icon: Icon, color = '#9B6FF4', size = 22 }: PulseIconProps) {
  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px' }}>
      <div className="pulse-ring" />
      <div className="pulse-ring pulse-ring-2" />
      <Icon
        size={size}
        color={color}
        strokeWidth={1.5}
        className="pulse-icon-glow"
        style={{ position: 'relative', zIndex: 1 }}
      />
    </div>
  );
}
