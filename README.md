<h1 align="center">Diogo Vieira — Personal Portfolio</h1>

<p align="center">
  <strong>Software Engineer · Backend & Cloud Developer</strong><br />
  Not boring portfolio website built with React, TypeScript, and Tailwind CSS
</p>

<p align="center">
  <a href="https://diogovieira.dev" target="_blank">🌍 Live Website</a> ·
  <a href="https://www.linkedin.com/in/diogovieira/" target="_blank">💼 LinkedIn</a> ·
  <a href="https://github.com/diogoviieira" target="_blank">🐙 GitHub</a>
</p>

---

## 📋 About

Personal portfolio website showcasing professional experience, technical skills, and projects. Built with a focus on clean design, optimal performance, and excellent user experience across all devices.

**Key highlights:**
- Clean, professional design
- Full responsive support (mobile-first)
- Multilingual (EN / PT)
- Dark/Light theme toggle
- SEO optimized
- Fast performance (Vite build)
- Recruiter-friendly layout

---

## 🎯 Features

| Feature | Description |
|---------|-------------|
| 📱 **Responsive Design** | Fully responsive from mobile to desktop |
| 🌐 **Multilingual** | English and Portuguese support with toggle |
| 🎨 **Dark/Light Mode** | Theme switcher with system preference detection |
| ⚡ **Performance** | Optimized build with Vite, minimal dependencies |
| 📄 **Resume Download** | Quick access to downloadable CV |
| 🔗 **Project Links** | GitHub repositories and live demos |
| 🏢 **Professional Layout** | Recruiter-friendly information architecture |

---

## 🛠️ Tech Stack

**Frontend:**
- **React** 18.3 - UI library
- **TypeScript** - Type safety
- **Vite** 5.4 - Lightning-fast build tool
- **Tailwind CSS** 3.4 - Utility-first styling
- **shadcn/ui** - High-quality components
- **React Router** 6.30 - Client-side routing
- **React Helmet Async** - Document head management

**Build & Development:**
- **Vite** - Next generation frontend tooling
- **SWC** - Super-fast JavaScript compiler
- **PostCSS** - CSS transformations
- **ESLint** - Code quality
- **TypeScript ESLint** - Type-aware linting

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, or bun

### Linting

```bash
# Check code quality
npm run lint
```

---

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Hero.tsx        # Welcome section
│   ├── TechStack.tsx   # Skills and technologies
│   ├── Experience.tsx  # Professional experience
│   ├── Projects.tsx    # Showcase of projects
│   ├── EducationCertificates.tsx
│   ├── Footer.tsx
│   └── ui/             # shadcn/ui components
├── contexts/           # React Context providers
│   └── LanguageContext.tsx
├── hooks/              # Custom React hooks
├── pages/              # Page components
│   ├── Index.tsx      # Home page
│   ├── ExperiencePage.tsx
│   ├── CertificatesPage.tsx
│   └── NotFound.tsx
├── lib/                # Utility functions
├── App.tsx             # App component
└── main.tsx            # Entry point
```

---

## 🎨 Customization

### Adding Your Information

1. Update profile in `src/components/Hero.tsx`
2. Edit experience in `src/components/Experience.tsx`
3. Modify projects in `src/components/Projects.tsx`
4. Update tech stack in `src/components/TechStack.tsx`

### Translations

Language strings are managed via `src/contexts/LanguageContext.tsx`. Use the `useLanguage` hook:

```tsx
const { t } = useLanguage();

<h1>{t("English text", "Português text")}</h1>
```

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

The build output is in the `dist` folder. Deploy it to:
- **GitHub Pages** - `npm run build` then push to `gh-pages` branch
- **Netlify** - Connect repository for auto-deploy
- **AWS S3 + CloudFront** - Upload `dist` folder
- **Self-hosted** - Serve `dist` folder with any HTTP server

---

## 📄 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

This is a personal portfolio project. External contributions via pull requests are welcome for:
- Bug fixes
- Performance improvements
- Accessibility enhancements
- Documentation improvements

---

## 📞 Contact

- **Email:** dvieira.work@gmail.com
- **LinkedIn:** [diogoviieira](https://www.linkedin.com/in/diogoviieira/)
- **GitHub:** [@diogoviieira](https://github.com/diogoviieira)
- **Website:** [diogovieira.dev](https://diogovieira.dev)

---

Made with ❤️ for the web development community