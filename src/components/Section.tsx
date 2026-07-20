import { useState, type ReactNode } from 'react';
import { ChevronDownIcon } from './icons';

interface SectionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function Section({ title, children, defaultOpen = true }: SectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="section-card">
      <button
        type="button"
        className="section-header"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className={`section-chevron ${open ? 'open' : ''}`}>
          <ChevronDownIcon />
        </span>
      </button>
      {open && <div className="section-body">{children}</div>}
    </div>
  );
}
