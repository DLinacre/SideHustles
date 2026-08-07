# 🚀 Side Hustle Automation Studio

[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](LICENSE)
[![Built with React](https://img.shields.io/badge/Built%20with-React%20%7C%20Vite%20%7C%20Tailwind-blue.svg)](https://react.dev)
[![AI Studio Engine](https://img.shields.io/badge/AI%20Studio-Powered-amber.svg)](https://ai.studio)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen.svg)]()

> **The ultimate command center for discovering, launching, and scaling automated, high-margin side hustles with zero upfront capital.**

---

## 🌟 Master Workspace Architecture (4 Dedicated Views)

### 🚀 1. Side Hustle Catalog & Blueprints
- **37 Curated Models**: Searchable micro-business concepts across Micro-SaaS, Prompt Kits, Local Lead Gen, and Digital Products.
- **Adaptive Grid Layout**: Responsive container queries (`grid-cols-1 md:2 lg:3 xl:4`) scaling seamlessly across mobile screens, laptops, and 4K ultrawide monitors.

### 📦 2. Ready-to-Sell Product & Image Vault
- **7 Pre-Built Assets**: Production-ready prompt vaults, cold outreach pitch packs, and resume kits in `ready-to-sell-assets/`.
- **12 4K OLED Images**: High-resolution wallpapers and smartwatch faces generated for immediate marketplace listing.

### 📊 3. Revenue & Sales Analytics
- **Production Webhook Listener**: Real-time sales logging at `/api/webhooks/sale`.
- **Persistent Sales Log**: Stores incoming genuine payouts in `ready-to-sell-assets/sales-history.json`.

### ⚙️ 4. System Automation & Health Hub
- **GitHub Auto-Sync Daemon**: Windows Scheduled Task `SideHustles_GitHub_AutoSync` running every 5 minutes.
- **Firebase Deployment**: `firebase.json` pointing to `dist` production build directory with `firestore.rules`.
- **Local LLM / Obsidian NA10 Bridge**: Context endpoint at `/api/mcp/local-llm`.

---

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion
- **Server**: Express + Vite Dev & Production Middleware (`esbuild`) on Port **3847**
- **Persistence**: LocalStorage, IndexedDB Snapshots, and `sales-history.json`
- **Deployment**: GitHub (`origin/main`) & Firebase Hosting (`firebase.json`)

---

## 🚦 Quick Start Guide

### 1. Installation
```bash
git clone https://github.com/DLinacre/SideHustles.git
cd SideHustles
npm install
```

### 2. Launch Master Studio
```bash
# Launch via master 1-click batch script:
.\Launch-SideHustle-Studio.bat

# Or run manually:
npm run dev
```
Open `http://localhost:3847` (or `http://dl:3847`) to access your studio.

### 3. Production Build
```bash
npm run build
npm start
```

---

## 📄 License

Distributed under the MIT License. Free for commercial and personal use.
