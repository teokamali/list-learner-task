raymon-frontend/
├── public/
│ ├── assets/
│ │ └── ... (static assets like images, fonts, etc.)
│ └── ...
├── src/
│ ├── components/
│ │ ├── common/ (shared components across all projects)
│ │ ├── layout/ (different pages layouts)
│ │ ├── pages/ (different pages components)
│ ├── contexts/
│ │ └── ... (context providers)
│ ├── hooks/
│ │ └── ... (custom hooks)
│ ├── pages/
│ │ ├── api/
│ │ │ └── ... (API routes)
│ │ ├── referral/ (referral Page)
│ │ ├── user/
│ │ │ └── wallet/ (user wallet page)
│ │ │ └── ... (user pages)
│ │ ├── game/
│ │ │ └── ... (game pages)
│ │ └── ... (landing pages and other root-level pages)
│ ├── redux/
│ │ ├── slices/
│ │ │ └── ... (redux slices)
│ │ └── store.ts (redux store configuration)
│ ├── services/
│ │ │── routes.ts
│ │ └── ... (API services)
│ ├── styles/
│ │ └── globals.css (global styles)
│ ├── types/
│ │ └── ... (TypeScript types)
│ └── utils/
│ └── ... (utility functions)
├── .env.local (environment variables)
├── .eslintrc.js (eslint configuration)
├── .gitignore (gitignore file)
├── next.config.js (Next.js configuration)
├── tsconfig.json (TypeScript configuration)
