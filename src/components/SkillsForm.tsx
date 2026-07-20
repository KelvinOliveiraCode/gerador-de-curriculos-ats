import { useState, type KeyboardEvent } from 'react';
import { Section } from '.';
import type { UILabels } from '@/types';

interface SkillsFormProps {
  items: string[];
  setItems: (items: string[]) => void;
  labels: UILabels;
}

export function SkillsForm({ items, setItems, labels }: SkillsFormProps) {
  const [input, setInput] = useState('');

  const add = () => {
    const val = input.trim();
    if (val && !items.includes(val)) {
      setItems([...items, val]);
      setInput('');
    }
  };

  const remove = (val: string) => setItems(items.filter((i) => i !== val));

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      add();
    }
  };

  return (
    <Section title={labels.skills}>
      <div className="flex flex-col gap-2.5">
        <div className="flex flex-wrap gap-2">
          {items.map((tag) => (
            <span key={tag} className="tag">
              {tag}
              <button
                type="button"
                className="tag-remove"
                onClick={() => remove(tag)}
                aria-label={`Remover ${tag}`}
              >
                ×
              </button>
            </span>
          ))}
        </div>
        <input
          className="tag-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={labels.skillsPlaceholder}
        />
      </div>
    </Section>
  );
}
