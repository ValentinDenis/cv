import {
  DaxiumLogo,
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
    "A 31-year-old iOS developer and technical project manager living in Nantes, I'm passionate about mobile development!. I've been developing on iOS for nearly 10 years, and my skills are varied: Objective-C, Swift, SwiftUI, framework development, Cocoapods, Realm, continuous integration, clean architecture, unit and functional testing. My curiosity has also led me to take an interest in DevOps and back-end development. I'm always keen to learn about new technologies and share my knowledge!",
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
      company: "Daxium",
      link: "https://www.daxium.com/",
      badges: ["On-Site"],
      title: "Senior Lead iOS Developer",
      logo: DaxiumLogo,
      start: "2021",
      end: "2024",
      description:
        "Developing new version of iOS App, implementing KMP Framework for cross-platform modules, leading the security team for ISO 27001 Implementation, helping the DevOps team",
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
  ],
} as const;
