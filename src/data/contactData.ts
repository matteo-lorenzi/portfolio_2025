// Types pour les données de contact
export interface ContactInfo {
  icon: string;
  title: string;
  value: string;
}

// Énumération des statuts de disponibilité
export type AvailabilityStatusType =
  | "available" // Disponible pour nouveaux projets
  | "busy" // Occupé mais contactable
  | "unavailable" // Non disponible
  | "looking-internship" // Recherche un stage
  | "freelance" // Ouvert au freelance
  | "vacation" // En vacances
  | "studying" // En période d'études intensives
  | "custom"; // Statut personnalisé

export interface AvailabilityStatus {
  status: AvailabilityStatusType;
  statusText: string;
  statusColor: "available" | "busy" | "unavailable";
  description: string;
  isAvailable: boolean; // Calculé automatiquement selon le statut
}

export interface ContactData {
  pageInfo: {
    title: string;
    subtitle: string;
  };
  contactInfo: ContactInfo[];
  availability: AvailabilityStatus;
  emailConfig: {
    serviceID: string;
    templateID: string;
    publicKey: string;
  };
}

// Fonction pour créer un statut de disponibilité
const createAvailabilityStatus = (
  status: AvailabilityStatusType,
  statusText: string,
  statusColor: "available" | "busy" | "unavailable",
  description: string,
  isAvailable: boolean
): AvailabilityStatus => ({
  status,
  statusText,
  statusColor,
  description,
  isAvailable,
});

// Statuts prédéfinis - CHOISISSEZ UNE DE CES OPTIONS 👇
export const AVAILABILITY_OPTIONS = {
  AVAILABLE: createAvailabilityStatus(
    "available",
    "Disponible pour de nouveaux projets",
    "available",
    "Actuellement étudiant en informatique, je suis ouvert aux opportunités de stage, projets collaboratifs et discussions techniques.",
    true
  ),

  BUSY: createAvailabilityStatus(
    "busy",
    "Actuellement occupé",
    "busy",
    "Je travaille actuellement sur des projets importants. Contactez-moi pour les urgences ou planifier une discussion future.",
    false
  ),

  UNAVAILABLE: createAvailabilityStatus(
    "unavailable",
    "Non disponible",
    "unavailable",
    "Je ne suis pas disponible pour de nouveaux projets en ce moment. N'hésitez pas à me recontacter plus tard.",
    false
  ),

  LOOKING_INTERNSHIP: createAvailabilityStatus(
    "looking-internship",
    "Recherche un stage",
    "available",
    "Je recherche activement un stage en développement web. N'hésitez pas à me contacter pour discuter d'opportunités.",
    true
  ),

  FREELANCE: createAvailabilityStatus(
    "freelance",
    "Ouvert aux missions freelance",
    "available",
    "Disponible pour des missions de développement web et des projets freelance. Contactez-moi pour discuter de vos besoins.",
    true
  ),

  VACATION: createAvailabilityStatus(
    "vacation",
    "En vacances",
    "unavailable",
    "Je suis actuellement en vacances. Je répondrai à vos messages dès mon retour.",
    false
  ),

  STUDYING: createAvailabilityStatus(
    "studying",
    "Période d'examens",
    "busy",
    "Je suis en période d'examens et mes disponibilités sont limitées. Contactez-moi pour les urgences uniquement.",
    false
  ),

  CUSTOM: createAvailabilityStatus(
    "custom",
    "Statut personnalisé", // ← Modifiez ce texte
    "available", // ← Changez la couleur (available/busy/unavailable)
    "Définissez votre propre description ici.", // ← Votre description personnalisée
    true // ← true si vous êtes disponible, false sinon
  ),
} as const;

// Données de contact - MODIFIEZ ICI POUR CHANGER LA DISPONIBILITÉ
export const contactData: ContactData = {
  pageInfo: {
    title: "Contactez-moi",
    subtitle:
      "N'hésitez pas à me contacter pour discuter de vos projets ou opportunités",
  },

  contactInfo: [
    {
      icon: "📧",
      title: "Email",
      value: "lorenzi.matteo30@gmail.com",
    },
    {
      icon: "📱",
      title: "Téléphone",
      value: "+33 7 69 63 96 50",
    },
    {
      icon: "📍",
      title: "Localisation",
      value: "France",
    },
  ],

  availability: AVAILABILITY_OPTIONS.STUDYING,

  emailConfig: {
    serviceID: "service_vuzecyq",
    templateID: "template_kyal3vk",
    publicKey: "PoGnrCUYga5WfPeOc",
  },
};

// Exports individuels pour faciliter l'accès
export const { pageInfo, contactInfo, availability, emailConfig } = contactData;