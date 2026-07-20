export interface PersonalData {
  nome: string;
  cargo: string;
  resumo: string;
  email: string;
  telefone: string;
  cidade: string;
  linkedin: string;
  github: string;
}

export interface Education {
  id: number;
  instituicao: string;
  curso: string;
  periodo: string;
}

export interface Experience {
  id: number;
  empresa: string;
  cargo: string;
  periodo: string;
  descricao: string;
}

export interface Language {
  id: number;
  idioma: string;
  nivel: string;
}

export interface UILabels {
  // Header
  exportPDF: string;
  clear: string;
  edit: string;
  preview: string;
  // Sections
  personalData: string;
  workExperience: string;
  education: string;
  skills: string;
  languages: string;
  // Personal form
  fullName: string;
  desiredRole: string;
  professionalSummary: string;
  email: string;
  phone: string;
  city: string;
  linkedin: string;
  github: string;
  // Experience form
  company: string;
  role: string;
  period: string;
  description: string;
  addExperience: string;
  experienceN: string;
  // Education form
  institution: string;
  course: string;
  addEducation: string;
  educationN: string;
  // Skills form
  skillsPlaceholder: string;
  // Languages form
  language: string;
  level: string;
  addLanguage: string;
  // Levels
  basic: string;
  intermediate: string;
  advanced: string;
  fluent: string;
  native: string;
  // Resume labels
  resumeProfessionalSummary: string;
  resumeWorkExperience: string;
  resumeEducation: string;
  resumeSkills: string;
  resumeLanguages: string;
  // Placeholders
  placeholderName: string;
  placeholderRole: string;
  placeholderSummary: string;
  placeholderEmail: string;
  placeholderPhone: string;
  placeholderCity: string;
  placeholderLinkedIn: string;
  placeholderGitHub: string;
  placeholderInstitution: string;
  placeholderCourse: string;
  placeholderPeriod: string;
  placeholderCompany: string;
  placeholderRoleExp: string;
  placeholderPeriodExp: string;
  placeholderDescription: string;
  placeholderLanguage: string;
}

export type ResumeLanguage = 'pt' | 'en';

export const UI_LABELS: Record<ResumeLanguage, UILabels> = {
  pt: {
    // Header
    exportPDF: 'Exportar PDF',
    clear: 'Limpar',
    edit: 'Editar',
    preview: 'Visualizar',
    // Sections
    personalData: 'Dados Pessoais',
    workExperience: 'Experiência Profissional',
    education: 'Formação',
    skills: 'Habilidades',
    languages: 'Idiomas',
    // Personal form
    fullName: 'Nome completo',
    desiredRole: 'Cargo desejado',
    professionalSummary: 'Resumo profissional',
    email: 'E-mail',
    phone: 'Telefone',
    city: 'Cidade',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    // Experience form
    company: 'Empresa',
    role: 'Cargo',
    period: 'Período',
    description: 'Descrição',
    addExperience: 'Adicionar experiência',
    experienceN: 'Experiência',
    // Education form
    institution: 'Instituição',
    course: 'Curso',
    addEducation: 'Adicionar formação',
    educationN: 'Formação',
    // Skills form
    skillsPlaceholder: 'Digite uma habilidade e pressione Enter',
    // Languages form
    language: 'Idioma',
    level: 'Nível',
    addLanguage: 'Adicionar idioma',
    // Levels
    basic: 'Básico',
    intermediate: 'Intermediário',
    advanced: 'Avançado',
    fluent: 'Fluente',
    native: 'Nativo',
    // Resume labels
    resumeProfessionalSummary: 'Resumo Profissional',
    resumeWorkExperience: 'Experiência Profissional',
    resumeEducation: 'Formação Acadêmica',
    resumeSkills: 'Habilidades',
    resumeLanguages: 'Idiomas',
    // Placeholders
    placeholderName: 'Ex: João da Silva',
    placeholderRole: 'Ex: Desenvolvedor Full Stack',
    placeholderSummary: 'Breve descrição sobre sua trajetória...',
    placeholderEmail: 'exemplo@email.com',
    placeholderPhone: '(11) 99999-9999',
    placeholderCity: 'São Paulo, SP',
    placeholderLinkedIn: 'linkedin.com/in/...',
    placeholderGitHub: 'github.com/...',
    placeholderInstitution: 'Universidade/Instituição',
    placeholderCourse: 'Nome do curso',
    placeholderPeriod: 'Ex: 2018 - 2022',
    placeholderCompany: 'Nome da empresa',
    placeholderRoleExp: 'Seu cargo',
    placeholderPeriodExp: 'Ex: Jan 2020 - Atual',
    placeholderDescription: 'Descreva suas atividades e conquistas...',
    placeholderLanguage: 'Ex: Inglês',
  },
  en: {
    // Header
    exportPDF: 'Export PDF',
    clear: 'Clear',
    edit: 'Edit',
    preview: 'Preview',
    // Sections
    personalData: 'Personal Information',
    workExperience: 'Work Experience',
    education: 'Education',
    skills: 'Skills',
    languages: 'Languages',
    // Personal form
    fullName: 'Full name',
    desiredRole: 'Desired role',
    professionalSummary: 'Professional summary',
    email: 'Email',
    phone: 'Phone',
    city: 'City',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    // Experience form
    company: 'Company',
    role: 'Role',
    period: 'Period',
    description: 'Description',
    addExperience: 'Add experience',
    experienceN: 'Experience',
    // Education form
    institution: 'Institution',
    course: 'Course',
    addEducation: 'Add education',
    educationN: 'Education',
    // Skills form
    skillsPlaceholder: 'Type a skill and press Enter',
    // Languages form
    language: 'Language',
    level: 'Level',
    addLanguage: 'Add language',
    // Levels
    basic: 'Basic',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
    fluent: 'Fluent',
    native: 'Native',
    // Resume labels
    resumeProfessionalSummary: 'Professional Summary',
    resumeWorkExperience: 'Work Experience',
    resumeEducation: 'Education',
    resumeSkills: 'Skills',
    resumeLanguages: 'Languages',
    // Placeholders
    placeholderName: 'Ex: John Doe',
    placeholderRole: 'Ex: Full Stack Developer',
    placeholderSummary: 'Brief description of your career...',
    placeholderEmail: 'example@email.com',
    placeholderPhone: '(555) 123-4567',
    placeholderCity: 'New York, NY',
    placeholderLinkedIn: 'linkedin.com/in/...',
    placeholderGitHub: 'github.com/...',
    placeholderInstitution: 'University/Institution',
    placeholderCourse: 'Course name',
    placeholderPeriod: 'Ex: 2018 - 2022',
    placeholderCompany: 'Company name',
    placeholderRoleExp: 'Your role',
    placeholderPeriodExp: 'Ex: Jan 2020 - Present',
    placeholderDescription: 'Describe your activities and achievements...',
    placeholderLanguage: 'Ex: English',
  },
};

export const LEVELS: Record<ResumeLanguage, string[]> = {
  pt: ['Básico', 'Intermediário', 'Avançado', 'Fluente', 'Nativo'],
  en: ['Basic', 'Intermediate', 'Advanced', 'Fluent', 'Native'],
};

export interface ResumeData {
  personal: PersonalData;
  education: Education[];
  experience: Experience[];
  skills: string[];
  languages: Language[];
  resumeLang: ResumeLanguage;
}
