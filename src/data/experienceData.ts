export const experienceData = [
  {
    title: 'Développeur Front-end',
    company: 'Tech Solutions Inc.',
    duration: 'Septembre 2023 - Présent',
    description: `Développement et maintenance d'applications web responsives en React.js et TypeScript. Collaboration avec l'équipe de design pour implémenter des interfaces utilisateur intuitives.`,    technologies: ['React', 'TypeScript', 'SCSS', 'Redux', 'REST API'],  },  {    title: 'Stagiaire Développeur Web',    company: 'Web Innovators',    duration: 'Juin 2022 - Août 2022',    description: `Participation au développement d'un site e-commerce en utilisant HTML, CSS, JavaScript et Node.js. Optimisation des performances et amélioration de l'expérience utilisateur.`,    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],  },  {    title: 'Assistant Technique',    company: 'Université de Grenoble',    duration: 'Septembre 2021 - Mai 2022',    description: `Support technique aux étudiants et professeurs, gestion des équipements informatiques et résolution de problèmes logiciels et matériels.`,    technologies: ['Windows', 'Linux', 'Hardware Troubleshooting'],  },
];

export type ExperienceItem = {
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies?: string[];
};
