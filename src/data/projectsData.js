// src/data/projectsData.js

export const projectsData = [
  {
    id: 1,
    title: "Terraforma",
    short_description:
      "Création d'un jeu vidéo ludo-éducatif pour un niveau de 3ème en SVT.",
    long_description:
      "Ce projet a été réalisé dans le cadre de mes études. L'objectif était de créer un jeu sérieux pour aider les élèves de 3ème à comprendre les concepts de la SVT de manière interactive. Le jeu met le joueur au défi de terraformer une planète en respectant des contraintes écologiques.",
    tags: ["Éducation", "Jeu Vidéo"],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    imageUrl: "/src/assets/projects/terraforma.png",
    sourceCodeUrl: "https://github.com/matteo-lorenzi/terraforma",
    liveDemoUrl: null,
  },
  {
    id: 2,
    title: "GameJam",
    short_description: "Création d'un jeu en lien avec l'IUT.",
    long_description:
      'Participation à une GameJam de 48h sur le thème "Connexion". Nous avons développé un jeu de puzzle où le joueur doit reconnecter des réseaux pour rétablir la communication. Ce projet a été une excellente occasion de travailler en équipe sous pression.',
    tags: ["GameJam", "Développement"],
    technologies: ["Python", "Pygame"],
    imageUrl: "/src/assets/projects/gamejam.png",
    sourceCodeUrl: "https://github.com/matteo-lorenzi/gamejam-connexion",
    liveDemoUrl: null,
  },
  {
    id: 3,
    title: "Fish'Event",
    short_description:
      "Développement d'une application évènementielle pour la pêche.",
    long_description:
      "Fish'Event est une application web qui permet aux passionnés de pêche de trouver et de participer à des événements près de chez eux. L'application inclut une carte interactive, un système d'inscription et un fil d'actualité pour chaque événement.",
    tags: ["Évènementiel", "Application"],
    technologies: ["Java", "JavaFX"],
    imageUrl: "/src/assets/projects/fishevent.png",
    sourceCodeUrl: "https://github.com/matteo-lorenzi/fishevent",
    liveDemoUrl: "https://fishevent.example.com",
  },
  {
    id: 4,
    title: "Comparaison d'approches algorithmiques (2022-2023)",
    short_description:
      "Développement d'un algorithme en Java pour la reconnaissance de sujets dans des dépêches d'actualités.",
    long_description:
      "Ce projet en binôme visait à développer un algorithme de reconnaissance de sujets dans des dépêches. En utilisant une base de données de dépêches, le programme Java développé pouvait analyser le texte d'une dépêche et déterminer automatiquement son sujet. La collaboration étroite a favorisé l'échange d'idées et la résolution de défis. Ce projet a permis d'appliquer des compétences algorithmiques tout en renforçant les compétences en communication et en collaboration.",
    tags: ["Algorithmique", "Java", "Travail d'équipe"],
    technologies: ["Java"],
    imageUrl: "/src/assets/projects/algo.png",
    sourceCodeUrl: null,
    liveDemoUrl: null,
  },
  {
    id: 5,
    title: "Installation d'un poste pour le développement (2022-2023)",
    short_description:
      "Installation d'un environnement de développement complet et création de documentation visuelle pour le rendre accessible à tous.",
    long_description:
      "Dans ce projet, nous avons installé un environnement de développement complet, incluant un système d'exploitation, Git, Visual Studio Code, IntelliJ IDEA et le JDK Java. Pour rendre le processus accessible à tous, nous avons créé des illustrations visuelles et des schémas explicatifs, simplifiant les explications techniques. Cette approche a permis de rendre le processus convivial et de développer des compétences en synthèse et en vulgarisation d'informations techniques.",
    tags: ["Développement", "Documentation", "Vulgarisation"],
    technologies: ["Java"],
    imageUrl: "/src/assets/projects/setup.png",
    sourceCodeUrl: null,
    liveDemoUrl: null,
  },
  {
    id: 6,
    title:
      "Recueil de besoins et Découverte de l'environnement économique et écologique (2022-2023)",
    short_description:
      "Création d'un site web pour faciliter la recherche de stages pour les élèves de troisième.",
    long_description:
      "Réalisé en trinôme, ce projet visait à créer un site web pour faciliter la recherche de stages dans le numérique pour les élèves de troisième. Nous avons effectué des recherches sur l'entreprise ATOS, défini les besoins dans un cahier des charges, créé le wireframe du site, puis développé le site en HTML et CSS. Ce projet a permis d'apprendre à rechercher et partager efficacement des informations, à les vulgariser, et à développer un site web de A à Z.",
    tags: ["Développement Web", "Gestion de projet", "UI/UX"],
    technologies: ["HTML", "CSS"],
    imageUrl: "/src/assets/projects/needs.png",
    sourceCodeUrl: null,
    liveDemoUrl: null,
  },
];

// Configuration des technologies par thème pour les filtres
export const technologyThemes = {
  Frontend: ["HTML", "CSS", "JavaScript"],
  Backend: ["PHP", "Java"],
  "Base de données": ["MySQL"],
  Langages: ["Python"],
  "Frameworks/Bibliothèques": ["JavaFX", "Pygame"],
};

// Fonction utilitaire pour obtenir toutes les technologies uniques
export const getAllTechnologies = () => {
  const allTechs = new Set();
  projectsData.forEach((project) => {
    project.technologies.forEach((tech) => allTechs.add(tech));
  });
  return Array.from(allTechs);
};

// Fonction utilitaire pour obtenir tous les tags uniques
export const getAllTags = () => {
  const allTags = new Set();
  projectsData.forEach((project) => {
    project.tags.forEach((tag) => allTags.add(tag));
  });
  return Array.from(allTags);
};
