# ☁️ CloudTutor

CloudTutor is an interactive, single-user learning lab designed to explore and understand core cloud computing concepts through visual tools, guided study paths, and hands-on architecture experiments. It helps students and developers reason about IaaS/PaaS/SaaS, virtualization, networking, IAM, storage, containers, and serverless without requiring access to real cloud accounts.

---

## 📖 Table of Contents

- [Overview](#-overview)  
- [Features](#-features)  
- [Tech Stack](#-tech-stack)  
- [Project Structure](#-project-structure)  
- [Learning Flow](#-learning-flow)  
- [Roadmap](#-roadmap)  
- [License](#-license)

---

## 📌 Overview

CloudTutor is a modern web app that turns cloud computing theory into an interactive playground.  
Instead of just reading definitions, you can build architectures, run what-if scenarios, and keep a lab journal of everything you learn.

---

## ✨ Features

### Interactive Cloud Fundamentals

Explore concise, visual explanations of key cloud topics, including IaaS, PaaS, SaaS, virtual machines, containers, regions and availability zones, IAM, networking, storage, and serverless, each with examples and simple SVG diagrams.

### Architecture Sandbox

Use a drag-and-drop canvas to compose architectures with components like frontend apps, APIs, databases, queues, storage, CDN, containers, and serverless functions, and connect them to visualize data flows.

### What-If Analyzer

Run predefined “what-if” scenarios (for example, moving a database to another region or switching from VMs to serverless) and see the impact on cost, latency, security, and complexity, summarized in tables and simple charts.

### Lab Journal

Store architecture configurations, screenshots, mistakes and fixes, notes, and external resources in structured “labs”, so you can track your learning experiments over time.

### Guided Study Path

Follow a six-week learning path that gradually introduces more advanced topics, from basic service models and virtualization to monitoring and cost awareness, helping you stay focused and consistent.

### Clean, Modern UI

Enjoy a minimal interface inspired by products like Vercel, Linear, and Stripe: neutral colors, a single accent color, responsive layouts, dark mode, and subtle animations to keep the experience smooth and focused.

---

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS  
- **Backend:** Node.js, Express  
- **Database:** PostgreSQL (Lab Journal and Study Path persistence)  
- **Canvas & Diagrams:** React DnD / Konva, SVG, or React Flow for building and connecting components  
- **Charts:** Chart.js for charts in the What-If Analyzer  
- **Hosting:**  
  - Frontend deployed on Vercel  
  - Backend deployed on a free cloud platform  
- **Language:** TypeScript end-to-end

---

## 📂 Project Structure

```text
📦 CloudTutor
 ┣ 📂 frontend          # React + TypeScript + Tailwind UI
 ┃ ┣ 📂 components      # Reusable UI + feature modules (fundamentals, sandbox, journal, study path)
 ┃ ┣ 📂 pages           # App pages (landing, study path, weeks, concepts)
 ┃ ┣ 📂 styles          # Global styles and Tailwind config
 ┃ ┗ 📜 package.json
 ┣ 📂 backend           # Node.js + Express API
 ┃ ┣ 📂 routes          # Labs, study path, and other API endpoints
 ┃ ┣ 📂 db              # SQL schema and database utilities
 ┃ ┣ 📜 server.ts       # Express app entrypoint
 ┃ ┗ 📜 package.json
 ┣ 📜 docker-compose.yml  # Optional PostgreSQL and services
┗ 📜 README.md
```

> The exact structure may evolve as features are added.

---

## 📚 Learning Flow

CloudTutor is structured around a **6-week study path**:

- **Week 1 – Foundations**  
  IaaS, PaaS, SaaS, virtualization (VMs and containers).  
- **Week 2 – Regions & Networking**  
  Regions, Availability Zones, VPC, subnets, load balancers.  
- **Week 3 – Identity & Security**  
  IAM basics, identities vs roles, least privilege.  
- **Week 4 – Storage & Delivery**  
  Object, block, and file storage, routing, CDN.  
- **Week 5 – Containers & Serverless**  
  Containers, orchestration basics, when to choose serverless.  
- **Week 6 – Monitoring & Costs**  
  Monitoring, logging, and cost awareness.

You can follow the weeks in order for a structured journey, or jump directly to specific concepts when you need a deep dive.

---

## 🧭 Roadmap

**Short-term goals**

- Complete the Cloud Fundamentals Map with diagrams and rich examples.  
- Finalize the Architecture Sandbox with drag-and-drop, connections, and basic persistence.  
- Expand What-If scenarios and refine the scoring model for cost, latency, security, and complexity.  
- Improve Lab Journal (tagging, search, filtering) and Study Path UX.

**Future ideas**

- Export and share architecture diagrams.  
- Add templates for common cloud patterns (three-tier app, event-driven systems, etc.).  
- Optional multi-user support with accounts and synced progress.
