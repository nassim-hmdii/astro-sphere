import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Nassim Hamidi",
  DESCRIPTION: "Hello World... Welcome to my Oasis!",
  AUTHOR: "Nassim Hamidi",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "nassimhamidi.unistudy@gmail.com",
    HREF: "mailto:nassimhamidi.unistudy@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "nassim-hmdii",
    HREF: "https://github.com/nassim-hmdii"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "nassim-hamidi",
    HREF: "https://www.linkedin.com/in/nassim-hamidi/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "nassim-hamidi",
    HREF: "https://twitter.com",
  },
]

