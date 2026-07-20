import { Section, Input } from '.';
import type { PersonalData, UILabels } from '@/types';

interface PersonalFormProps {
  data: PersonalData;
  setData: (data: PersonalData) => void;
  labels: UILabels;
}

export function PersonalForm({ data, setData, labels }: PersonalFormProps) {
  const update = <K extends keyof PersonalData>(field: K, value: PersonalData[K]) => {
    setData({ ...data, [field]: value });
  };

  return (
    <Section title={labels.personalData}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <Input
          label={labels.fullName}
          value={data.nome}
          onChange={(v) => update('nome', v)}
          placeholder={labels.placeholderName}
        />
        <Input
          label={labels.desiredRole}
          value={data.cargo}
          onChange={(v) => update('cargo', v)}
          placeholder={labels.placeholderRole}
        />
      </div>
      <Input
        label={labels.professionalSummary}
        value={data.resumo}
        onChange={(v) => update('resumo', v)}
        textarea
        placeholder={labels.placeholderSummary}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <Input
          label={labels.email}
          value={data.email}
          onChange={(v) => update('email', v)}
          placeholder={labels.placeholderEmail}
        />
        <Input
          label={labels.phone}
          value={data.telefone}
          onChange={(v) => update('telefone', v)}
          placeholder={labels.placeholderPhone}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <Input
          label={labels.city}
          value={data.cidade}
          onChange={(v) => update('cidade', v)}
          placeholder={labels.placeholderCity}
        />
        <Input
          label={labels.linkedin}
          value={data.linkedin}
          onChange={(v) => update('linkedin', v)}
          placeholder={labels.placeholderLinkedIn}
        />
        <Input
          label={labels.github}
          value={data.github}
          onChange={(v) => update('github', v)}
          placeholder={labels.placeholderGitHub}
        />
      </div>
    </Section>
  );
}
