import { Section, Input } from '.';
import { TrashIcon, PlusIcon } from './icons';
import type { Language, UILabels, ResumeLanguage } from '@/types';
import { LEVELS } from '@/types';

interface LanguagesFormProps {
  items: Language[];
  setItems: (items: Language[]) => void;
  labels: UILabels;
  resumeLang: ResumeLanguage;
}

const emptyLanguage: Omit<Language, 'id'> = { idioma: '', nivel: '' };

export function LanguagesForm({ items, setItems, labels, resumeLang }: LanguagesFormProps) {
  const levels = LEVELS[resumeLang];
  const defaultLevel = levels[1];

  const add = () => setItems([...items, { ...emptyLanguage, id: Date.now(), nivel: defaultLevel }]);
  const remove = (id: number) => setItems(items.filter((i) => i.id !== id));
  const update = (id: number, field: keyof Omit<Language, 'id'>, value: string) => {
    setItems(items.map((i) => (i.id === id ? { ...i, [field]: value } : i)));
  };

  return (
    <Section title={labels.languages}>
      {items.map((item) => (
        <div key={item.id} className="item-card !flex-row gap-3 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 flex-1">
            <Input
              label={labels.language}
              value={item.idioma}
              onChange={(v) => update(item.id, 'idioma', v)}
              placeholder={labels.placeholderLanguage}
            />
            <label className="form-field">
              <span className="form-label">{labels.level}</span>
              <select
                className="form-input"
                value={item.nivel || defaultLevel}
                onChange={(e) => update(item.id, 'nivel', e.target.value)}
              >
                {levels.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <button
            type="button"
            className="btn-icon mt-6"
            onClick={() => remove(item.id)}
            title="Remover"
            aria-label="Remover idioma"
          >
            <TrashIcon />
          </button>
        </div>
      ))}
      <button type="button" className="btn-add" onClick={add}>
        <PlusIcon /> {labels.addLanguage}
      </button>
    </Section>
  );
}
