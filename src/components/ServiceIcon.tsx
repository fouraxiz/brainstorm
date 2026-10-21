import { BadgeCheck, Flame, Layers, Lightbulb, Package, Printer, Spline, Tag } from "lucide-react";

const icons = { BadgeCheck, Flame, Layers, Lightbulb, Package, Printer, Spline, Tag };

export default function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name as keyof typeof icons] ?? Tag;
  return <Icon className={className} />;
}
