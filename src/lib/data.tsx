import { Icons } from '@/components/icons';

export const links = [
  { name: 'Home', hash: '#home' },
  { name: 'About', hash: '#about' },
  { name: 'Services', hash: '#services' },
  { name: 'Experience', hash: '#experience' },
  { name: 'Projects', hash: '#projects' },
  { name: 'Contact', hash: '#contact' },
] as const;

export const projectsData = [
  {
    image: '/images/proj-prepgenius.png',
    title: 'PrepGenius — AI Coding Interview Platform',
    description:
      'A full-stack MERN coding platform with Monaco VS Code editor and Judge0 automated judging for 20 curated DSA problems. Integrated Gemini AI as a post-submission mentor for time/space complexity analysis, optimisation tips, and interview coaching. Implements a 3-level progressive hint system, real-time AI chat assistant, and personalised weekly skill roadmap.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini AI', 'Judge0', 'Monaco Editor', 'Tailwind CSS'],
    links: {
      preview: 'https://prepgenius.vercel.app',
      github: 'https://github.com/Bilgates567/prepgenius',
      githubApi: 'https://api.github.com/repos/Bilgates567/prepgenius',
    },
  },
  {
    image: '/images/proj-arocart.png',
    title: 'AroCart AI — AI-Powered E-Commerce Platform',
    description:
      'An AI-powered e-commerce platform with 64 products across 6 categories, animated UI, and fully responsive design. Features a Gemini-powered smart search with intent detection, AI shopping assistant, and AI product comparison engine. Integrated Google OAuth, Razorpay payment gateway (UPI/Cards/COD), and 6-stage live order tracking.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini AI', 'Razorpay', 'Google OAuth', 'Tailwind CSS'],
    links: {
      preview: 'https://arocart.vercel.app',
      github: 'https://github.com/Bilgates567/arocart-ai',
      githubApi: 'https://api.github.com/repos/Bilgates567/arocart-ai',
    },
  },
  {
    image: '/images/proj-quickhelp.png',
    title: 'QuickHelp — Real-Time Micro-Task Marketplace',
    description:
      'A two-sided MERN marketplace connecting task posters with local helpers using Socket.io real-time notifications and live updates. Implements full task lifecycle — post, bid, accept, complete, confirm — with dispute resolution and helper online/offline tracking. Features role-based dashboards and an admin moderation panel.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Google OAuth', 'Tailwind CSS', 'RBAC'],
    links: {
      preview: 'https://quickhelp.vercel.app',
      github: 'https://github.com/Bilgates567/quickhelp',
      githubApi: 'https://api.github.com/repos/Bilgates567/quickhelp',
    },
  },
  {
    image: '/images/proj-queuely.png',
    title: 'Queuely — AI Appointment & Queue Management',
    description:
      'A smart appointment booking system with live queue tracking showing customers their real-time position and estimated wait time. Features an AI scheduling assistant for optimal time slot suggestions and automated queue management for service providers. Implements multi-service booking, staff management dashboard, and real-time queue updates via Socket.io.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Gemini AI', 'Tailwind CSS'],
    links: {
      preview: 'https://queuely.vercel.app',
      github: 'https://github.com/Bilgates567/queuely',
      githubApi: 'https://api.github.com/repos/Bilgates567/queuely',
    },
  },
  {
    image: '/images/proj-arocareer.png',
    title: 'AroCareer — AI-Powered Job Portal',
    description:
      'A job portal with an AI resume analyser that scores resumes against job descriptions and suggests targeted improvements. Features an AI cover letter generator, job-match scoring system, and personalised interview preparation powered by Gemini AI — giving candidates a complete AI-assisted job search experience.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini AI', 'JWT', 'Tailwind CSS'],
    links: {
      preview: 'https://arocareer.vercel.app',
      github: 'https://github.com/Bilgates567/arocareer',
      githubApi: 'https://api.github.com/repos/Bilgates567/arocareer',
    },
  },
  {
    image: '/images/proj-arobot.png',
    title: 'AroBot — AI Conversational Chatbot',
    description:
      'A ChatGPT-style chat application with streaming AI responses, persistent conversation history, and markdown rendering. Integrates Gemini and Groq APIs with intelligent fallback handling. Features a polished dark-themed responsive UI optimised for natural, fast AI conversations.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini AI', 'Groq API', 'Tailwind CSS'],
    links: {
      preview: 'https://arobot.vercel.app',
      github: 'https://github.com/Bilgates567/arobot',
      githubApi: 'https://api.github.com/repos/Bilgates567/arobot',
    },
  },
  {
    image: '/images/proj-grocery.png',
    title: 'GrocerGo — Full Stack Grocery Delivery App',
    description:
      'A production-ready grocery delivery platform with a user-facing shopping website, admin panel, and a delivery partner dashboard with live location sharing. Features role-based access for Admin, User, and Delivery Partner, real-time order tracking, automated emails for offers and low-stock alerts, and auto-assignment of delivery partners using background jobs powered by Inngest.',
    technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL', 'Inngest', 'JWT', 'Socket.io'],
    links: {
      preview: 'https://github.com/Bilgates567/grocer-go',
      github: 'https://github.com/Bilgates567/grocer-go',
      githubApi: 'https://api.github.com/repos/Bilgates567/grocer-go',
    },
  },
  {
    image: '/images/proj-netflix.png',
    title: 'Netflix Clone — Full Stack Streaming Platform',
    description:
      'A full-stack Netflix-inspired streaming platform with user authentication, movie/series browsing, genre filtering, and a personalised watchlist. Features a responsive UI with smooth animations, skeleton loaders, and real-time content updates. Built with MERN stack and TMDB API integration for live movie data.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'TMDB API', 'Tailwind CSS', 'JWT'],
    links: {
      preview: 'https://github.com/Bilgates567/netflix-clone',
      github: 'https://github.com/Bilgates567/netflix-clone',
      githubApi: 'https://api.github.com/repos/Bilgates567/netflix-clone',
    },
  },
  {
    image: '/images/proj-admin.png',
    title: 'React Admin Dashboard',
    description:
      'A fully featured admin dashboard with real-time analytics, interactive data visualisations, and full CRUD management panels for users, products, and orders. Features dark/light mode, responsive layout, role-based access, and modular components built for scalable internal tools.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Recharts', 'Tailwind CSS', 'JWT', 'REST APIs'],
    links: {
      preview: 'https://github.com/Bilgates567/react-admin-dashboard',
      github: 'https://github.com/Bilgates567/react-admin-dashboard',
      githubApi: 'https://api.github.com/repos/Bilgates567/react-admin-dashboard',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Full-Stack Software Engineer',
    company: 'Freelance — Remote / Coimbatore',
    description:
      'Architecting and delivering production-grade MERN + AI client projects integrating Gemini AI APIs, Socket.io real-time features, and Razorpay payment gateways end-to-end. Building reusable REST API structures with JWT authentication, RBAC, and Docker-based deployment. Designing and delivering cohort-based MERN and DSA programs, achieving 90%+ course completion rates.',
    period: 'Mar 2026 – Present',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini AI', 'Socket.io', 'Docker', 'JWT', 'RBAC'],
  },
  {
    title: 'Full-Stack Software Engineer',
    company: 'Amypo Technologies Pvt. Ltd., Coimbatore',
    description:
      'Developed and deployed production-grade MERN applications using React, Node.js, Express, and MongoDB with JWT authentication, RBAC security, and role-based dashboards. Architected scalable RESTful APIs following controller-service-repository layered patterns, reducing average API latency by 30%. Implemented Docker-based CI/CD pipelines, reducing environment failures by 60% across 20+ engineering deployments.',
    period: 'Jan 2025 – Feb 2026',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Docker', 'CI/CD', 'JWT', 'RBAC', 'GitHub Actions'],
  },
  {
    title: 'Python Developer & Associate Robotic Engineer',
    company: 'Prag Robotics, Thanjavur',
    description:
      'Engineered Python and OpenCV automation pipelines reducing image processing time by 30% and improving ML-driven sensor accuracy from 85% to 94% via Flask REST services. Containerised microservices using Docker, cutting environment setup time by 50%. Refactored legacy automation scripts into modular service components, reducing code redundancy by 35%.',
    period: 'Feb 2024 – Dec 2024',
    technologies: ['Python', 'OpenCV', 'Flask', 'Machine Learning', 'Docker', 'REST API', 'scikit-learn'],
  },
  {
    title: 'Application Developer',
    company: 'CADD Centre Training Services, Thanjavur',
    description:
      'Built Java and Python backend applications using OOP and MVC principles, shipped with Git version control and Postman API testing, accelerating delivery cycles by 40%. Designed modular, reusable code structures for backend logic and API integration across multiple client-facing application builds.',
    period: 'Feb 2023 – Dec 2023',
    technologies: ['Java', 'Python', 'Spring Boot', 'Git', 'Postman', 'OOP', 'MVC', 'REST API'],
  },
  {
    title: 'Full-Stack Web Developer',
    company: 'Freelance — Remote',
    description:
      'Delivered 10+ full-stack web applications for clients using React, Node.js, Express, and MongoDB with end-to-end ownership from requirements to production deployment. Developed REST APIs with JWT authentication, integrated third-party services, and built responsive mobile-first React frontends independently.',
    period: 'May 2021 – Jan 2023',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'HTML5', 'CSS3', 'JavaScript'],
  },
] as const;

export const skillsData = [
  { name: 'React.js', icon: <Icons.react className="size-12" /> },
  { name: 'Node.js', icon: <Icons.nodejs className="size-12" /> },
  { name: 'Express.js', icon: <Icons.express className="size-12" /> },
  { name: 'MongoDB', icon: <Icons.mongodb className="size-12" /> },
  { name: 'Next.js', icon: <Icons.nextjs className="size-12" /> },
  { name: 'JavaScript', icon: <Icons.javascript className="size-12" /> },
  { name: 'TypeScript', icon: <Icons.typescript className="size-12" /> },
  { name: 'Java', icon: <Icons.java className="size-12" /> },
  { name: 'Python', icon: <Icons.python className="size-12" /> },
  { name: 'Spring Boot', icon: <Icons.spring className="size-12" /> },
  { name: 'Django', icon: <Icons.django className="size-12" /> },
  { name: 'Angular', icon: <Icons.angular className="size-12" /> },
  { name: 'HTML5', icon: <Icons.html className="size-12" /> },
  { name: 'CSS3', icon: <Icons.css className="size-12" /> },
  { name: 'Tailwind CSS', icon: <Icons.tailwind className="size-12" /> },
  { name: 'MySQL', icon: <Icons.mysql className="size-12" /> },
  { name: 'Git', icon: <Icons.git className="size-12" /> },
  { name: 'GitHub', icon: <Icons.github className="size-12" /> },
  { name: 'Postman', icon: <Icons.postman className="size-12" /> },
  { name: 'Docker', icon: <Icons.docker className="size-12" /> },
  { name: 'AWS', icon: <Icons.aws className="size-12" /> },
  { name: 'Vercel', icon: <Icons.vercel className="size-12" /> },
  { name: 'Netlify', icon: <Icons.netlify className="size-12" /> },
  { name: 'Firebase', icon: <Icons.firebase className="size-12" /> },
  { name: 'Socket.IO', icon: <Icons.socketio className="size-12" /> },
  { name: 'Sass', icon: <Icons.sass className="size-12" /> },
] as const;

export const testimonialsData = [] as const;
