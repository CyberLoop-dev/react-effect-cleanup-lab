<p align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:111827,100:7c3aed&height=160&section=header&text=React%20Effect%20Cleanup%20Lab&fontSize=28&fontColor=ffffff" alt="React Effect Cleanup Lab header"/></p>
<p align="center"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=18&pause=1000&color=C4B5FD&center=true&vCenter=true&width=760&lines=Watch+effect+setup+and+cleanup+as+dependencies+change" alt="Animated tagline"/></p>
<p align="center"><a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-7c3aed.svg" alt="MIT"/></a> <img src="https://img.shields.io/badge/language-TypeScript-2563eb.svg" alt="TypeScript"/> <img src="https://img.shields.io/github/stars/CyberLoop-dev/react-effect-cleanup-lab?style=flat" alt="Stars"/> <img src="https://img.shields.io/github/last-commit/CyberLoop-dev/react-effect-cleanup-lab?style=flat" alt="Last commit"/></p>
<p align="center"><img src="assets/mark.svg" width="110" alt="Custom project mark"/></p>

## 🧭 Overview
A small React and TypeScript playground for understanding effect setup, dependency changes, cleanup, and development StrictMode behavior.

## ✨ Features
- 🧪 Increment a dependency and inspect cleanup-before-next-setup ordering
- ⏱️ Toggle a timer-backed effect and see its cleanup stop the interval
- 🔍 Observe the extra development setup/cleanup cycle caused by StrictMode

## 🎬 Demo
Start the Vite development server and use the dependency and effect controls. No hosted demo is claimed.

## 🚀 Quick Start
```bash
npm install
npm run dev
```

## 🧰 Tech Stack
- 🧩 React, TypeScript, and Vite
- 🔒 Runs locally in the browser
- 📦 Standard npm development dependencies

## 🗂️ Folder Structure
```text
react-effect-cleanup-lab/
├── assets/mark.svg
├── src/{App.tsx,main.tsx,style.css}
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
├── .gitignore
├── LICENSE
└── README.md
```

## 🛣️ Roadmap
- [ ] Add a second effect with independent dependencies
- [ ] Add a timeline export

## 🤝 Contributing
Issues and pull requests are welcome. Keep the effect examples small and explain development-only behavior.

## 📄 License
Released under the [MIT License](LICENSE).

<p align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:7c3aed,100:111827&height=105&section=footer" alt="Animated wave footer"/></p>