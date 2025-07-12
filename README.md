# Swagata Mandal - Portfolio

A modern, responsive portfolio website built with React, showcasing my journey as a second-year student aspiring to become a data scientist.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Ready**: Proper meta tags and structured data
- **Interactive**: Smooth scrolling, hover effects, and animations
- **Tech Stack Showcase**: Rolling gallery of technologies
- **Project Portfolio**: Featured projects with GitHub integration

## 🛠️ Tech Stack

- **Frontend**: React, JavaScript, HTML, CSS
- **Styling**: Tailwind CSS, Framer Motion
- **Build Tool**: Vite
- **Icons**: Lucide React
- **UI Components**: Radix UI
- **Deployment**: Vercel/Netlify ready

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Hacknova49/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your GitHub repository to Vercel**
2. **Deploy automatically** - Vercel will detect the Vite configuration
3. **Custom domain** - Add your custom domain in Vercel dashboard

### Netlify

1. **Connect your GitHub repository to Netlify**
2. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Deploy**

### GitHub Pages

1. **Add GitHub Pages action**:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [main]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v2
           with:
             node-version: "18"
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   ├── TechStackSection.jsx
│   ├── ProjectsSection.jsx
│   ├── SkillsSection.jsx
│   ├── ContactSection.jsx
│   └── Footer.jsx
├── Beams/              # Background effects
├── TiltedCard/         # Custom card component
├── TextPressure/       # Text animation
├── App.jsx             # Main app component
└── main.jsx            # Entry point
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file for any environment-specific variables:

```env
VITE_APP_TITLE=Swagata Mandal Portfolio
VITE_APP_DESCRIPTION=Second Year Student & Aspiring Data Scientist
```

### Customization

1. **Update personal information** in component files
2. **Modify projects** in `ProjectsSection.jsx`
3. **Change tech stack** in `TechStackSection.jsx`
4. **Update contact information** in `ContactSection.jsx`

## 📊 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Bundle Size**: Optimized with code splitting
- **Loading Speed**: Fast initial load with lazy loading
- **SEO**: Proper meta tags and structured data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: swagatamandal16029@gmail.com
- **LinkedIn**: [Swagata Mandal](https://www.linkedin.com/in/swagata-mandal49)
- **GitHub**: [Hacknova49](https://github.com/Hacknova49)

---

Built with ❤️ by Swagata Mandal
