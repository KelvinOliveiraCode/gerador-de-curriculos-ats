import { Section, Input } from '.';
import { TrashIcon, PlusIcon } from './icons';
import type { Education, UILabels } from '@/types';

interface EducationFormProps {
  items: Education[];
  setItems: (items: Education[]) => void;
  labels: UILabels;
}

const emptyEducation: Omit<Education, 'id'> = { instituicao: '', curso: '', periodo: '' };

export function EducationForm({ items, setItems, labels }: EducationFormProps) {
  const add = () => setItems([...items, { ...emptyEducation, id: Date.now() }]);
  const remove = (id: number) => setItems(items.filter((i) => i.id !== id));
  const update = (id: number, field: keyof Omit<Education, 'id'>, value: string) => {
    setItems(items.map((i) => (i.id === id ? { ...i, [field]: value } : i)));
  };

  return (
    <Section title={labels.education}>
      {items.map((item, idx) => (
        <div key={item.id} className="item-card">
          <div className="item-header">
            <span className="item-number">{labels.educationN} {idx + 1}</span>
            <button
              type="button"
              className="btn-icon"
              onClick={() => remove(item.id)}
              title="Remover"
              aria-label="Remover formação"
            >
              <TrashIcon />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <Input
              label={labels.institution}
              value={item.instituicao}
              onChange={(v) => update(item.id, 'instituicao', v)}
              placeholder={labels.placeholderInstitution}
            />
            <Input
              label={labels.course}
              value={item.curso}
              onChange={(v) => update(item.id, 'curso', v)}
              placeholder={labels.placeholderCourse}
            />
            <Input
              label={labels.period}
              value={item.periodo}
              onChange={(v) => update(item.id, 'periodo', v)}
              placeholder={labels.placeholderPeriod}
            />
          </div>
        </div>
      ))}
      <button type="button" className="btn-add" onClick={add}>
        <PlusIcon /> {labels.addEducation}
      </button>
    </Section>
  );
}
