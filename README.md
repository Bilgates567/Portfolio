# Arockia Bilgates — Developer Portfolio

A modern, fully responsive personal portfolio website built with **Next.js 16**, **Tailwind CSS**, and **Framer Motion** — featuring multi-language support across 10 languages, dark/light mode, smooth animations, and a working contact form.

**Live Demo:** [your-portfolio.vercel.app](https://your-portfolio.vercel.app)

---

## Features

- **Multi-language support** — English, Spanish, French, German, Italian, Portuguese, Dutch, Hindi, Chinese, Japanese
- **Dark / Light mode** — system preference aware with manual toggle
- **Smooth animations** — powered by Framer Motion
- **Fully responsive** — works on all screen sizes
- **Contact form** — powered by Formspree, emails delivered to your inbox
- **SEO optimised** — meta tags, sitemap, Open Graph
- **Performance optimised** — Next.js Image, lazy loading, code splitting
- **9 Projects showcased** — with live demo and GitHub links
- **5 Experience entries** — full career timeline

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| i18n | next-intl |
| Contact Form | Formspree |
| Icons | Lucide React, React Icons |
| Deployment | Vercel |

---

## Projects Showcased

1. **PrepGenius** — AI Coding Interview Platform (React, Node.js, Gemini AI, Judge0)
2. **AroCart AI** — AI-Powered E-Commerce Platform (MERN, Gemini AI, Razorpay)
3. **QuickHelp** — Real-Time Micro-Task Marketplace (MERN, Socket.io)
4. **Queuely** — AI Appointment & Queue Management (MERN, Gemini AI, Socket.io)
5. **AroCareer** — AI-Powered Job Portal (MERN, Gemini AI)
6. **AroBot** — AI Conversational Chatbot (MERN, Gemini AI, Groq)
7. **GrocerGo** — Full Stack Grocery Delivery App (React, Node.js, PostgreSQL, Inngest)
8. **Netflix Clone** — Full Stack Streaming Platform (MERN, Firebase, TMDB API)
9. **React Admin Dashboard** — Analytics & Management Dashboard (React, Recharts)

---

## Getting Started

### Prerequisites

- Node.js `>= 18.18.0`
- npm `>= 8.0.0`

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Bilgates567/arockia-portfolio.git
cd arockia-portfolio
```

**2. Install dependencies**

```bash
npm install
```

**3. Set up environment variables**

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_form_id
```

Replace `your_formspree_form_id` with your actual Formspree form ID.
Get one free at [formspree.io](https://formspree.io).

**4. Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
arockia_portfolio/
├── public/
│   ├── images/          # Project screenshots (1280×720px)
│   ├── cv/              # Resume PDF
│   └── favicon.ico
├── messages/            # i18n translation files
│   ├── en.json          # English
│   ├── es.json          # Spanish
│   ├── fr.json          # French
│   ├── de.json          # German
│   ├── it.json          # Italian
│   ├── pt.json          # Portuguese
│   ├── nl.json          # Dutch
│   ├── hi.json          # Hindi
│   ├── zh.json          # Chinese
│   └── ja.json          # Japanese
├── src/
│   ├── app/
│   │   └── [locale]/    # Locale-based routing
│   ├── components/      # UI components
│   │   ├── about.tsx
│   │   ├── contact.tsx
│   │   ├── experience.tsx
│   │   ├── intro.tsx
│   │   ├── projects.tsx
│   │   └── ...
│   ├── lib/
│   │   ├── data.tsx     # All project & experience data
│   │   └── site-config.ts
│   └── i18n/
│       ├── config.ts
│       ├── routing.ts
│       └── request.ts
├── .env.local           # Environment variables (not committed)
├── next.config.js
├── tailwind.config.ts
└── package.json
```

---

## Customisation

### Update your personal info

Edit `src/lib/data.tsx` to update projects and experience.

Edit `messages/en.json` (and other language files) to update text content — intro, about, contact details.

Edit `src/lib/site-config.ts` to update your name, title, keywords, and social links.

### Add / update project images

Place images inside `public/images/` — recommended size is **1280×720px**.

File naming convention:
```
proj-prepgenius.png
proj-arocart.png
proj-quickhelp.png
proj-queuely.png
proj-arocareer.png
proj-arobot.png
proj-grocery.png
proj-netflix.png
proj-admin.png
```

### Update your resume

Replace the file at `public/cv/Arockia_Bilgates_Resume.pdf` with your latest resume.

---

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run typecheck    # TypeScript type check
npm run format:write # Format code with Prettier
```

---

## Contact Form Setup

This project uses [Formspree](https://formspree.io) for the contact form.

1. Sign up at [formspree.io](https://formspree.io) with your email
2. Create a new form and copy your Form ID
3. Open `src/components/contact.tsx`
4. Replace the existing form ID:
   ```ts
   const [state, handleSubmit] = useForm('YOUR_FORM_ID');
   ```
5. Save and redeploy

---

## Deployment

This project is optimised for **Vercel**. See the deployment guide below.

---

## License

MIT License — feel free to use this project as a template for your own portfolio.

---

## Author

**Arockia Bilgates**
Full Stack Software Engineer | MERN | AI Applications

- Email: [arockiabilgates2@gmail.com](mailto:arockiabilgates2@gmail.com)
- LinkedIn: [linkedin.com/in/bilgates777](https://linkedin.com/in/bilgates777)
- GitHub: [github.com/Bilgates567](https://github.com/Bilgates567)
