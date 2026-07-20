import { useState, useRef, useEffect } from 'react';
import {
  PersonalForm,
  EducationForm,
  ExperienceForm,
  SkillsForm,
  LanguagesForm,
  ResumePreview,
} from '@/components';
import {
  DownloadIcon,
  EyeIcon,
  EyeOffIcon,
  FileTextIcon,
} from '@/components/icons';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { exportToPDF } from '@/utils/exportPDF';
import {
  demoPersonal,
  demoEducation,
  demoExperience,
  demoSkills,
  demoLanguages,
} from '@/utils/demoData';
import { UI_LABELS } from '@/types';
import type { PersonalData, Education, Experience, Language, ResumeLanguage } from '@/types';

const STORAGE_KEY = 'ats-resume-data';

const emptyPersonal: PersonalData = {
  nome: '',
  cargo: '',
  resumo: '',
  email: '',
  telefone: '',
  cidade: '',
  linkedin: '',
  github: '',
};

interface StoredData {
  personal: PersonalData;
  education: Education[];
  experience: Experience[];
  skills: string[];
  languages: Language[];
  resumeLang: ResumeLanguage;
}

function App() {
  const [storedData, setStoredData] = useLocalStorage<StoredData | null>(STORAGE_KEY, null);
  const [personal, setPersonal] = useState<PersonalData>(emptyPersonal);
  const [education, setEducation] = useState<Education[]>([]);
  const [experience, setExperience] = useState<Experience[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [languages, setLanguages] = useState<Language[]>([]);
  const [resumeLang, setResumeLang] = useState<ResumeLanguage>('pt');
  const [showPreviewMobile, setShowPreviewMobile] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  const labels = UI_LABELS[resumeLang];

  // Load data: prefer stored, fallback to demo
  useEffect(() => {
    if (storedData) {
      setPersonal(storedData.personal);
      setEducation(storedData.education);
      setExperience(storedData.experience);
      setSkills(storedData.skills);
      setLanguages(storedData.languages);
      setResumeLang(storedData.resumeLang || 'pt');
    } else {
      setPersonal(demoPersonal);
      setEducation(demoEducation);
      setExperience(demoExperience);
      setSkills(demoSkills);
      setLanguages(demoLanguages);
      setResumeLang('pt');
    }
    setLoaded(true);
  }, []);

  // Auto-save on change
  useEffect(() => {
    if (!loaded) return;
    setStoredData({ personal, education, experience, skills, languages, resumeLang });
  }, [personal, education, experience, skills, languages, resumeLang, loaded]);

  const handleExportPDF = () => {
    if (!resumeRef.current) return;
    exportToPDF(resumeRef.current, personal.nome || 'curriculo');
  };

  const handleReset = () => {
    const confirmMsg = resumeLang === 'pt'
      ? 'Tem certeza que deseja limpar todos os dados?'
      : 'Are you sure you want to clear all data?';
    if (window.confirm(confirmMsg)) {
      setPersonal(emptyPersonal);
      setEducation([]);
      setExperience([]);
      setSkills([]);
      setLanguages([]);
      setResumeLang('pt');
      setStoredData(null);
    }
  };

  const toggleLang = () => {
    setResumeLang((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 flex-shrink-0 z-10">
        <div className="max-w-[1600px] mx-auto h-[60px] flex items-center justify-between">
          <div className="flex items-center gap-2.5 text-lg font-bold text-slate-800">
            <FileTextIcon className="text-blue-600" />
            <span>ATS Resume Builder</span>
          </div>
          <div className="flex items-center gap-2.5">
            {/* Toggle Idioma */}
            <button
              type="button"
              className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200 hover:bg-slate-200 transition-colors"
              onClick={toggleLang}
              title={resumeLang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
            >
              <span className="text-base">🌐</span>
              <span className="uppercase font-bold">{resumeLang}</span>
            </button>

            <button
              type="button"
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors"
              onClick={handleReset}
            >
              {labels.clear}
            </button>
            <button
              type="button"
              className="flex sm:hidden items-center gap-1.5 px-3.5 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200"
              onClick={() => setShowPreviewMobile(!showPreviewMobile)}
            >
              {showPreviewMobile ? (
                <>
                  <EyeOffIcon /> {labels.edit}
                </>
              ) : (
                <>
                  <EyeIcon /> {labels.preview}
                </>
              )}
            </button>
            <button
              type="button"
              className="flex items-center gap-1.5 px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
              onClick={handleExportPDF}
            >
              <DownloadIcon /> {labels.exportPDF}
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex overflow-hidden">
        {/* Editor Panel */}
        <aside
          className={`editor-panel w-full sm:w-[45%] sm:min-w-[380px] sm:max-w-[560px] bg-slate-100 overflow-y-auto ${
            showPreviewMobile ? 'hidden' : 'block'
          } sm:block`}
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#94a3b8 #f1f5f9',
          }}
        >
          <div className="px-6 py-5">
            <PersonalForm data={personal} setData={setPersonal} labels={labels} />
            <ExperienceForm items={experience} setItems={setExperience} labels={labels} />
            <EducationForm items={education} setItems={setEducation} labels={labels} />
            <SkillsForm items={skills} setItems={setSkills} labels={labels} />
            <LanguagesForm items={languages} setItems={setLanguages} labels={labels} resumeLang={resumeLang} />
            <div className="h-10" />
          </div>
        </aside>

        {/* Preview Panel */}
        <aside
          className={`preview-panel flex-1 bg-slate-200 overflow-y-auto flex flex-col items-center ${
            showPreviewMobile ? 'block' : 'hidden'
          } sm:block`}
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#94a3b8 #e2e8f0',
          }}
        >
          <div className="px-6 py-8 w-full flex justify-center">
            <ResumePreview
              personal={personal}
              education={education}
              experience={experience}
              skills={skills}
              languages={languages}
              resumeLang={resumeLang}
              ref={resumeRef}
            />
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;
