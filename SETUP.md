# PitchNest Setup Guide

Welcome! This document will help you set up the project locally to contribute effectively.

---

##  Prerequisites

Make sure you have:

- [Node.js](https://nodejs.org/) **≥ 18.x** (recommended)
- A package manager of your choice:
  - **npm** (default)
  - **yarn**
  - **pnpm**

Verify your versions:

```bash
node -v
npm -v
````

---

## Fork and Clone the Repository

1. **Fork** the repository to your GitHub account.
2. **Clone** your fork:

```bash
git clone https://github.com/SudiptaPaul-31/PitchNest.git
cd PitchNest
```

---

##  Create a New Branch

Always work in a new branch. Example issue (#6):

```bash
git checkout -b fix-6
```

---

## Install Dependencies

Install the required packages. Choose your preferred package manager:

### Using npm:

```bash
npm install
```

### Using yarn:

```bash
yarn
```

### Using pnpm:

```bash
pnpm install
```

---

##  Running the Development Server

Start the Next.js development server:

### npm:

```bash
npm run dev
```

### yarn:

```bash
yarn dev
```

### pnpm:

```bash
pnpm dev
```

Visit **[http://localhost:3000](http://localhost:3000)** in your browser to see the app running locally.

---

##  Build for Production

Check that the production build works:

### npm:

```bash
npm run build
npm start
```

### yarn:

```bash
yarn build
yarn start
```

### pnpm:

```bash
pnpm build
pnpm start
```

---

##  Linting

Lint your code before committing to ensure consistency:

### npm:

```bash
npm run lint
```

### yarn:

```bash
yarn lint
```

### pnpm:

```bash
pnpm lint
```

---

##  Testing Your Changes

* Verify your changes don’t break existing functionality.
* Make sure the app runs without errors or warnings.
* Visually check your changes in the browser.

---

##  Committing Changes

Use clear and descriptive commit messages. Example:

```bash
git add [file_name]
git commit -m "Fix: [Short description of the fix]"
```

---

##  Pushing and Creating a Pull Request

Push your branch:

```bash
git push origin fix-6
```

Then open a **Pull Request** on GitHub **from your fork/branch to the main repository**.

**Include in your PR description:**

```
Closes #6
```

---

##  Guidelines

* Don’t submit a pull request unless you are **assigned** to this issue.
* Complete the task **within 3 business days**.
* Follow any additional contribution guidelines in `CONTRIBUTING.md` or `README.md` if available.

---

##  Tech Stack

* **Next.js 13.5** (App Router)
* **TypeScript**
* **Tailwind CSS**
* **Radix UI Components**
* **ESLint** (for linting)

---

##  Helpful Links

* [Next.js Docs](https://nextjs.org/docs)
* [Tailwind CSS Docs](https://tailwindcss.com/docs)
* [Radix UI Docs](https://www.radix-ui.com/docs)

---

##  Thank You!

Thank you for contributing to this project! Your help makes it better for everyone.

