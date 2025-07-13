import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Aitisam Ahmed",
  title: "Hi all, I'm Aitisam",
  description:
    "I'm Muhammad Aitisam Ahmed, a passionate DevOps Engineer skilled in CI/CD, Docker, Jenkins,Kubernetes,Terraform and AWS. I build scalable, secure, and automated infrastructures that streamline development and deployment workflows.",
  resumeLink: 'https://m-aitisam.github.io/Curriculum-vitae/BSCS_Aitisam_Devops_CV.pdf',
};

export const openSource = {
  githubUserName: "M-Aitisam",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:aitisamahmed24@gmail.com",
  linkedin: "https://www.linkedin.com/in/aitisam-ahmed-9395b62a0/",
  github: "https://github.com/M-Aitisam",
  instagram: "https://www.instagram.com/aitisam24/",
  facebook: 'https://www.facebook.com/muhammad.aitisam.ahmed',
  twitter: 'https://x.com/aitisam24',
};

export const skillsSection: SkillsSectionType = {
  title: "What I Do",
  subTitle: "CLOUD-NATIVE FULL STACK DEVELOPER & DEVOPS ENGINEER WHO BREATHES LIFE INTO CODE AND INFRASTRUCTURE",
  data: [
    {
      title: "Full Stack & Cloud Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json",
      skills: [
        emoji("⚡ Architecting cloud-native applications with AWS EC2, Lambda, and S3 for bulletproof scalability"),
        emoji("⚡ Crafting CI/CD pipelines that deploy faster than you can say 'Jenkins' (50% faster deployments)"),
        emoji("⚡ Containerizing dreams into reality with Docker and orchestrating them with Kubernetes"),
        emoji("⚡ Building .NET Core/Blazor applications that handle traffic spikes like a champ"),
        emoji("⚡ Securing systems with white-hat tools like Nmap and Nessus before hackers even wake up"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "DotNET Core",
          iconifyTag: "simple-icons:dotnet",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Nodejs",
          iconifyTag: "logos:nodejs-icon",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "Jenkins",
          iconifyTag: "logos:jenkins",
        },
        {
          skillName: "GitHub",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Linux",
          iconifyTag: "flat-color-icons:linux",
        },
        {
          skillName: "SQL Server",
          iconifyTag: "simple-icons:microsoftsqlserver",
        },
        {
          skillName: "Bash",
          iconifyTag: "simple-icons:gnubash",
        },
      ],
    },
    {
      title: "DevOps Superpowers",
      lottieAnimationFile: "/lottie/skills/cloud.json",
      skills: [
        emoji("⚡ Automating infrastructure until servers beg for mercy"),
        emoji("⚡ Implementing ELB and Auto Scaling that laughs at traffic spikes"),
        emoji("⚡ Securing CI/CD pipelines tighter than Fort Knox"),
        emoji("⚡ Reducing deployment times by 50% while sipping coffee"),
      ],
      softwareSkills: [
        {
          skillName: "Terraform",
          iconifyTag: "logos:terraform-icon",
        },
        {
          skillName: "Ansible",
          iconifyTag: "logos:ansible",
        },
        {
          skillName: "Kubernetes",
          iconifyTag: "logos:kubernetes",
        },
        {
          skillName: "Prometheus",
          iconifyTag: "logos:prometheus",
        },
        {
          skillName: "Grafana",
          iconifyTag: "logos:grafana",
        },
        {
          skillName: "Nginx",
          iconifyTag: "logos:nginx",
        },
      ],
    }
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Cloud & DevOps",
    progressPercentage: "90",
  },
  {
    Stack: ".NET & Backend Development",
    progressPercentage: "85",
  },
  {
    Stack: "CI/CD Pipelines",
    progressPercentage: "88",
  },
  {
    Stack: "Containerization (Docker)",
    progressPercentage: "87",
  },
  {
    Stack: "AWS Services",
    progressPercentage: "83",
  },
  {
    Stack: "Linux Administration",
    progressPercentage: "80",
  },
  {
    Stack: "Python & Scripting",
    progressPercentage: "82",
  },
  {
    Stack: "Database Management",
    progressPercentage: "78",
  },
];
export const educationInfo: EducationType[] = [
  {
    schoolName: " Air University Islamabad",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "September 2023 - April 2027",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "DevOps Intern",
    company: "Cyberoide Tech",
    companyLogo: "/img/icons/common/cyberoide.png", // You'll need to add this logo
    date: "June 2024 - Present",
    desc: "Implementing CI/CD pipelines using Jenkins and GitHub Actions for automated deployments. Managing cloud infrastructure on AWS including EC2, S3, and Lambda services. Containerizing applications with Docker and optimizing deployment workflows. Implementing security best practices with tools like Nmap and Nessus.",
    descBullets: [
      "Reduced deployment times by 50% through Jenkins pipeline optimization",
      "Implemented auto-scaling solutions handling 2x traffic spikes",
      "Secured cloud infrastructure through IAM policies and security groups"
    ],
  },
   {
    role: "Cloud Engineering Fellow",
    company: "Bytewise Limited",
    companyLogo: "/img/icons/common/bytewise.png",
    date: "June 2024 - September 2024",
    desc: "Specialized in cloud infrastructure design and automation as part of Bytewise's flagship fellowship program. Implemented Infrastructure as Code (IaC) and CI/CD solutions for distributed systems.",
    descBullets: [
      "Designed and deployed scalable cloud architectures on AWS using EC2, Lambda, and S3",
      "Automated infrastructure provisioning with Terraform, reducing deployment time by 65%",
      "Implemented monitoring solutions with CloudWatch and Prometheus for 10+ microservices",
      "Optimized cloud costs by 35% through right-sizing resources and implementing auto-scaling"
    ],
  },
  {
    role: "DevOps Intern",
    company: "Bytewise",
    companyLogo: "/img/icons/common/bytewise.png", // You'll need to add this logo
    date: "June 2024 - September 2024",
    desc: "Working on cloud automation and infrastructure as code projects. Implementing container orchestration solutions and monitoring systems. Collaborating on CI/CD pipeline development for microservices architecture.",
    descBullets: [
      "Automated infrastructure provisioning reducing setup time by 70%",
      "Implemented centralized logging for 10+ microservices",
      "Reduced cloud costs by 30% through resource optimization"
    ],
  },
  {
    role: ".NET Developer Intern",
    company: "Air University",
    companyLogo: "/img/icons/common/air-university.png", // You'll need to add this logo
    date: "July 2024 - August 2024",
    desc: "Developed scalable web applications using .NET Core and Blazor framework. Designed RESTful APIs and implemented SQL Server database architectures. Enhanced application performance through Entity Framework Core optimizations.",
    descBullets: [
      "Built student management system handling 500+ concurrent users",
      "Reduced API response times by 40% through query optimization",
      "Implemented role-based authentication for secure access control"
    ],
  }
];
export const projects: ProjectType[] = [
  {
    name: "Developer Portfolio",
    desc: "Build a simple and efficient Student Attendance Portal in C# using a 3-Tier Architecture for streamlined functionality and easy management.",
    github: "https://github.com/M-Aitisam/Student-Attendence-System.git",
  
  },
  {
    name: "SmartPOS",
    desc: "SmartPOS is a C#-based, 3-tier architecture Point of Sale desktop application that runs locally without internet, designed for efficient offline retail transactions.",
    github: "https://github.com/M-Aitisam/SmartPOS.git",
  },
  {
    name: "Employee Management System",
    desc: "Creating an Employee Management System in React: Look professional and work like it’s done in the industry!",
    github: "https://github.com/M-Aitisam/Employee-Management-System.git",
  },
  {
    name: "SpeechifyX",
    desc: "A Blazor web app for Speech-to-Text and Text-to-Speech with audio upload and voice features, deployed via a CI/CD pipeline using Jenkins and Docker for automated, scalable delivery.",
    github: "https://github.com/M-Aitisam/SpeechifyX.git",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "DevOps Team Lead at Meganos Software",
    feedback:
      "Muhammad Aitisam was a fantastic addition to our DevOps team. He streamlined our deployment workflows, implemented GitHub Actions for CI/CD, and resolved complex infrastructure issues with clarity and speed. His proactive communication and deep Linux knowledge made our releases faster and more stable.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Aitisam's command over Docker, Jenkins, and AWS transformed the way we ship our products. His automated CI/CD pipelines cut our deployment time in half and eliminated manual errors. His GitHub workflow optimization and system-level insights are top-tier. Highly recommend him for any DevOps-driven environment.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Muhammad Aitisam consistently solved high-impact infrastructure issues for us. From Docker containerization to secure GitHub-based deployments, he brought reliability and scalability to our projects. He's a reliable engineer who takes full ownership of the DevOps lifecycle.",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Aitisam Ahmed",
  description: greetings.description,
  author: "Muhammad Aitisam Ahmed",
  image: "https://github.com/M-Aitisam/MyAvatar/blob/main/IMG_4807.jpg?raw=true",
  url: "https://AitisamPortfolio.netlify.app/",
  keywords: [
    "Aitisam",
    "Aitisam Ahmed",
    "M-Aitisam",
    "MAitisam",
    "AitisamPortfolio",
    "Aitisam Portfolio ",
    "Aitisam Ahmed Portfolio",
  ],
   twitterHandle: '@AitisamAhmed'
};
