import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "vprevot.dev",
  DESCRIPTION: "Bienvenue sur mon portfolio, l'endroit qui vous ferra en apprendre plus sur le développeur que je suis.",
  AUTHOR: "PREVOT Valentin",
}

// Work Page
export const WORK: Page = {
  TITLE: "Expériences",
  DESCRIPTION: "Entreprises dans lesquelles j'ai pu travailler.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projets",
  DESCRIPTION: "Les derniers projets sur lesquels j'ai pu travailler.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Recherche",
  DESCRIPTION: "Rechercher un mot clé ou un terme qui vous intéresse.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Accueil", 
    HREF: "/", 
  },
  { 
    TEXT: "Expériences", 
    HREF: "/work", 
  },
  { 
    TEXT: "Projets", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "vprevot.dev@gmail.com",
    HREF: "mailto:vprevot.dev@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "valentin1538",
    HREF: "https://github.com/valentin1538"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Valentin Prevot",
    HREF: "https://www.linkedin.com/in/valentin-prevot-57323726b/",
  }
]

