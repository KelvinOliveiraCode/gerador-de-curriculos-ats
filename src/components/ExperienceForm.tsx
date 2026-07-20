import { Section, Input } from '.';
import { TrashIcon, PlusIcon } from './icons';
import type { Experience, UILabels } from '@/types';

interface ExperienceFormProps {
  items: Experience[];
  setItems: (items: Experience[]) => void;
  labels: UILabels;
}

const emptyExperience: Omit<Experience, 'id'> = { empresa: '', cargo: '', periodo: '', descricao: '' };

export function ExperienceForm({ items, setItems, labels }: ExperienceFormProps) {
  const add = () => setItems([...items, { ...emptyExperience, id: Date.now() }]);
  const remove = (id: number) => setItems(items.filter((i) => i.id !== id));
  const update = (id: number, field: keyof Omit<Experience, 'id'>, value: string) => {
    setItems(items.map((i) => (i.id === id ? { ...i, [field]: value } : i)));
  };

  return (
    <Section title={labels.workExperience}>
      {items.map((item, idx) => (
        <div key={item.id} className="item-card">
          <div className="item-header">
            <span className="item-number">{labels.experienceN} {idx + 1}</span>
            <button
              type="button"
              className="btn-icon"
              onClick={() => remove(item.id)}
              title="Remover"
              aria-label="Remover experiência"
            >
              <TrashIcon />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <Input
              label={labels.company}
              value={item.empresa}
              onChange={(v) => update(item.id, 'empresa', v)}
              placeholder={labels.placeholderCompany}
            />
            <Input
              label={labels.role}
              value={item.cargo}
              onChange={(v) => update(item.id, 'cargo', v)}
              placeholder={labels.placeholderRoleExp}
            />
            <Input
              label={labels.period}
              value={item.periodo}
              onChange={(v) => update(item.id, 'periodo', v)}
              placeholder={labels.placeholderPeriodExp}
            />
          </div>
          <Input
            label={labels.description}
            value={item.descricao}
            onChange={(v) => update(item.id, 'descricao', v)}
            textarea
            placeholder={labels.placeholderDescription}
          />
        </div>
      ))}
      <button type="button" className="btn-add" onClick={add}>
        <PlusIcon /> {labels.addExperience}
      </button>
    </Section>
  );
}
