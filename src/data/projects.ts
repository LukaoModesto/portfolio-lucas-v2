export type Project = {
  title: string
  description: string
  stack: string[]
  status: 'Em desenvolvimento' | 'Finalizado' | 'Planejado'
  githubUrl: string
  liveUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'LifeHUB',
    description:
      'Aplicação de produtividade focada em agenda, eventos, lembretes e organização pessoal. O projeto está sendo desenvolvido com backend estruturado, autenticação JWT e planejamento para versão PWA.',
    stack: ['FastAPI', 'React', 'TypeScript', 'Tailwind CSS', 'JWT', 'SQLite'],
    status: 'Em desenvolvimento',
    githubUrl: 'https://github.com/LukaoModesto/LifeHUB',
    liveUrl: 'https://life-hub-henna.vercel.app/login',
    featured: true,
  },
  {
    title: 'Task Manager API',
    description:
      'API REST para gerenciamento de tarefas, desenvolvida com Flask, SQLAlchemy e SQLite, com operações completas de CRUD.',
    stack: ['Python', 'Flask', 'SQLAlchemy', 'SQLite'],
    status: 'Finalizado',
    githubUrl: 'https://github.com/LukaoModesto/task_manager_api',
  },
  // {
  //   title: 'Diário de Estudos',
  //   description:
  //     'Aplicação web para registrar estudos, acompanhar progresso e organizar anotações de aprendizado.',
  //   stack: ['Python', 'Flask', 'HTML', 'CSS', 'JSON'],
  //   status: 'Finalizado',
  //   githubUrl: 'https://github.com/LukaoModesto/diario_web',
  // },
  {
    title: 'Portfólio Pessoal',
    description:
      'Primeira versão do meu portfólio pessoal, criada para apresentar meus projetos, habilidades e informações de contato.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    status: 'Finalizado',
    githubUrl: 'https://github.com/LukaoModesto/Site_portfolio',
    liveUrl: 'https://lukaomodesto.github.io/Site_portfolio/',
  },
]