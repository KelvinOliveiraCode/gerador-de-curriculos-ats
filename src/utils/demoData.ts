import type { PersonalData, Education, Experience, Language } from '@/types';

export const demoPersonal: PersonalData = {
  nome: 'Maria Fernanda Silva',
  cargo: 'Analista de Marketing Digital',
  resumo:
    'Profissional com 5 anos de experiência em marketing digital e gestão de campanhas online. Especialista em SEO, Google Ads e análise de métricas. Proativa, com forte capacidade analítica e foco em resultados mensuráveis.',
  email: 'maria.silva@email.com',
  telefone: '(11) 98765-4321',
  cidade: 'São Paulo, SP',
  linkedin: 'linkedin.com/in/mariafernandasilva',
  github: '',
};

export const demoEducation: Education[] = [
  {
    id: 1,
    instituicao: 'Universidade de São Paulo (USP)',
    curso: 'Bacharelado em Administração',
    periodo: '2015 - 2019',
  },
  {
    id: 2,
    instituicao: 'Fundação Getulio Vargas (FGV)',
    curso: 'MBA em Marketing Digital',
    periodo: '2020 - 2021',
  },
];

export const demoExperience: Experience[] = [
  {
    id: 1,
    empresa: 'Agência Digital Nova',
    cargo: 'Analista de Marketing Digital Sênior',
    periodo: 'Mar 2023 - Atual',
    descricao:
      'Gestão de campanhas publicitárias em Google Ads e Meta Ads com orçamento mensal de R$ 150 mil. Aumento de 35% na taxa de conversão em 6 meses. Liderança de equipe de 3 analistas júnior.',
  },
  {
    id: 2,
    empresa: 'E-commerce Brasil',
    cargo: 'Especialista em SEO',
    periodo: 'Ago 2021 - Fev 2023',
    descricao:
      'Otimização de estratégias de SEO que resultaram em aumento de 120% no tráfego orgânico. Implementação de estrutura de dados e melhoria de Core Web Vitals.',
  },
  {
    id: 3,
    empresa: 'Startup Tech',
    cargo: 'Assistente de Marketing',
    periodo: 'Jan 2020 - Jul 2021',
    descricao:
      'Criação de conteúdo para redes sociais e blog corporativo. Análise de métricas e relatórios de performance mensais. Suporte em campanhas de e-mail marketing.',
  },
];

export const demoSkills: string[] = [
  'Google Ads',
  'Meta Ads',
  'SEO',
  'Google Analytics',
  'WordPress',
  'Canva',
  'Figma',
  'Excel Avançado',
  'Power BI',
  'Copywriting',
  'E-mail Marketing',
  'Gestão de Projetos',
];

export const demoLanguages: Language[] = [
  { id: 1, idioma: 'Português', nivel: 'Nativo' },
  { id: 2, idioma: 'Inglês', nivel: 'Avançado' },
  { id: 3, idioma: 'Espanhol', nivel: 'Intermediário' },
];
