import type { ChangeEvent } from 'react';

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
}

export function Input({ label, value, onChange, type = 'text', placeholder = '', textarea = false }: InputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <label className="form-field">
      <span className="form-label">{label}</span>
      {textarea ? (
        <textarea rows={4} value={value} onChange={handleChange} placeholder={placeholder} className="form-textarea" />
      ) : (
        <input type={type} value={value} onChange={handleChange} placeholder={placeholder} className="form-input" />
      )}
    </label>
  );
}
