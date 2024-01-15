import {
  DaxiumLogo,
  LesaffreLogo,
  MursLogo,
  AuchanLogo
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Valentin Denis",
  initials: "VD",
  location: "Nantes, France",
  locationLink: "https://www.google.com/maps/place/Nantes",
  about:
    "iOS Developer",
  summary:
    "A 31-year-old iOS developer and technical project manager living in Nantes, and passionate about mobile development!. I've been developing on iOS for nearly 10 years, and my skills are varied: Objective-C, Swift, SwiftUI, framework development, Cocoapods, Realm, continuous integration, clean architecture, unit and functional testing. My curiosity also led me to take an interest in DevOps and back-end development.",
  avatarUrl: "https://media.licdn.com/dms/image/D4E03AQGPU1PBjYIN2Q/profile-displayphoto-shrink_800_800/0/1705271211767?e=1710979200&v=beta&t=iIUpgaxVsWOfqANM3a1LAlDEVA-hTgkcZQhtYlgsDAc",
  personalWebsiteUrl: "https://valentindenis.fr",
  contact: {
    email: "valentindenis80@gmail.com",
    tel: "+33668411612",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ValentinDenis",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/valentin-denis-7076b089/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/cweposuc",
        icon: XIcon,
      }
    ],
  },
  education: [
    {
      school: "INSSET, Saint-Quentin",
      degree: "Master in Cloud Computing and Mobility",
      start: "2015",
      end: "2017",
    },
    {
      school: "IUT Informatique, Amiens",
      degree: "Licence Professionnelle, Réseaux et Génie Informatique",
      start: "2014",
      end: "2015",
    },
    {
      school: "IUT Informatique, Amiens",
      degree: "DUT Informatique",
      start: "2011",
      end: "2014",
    },
    {
      school: "Lycée Pierre d'Ailly, Compiègne",
      degree: "Baccalauréat, Scientifique",
      start: "2007",
      end: "2010",
    },
  ],
  work: [
    {
      company: "Freelance",
      link: "https://www.malt.fr/profile/valentindenis",
      badges: ["Remote"],
      title: "iOS Development Expert",
      start: "2022",
      description:
        "Available to help you develop your iOS app, helping with architecture, implementation and project leadership",
    },
    {
      company: "Daxium",
      link: "https://www.daxium.com/",
      badges: ["On-Site", "Nantes"],
      title: "Senior Lead iOS Developer",
      logo: DaxiumLogo,
      start: "2021",
      description:
        "In charge of developing the new version of iOS App, implementing KMP Framework for cross-platform modules, leading the security team for ISO 27001 Implementation, helping the DevOps team",
    },
    {
      company: "Ineat",
      link: "https://ineat.fr/",
      badges: ["On-Site", "Lille"],
      title: "iOS Developer / Project Lead",
      start: "2019",
      end: "2021",
      description:
        "Development of various mCommerce apps for clients like Auchan, Lesaffre, Tape-à-l'oeil. Technical project lead for various apps",
    },
    {
      company: "Phoceis",
      badges: ["On-Site", "Lille"],
      title: "Junior iOS Developer",
      start: "2016",
      end: "2019",
      description:
        "Development of various iOS apps, learning Swift and mobile development",
    },
  ],
  skills: [
    "iOS",
    "Swift",
    "XCUnitTest",
    "Objective-C",
    "Kotlin Multiplatform",
    "AWS",
    "ISO 27001 Implementer",
  ],
  projects: [
    {
      title: "Daxium-Air",
      techStack: [
        "Swift",
        "KMP",
        "PHP",
        "AWS",
      ],
      description: "A no-code platform for on-site reporting with full application customization",
      logo: DaxiumLogo,
      link: {
        label: "daxium-air.com",
        href: "https://www.daxium-air.com/",
      },
    },
    {
      title: "The Shield",
      techStack: [
        "Swift",
        "Firebase",
      ],
      description: "Security-oriented app to help avoid dangerous zones and report emergencies",
      logo: DaxiumLogo,
      link: {
        label: "the shield app",
        href: "https://apps.apple.com/fr/app/theshield/id1612090444",
      },
    },
    {
      title: "Lesaffre",
      techStack: [
        "Swift",
        "Cocoapods",
        ".NET 5",
        "Firebase",
        "AWS",
        "Zeplin",
      ],
      description: "Loyalty program app for bakeries using Lesaffre products",
      logo: LesaffreLogo,
      link: {
        label: "lesaffre.com",
        href: "https://apps.apple.com/fr/app/lesaffre-moi/id1225136175?l=en-GB?l%3Den",
      },
    },
    {
      title: "Adel AR - 4Murs",
      techStack: [
        "Swift",
        "ARKit",
        "UIKit",
        "Firebase",
        "AWS",
      ],
      description: "AR Application to try wallpapers and paints from 4Murs",
      logo: MursLogo,
      link: {
        label: "lesaffre.com",
        href: "https://apps.apple.com/fr/app/adel-ar-by-4murs/id1554056206",
      },
    },
    {
      title: "MyTAO",
      techStack: [
        "Swift",
        "mCommerce",
        "MapKit",
        "Keychain",
        "FacebookSDK",
        "Firebase",
      ],
      description: "Official Tape à L'Oeil iOS app to browse and buy clothing for kids",
      logo: MursLogo,
      link: {
        label: "taokids.com",
        href: "https://apps.apple.com/fr/app/mytao-mode-b%C3%A9b%C3%A9-enfants/id641213555",
      },
    },
    {
      title: "Méert",
      techStack: [
        "Swift",
        "iPad",
        "Synchronization",
        "Keychain",
        "Firebase",
      ],
      description: "In-store app to help take orders and fulfilling them",
      link: {
        label: "meert.fr",
        href: "https://www.meert.fr/en/",
      },
    },
  ],
} as const;
