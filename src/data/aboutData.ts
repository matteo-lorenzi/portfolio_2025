// Types pour les données de la page About
export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  initials: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface TimelineItem {
  period: string;
  title: string;
  institution: string;
  institutionUrl: string;
  detail: string;
}

export interface Interest {
  icon: string;
  name: string;
}

export interface ProfileStat {
  number: string;
  label: string;
}

export interface AboutData {
  personalInfo: PersonalInfo;
  skillCategories: SkillCategory[];
  timeline: TimelineItem[];
  interests: Interest[];
  profileStats: ProfileStat[];
}

// Données de la page About
export const aboutData: AboutData = {
  personalInfo: {
    name: "Matteo Lorenzi",
    title: "Étudiant Développeur",
    description:
      "Je suis Matteo Lorenzi, étudiant en informatique passionné par le développement web et le design moderne. J'aime créer des expériences utilisateur innovantes et esthétiques qui combinent fonctionnalité et élégance visuelle.",
    initials: "ML",
  },

  skillCategories: [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "SCSS"],
    },
    {
      title: "Backend",
      skills: ["PHP", "Java", "SQL"],
    },
    {
      title: "Design & Outils",
      skills: ["Figma", "UI/UX", "Git/GitHub", "VS Code", "Vite"],
    },
  ],

  timeline: [
    {
      period: "2025 - 2027",
      title: "Master UX et Web Éditorial",
      institution: "Poitiers",
      institutionUrl: "https://www.univ-poitiers.fr/",
      detail: "Projet de poursuite d'études en expérience utilisateur",
    },
    {
      period: "2023 - 2025",
      title: "2ème - 3ème année",
      institution: "IUT2 Grenoble",
      institutionUrl: "https://iut2.univ-grenoble-alpes.fr/",
      detail: "Parcours A : Réalisation d'applications Web",
    },
    {
      period: "2022 - 2023",
      title: "1ère année",
      institution: "IUT2 Grenoble",
      institutionUrl: "https://iut2.univ-grenoble-alpes.fr/",
      detail: "Formation générale en informatique",
    },
  ],

  interests: [
    {
      icon: "💻",
      name: "Nouvelles technologies",
    },
    {
      icon: "🎨",
      name: "Design graphique",
    },
    {
      icon: "🚀",
      name: "Innovation",
    },
    {
      icon: "📱",
      name: "Applications mobiles",
    },
    {
      icon: "🌐",
      name: "Développement web",
    },
  ],

  profileStats: [
    {
      number: "3+",
      label: "Années d'études",
    },
    {
      number: "10+",
      label: "Projets réalisés",
    },
  ],
};

// Export des sections principales pour faciliter l'accès
export const {
  personalInfo,
  skillCategories,
  timeline,
  interests,
  profileStats,
} = aboutData;
