export const experienceData = [
  {
    title: 'Développeur web',
    company: 'MSH-Alpes',
    duration: '2024 - 2025',
    description: `Pas encore de description`,
    technologies: ['UI Design', 'UX Research', 'Figma', 'HTML/CSS', 'JavaScript', 'React', 'PHP', 'MySQL'],
  },
  {
    title: 'Développeur web',
    company: 'MSH-Alpes',
    duration: '2023 - 2024',
    description: `J'ai eu l'opportunité de travailler chez MSH-Alpes (Plateforme SCREEN) en tant que développeur web pendant l'été dernier. Au cours de ce stage, j'ai été chargé de concevoir et de développer un module de création, de gestion et de déploiement de questionnaires en ligne pour aider les chercheurs en SHS à recueillir des données de manière efficace et professionnelle. Ce module permet aux utilisateurs de créer des questionnaires personnalisés, de les gérer et de les déployer en ligne, et de visualiser les résultats sous forme de graphiques et de tableaux.\n\nAu cours de ce projet, j'ai eu l'occasion de travailler sur des technologies web modernes. J'ai également eu l'occasion de développer mes compétences en conception d'interface utilisateur et en gestion de projet.\n\nCe stage m'a permis de développer mes compétences en programmation et en conception d'interface utilisateur, et de mieux comprendre les besoins des chercheurs en SHS en matière de collecte de données. J'ai également appris à travailler en équipe et à gérer les contraintes de temps et de budget d'un projet réel.`,
    technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL', 'JATOS'],
  },
];

export type ExperienceItem = {
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies?: string[];
};
