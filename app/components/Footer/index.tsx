import { Trophy } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#01482e] text-white py-4 text-center">
      <div className="flex items-center justify-center gap-2 text-sm">
        <Trophy data-testid="trophy-icon" size={16} strokeWidth={2} />
        <span>&copy;Arash2026 - Draw Maker</span>
      </div>
    </footer>
  );
};

export default Footer;
