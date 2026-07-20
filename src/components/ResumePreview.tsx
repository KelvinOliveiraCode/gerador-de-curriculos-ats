import { forwardRef } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, LinkedInIcon, GitHubIcon } from './icons';
import { UI_LABELS } from '@/types';
import type { PersonalData, Education, Experience, Language, ResumeLanguage } from '@/types';

interface ResumePreviewProps {
  personal: PersonalData;
  education: Education[];
  experience: Experience[];
  skills: string[];
  languages: Language[];
  resumeLang: ResumeLanguage;
}

export const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(
  ({ personal, education, experience, skills, languages, resumeLang }, ref) => {
    const labels = UI_LABELS[resumeLang];

    return (
      <div className="resume-paper" ref={ref}>
        {/* HEADER */}
        <header className="resume-header">
          <h1 className="resume-name">{personal.nome || 'Seu Nome'}</h1>
          <p className="resume-role">{personal.cargo || 'Cargo Desejado'}</p>
          <div className="resume-contact">
            {personal.email && (
              <span>
                <MailIcon width="13" height="13" /> {personal.email}
              </span>
            )}
            {personal.telefone && (
              <span>
                <PhoneIcon width="13" height="13" /> {personal.telefone}
              </span>
            )}
            {personal.cidade && (
              <span>
                <MapPinIcon width="13" height="13" /> {personal.cidade}
              </span>
            )}
            {personal.linkedin && (
              <span>
                <LinkedInIcon width="13" height="13" /> {personal.linkedin}
              </span>
            )}
            {personal.github && (
              <span>
                <GitHubIcon width="13" height="13" /> {personal.github}
              </span>
            )}
          </div>
        </header>

        {/* RESUMO */}
        {personal.resumo && (
          <section className="resume-section">
            <h2 className="resume-section-title">{labels.resumeProfessionalSummary}</h2>
            <p className="resume-text">{personal.resumo}</p>
          </section>
        )}

        {/* EXPERIÊNCIA */}
        {experience.length > 0 && (
          <section className="resume-section">
            <h2 className="resume-section-title">{labels.resumeWorkExperience}</h2>
            {experience.map((exp) => (
              <div key={exp.id} className="resume-entry">
                <div className="resume-entry-header">
                  <div>
                    <h3 className="resume-entry-title">{exp.cargo || 'Cargo'}</h3>
                    <p className="resume-entry-subtitle">{exp.empresa || 'Empresa'}</p>
                  </div>
                  <span className="resume-entry-date">{exp.periodo || 'Período'}</span>
                </div>
                {exp.descricao && <p className="resume-text">{exp.descricao}</p>}
              </div>
            ))}
          </section>
        )}

        {/* FORMAÇÃO */}
        {education.length > 0 && (
          <section className="resume-section">
            <h2 className="resume-section-title">{labels.resumeEducation}</h2>
            {education.map((edu) => (
              <div key={edu.id} className="resume-entry">
                <div className="resume-entry-header">
                  <div>
                    <h3 className="resume-entry-title">{edu.curso || 'Curso'}</h3>
                    <p className="resume-entry-subtitle">{edu.instituicao || 'Instituição'}</p>
                  </div>
                  <span className="resume-entry-date">{edu.periodo || 'Período'}</span>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* HABILIDADES */}
        {skills.length > 0 && (
          <section className="resume-section">
            <h2 className="resume-section-title">{labels.resumeSkills}</h2>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <span key={skill} className="resume-skill">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* IDIOMAS */}
        {languages.length > 0 && (
          <section className="resume-section">
            <h2 className="resume-section-title">{labels.resumeLanguages}</h2>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {languages.map((lang) => (
                <div key={lang.id} className="flex items-center gap-1.5 text-[13px]">
                  <span className="resume-lang-name">{lang.idioma || 'Idioma'}</span>
                  <span className="resume-lang-level">{lang.nivel}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    );
  }
);

ResumePreview.displayName = 'ResumePreview';
