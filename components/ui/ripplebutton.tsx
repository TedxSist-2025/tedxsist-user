import { useState } from "react";

interface RippleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const RippleButton: React.FC<RippleButtonProps> = ({ children, onClick }) => {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>(
    []
  );

  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const newRipple = { x, y, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600); // Remove ripple after animation
  };

  return (
    <button
      onClick={(event) => {
        createRipple(event);
        onClick?.();
      }}
      className="relative overflow-hidden rounded-md bg-primary px-6 py-3 text-white shadow-lg transition-all hover:bg-primary/90"
    >
      {children}
      <span className="absolute inset-0 pointer-events-none">
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute h-10 w-10 -translate-x-1/2 -translate-y-1/2 animate-ripple rounded-full bg-white/30"
            style={{ left: ripple.x, top: ripple.y }}
          />
        ))}
      </span>
    </button>
  );
};

export default RippleButton;
