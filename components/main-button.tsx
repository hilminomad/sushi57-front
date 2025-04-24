import React from 'react';

interface DottedButtonProps {
  label: string; // Button text
  onClick?: () => void; // Click handler
  className?: string; // Additional custom styles
}

const DottedButton: React.FC<DottedButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      className={`rounded-2xl border-2 border-dashed bg-(--color-primary) border-(--color-black-primary) px-6 py-3 font-bold uppercase text-(--color-black-primary) transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#fbcf1f] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none  hover:border-(--color-primary) hover:bg-(--color-black-primary) hover:text-(--color-primary) cursor-pointer ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default DottedButton;