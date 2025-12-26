# Christ Successful Life Ministries - Technical Stack Documentation

## Overview
This document details all technical decisions, tools, libraries, and configurations for the CSLM website project.

---

## 1. FRONTEND STACK

### 1.1 Core Framework
**React 18.3+**
- **Why:** Industry standard, excellent AI code generation support, component-based architecture
- **Features:** Hooks, Context API, Suspense, Error Boundaries
- **Package:** `react`, `react-dom`

### 1.2 Build Tool
**Vite 5+** (Recommended)
- **Why:** Fast HMR, optimized builds, modern defaults
- **Alternative:** Create React App (if preferred)
- **Package:** `vite`, `@vitejs/plugin-react`

**Build Configuration:**
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser'
  }
})
```

### 1.3 Styling
**Tailwind CSS 3.4+**
- **Why:** Utility-first, mobile-responsive, rapid development
- **Package:** `tailwindcss`, `postcss`, `autoprefixer`

**Color Scheme:**
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#fafafa',
          100: '#f4f4f5',
          500: '#71717a',
          900: '#18181b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      }
    }
  }
}
```

**Additional Styling Libraries:**
- **Headless UI:** `@headlessui/react` (for accessible components)
- **Tailwind Forms:** `@tailwindcss/forms` (better form styling)

### 1.4 Routing
**React Router v6**
- **Why:** Standard routing library, nested routes, protected routes
- **Package:** `react-router-dom`

**Route Structure:**
```javascript
// App.jsx structure
<BrowserRouter>
  <Routes>
    {/* Public Routes */}
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      {/* ... more public routes */}
    </Route>

    {/* Admin Routes */}
    <Route path="/admin" element={<ProtectedRoute />}>
      <Route index element={<Dashboard />} />
      {/* ... admin routes */}
    </Route>
  </Routes>
</BrowserRouter>
```

### 1.5 State Management
**React Context API + Custom Hooks**
- **Why:** Built-in, sufficient for this scale, no extra dependencies
- **Alternative:** Redux Toolkit (if app grows significantly)

**Contexts:**
1. `AuthContext` - User authentication state
2. `ThemeContext` (optional) - Dark mode toggle

### 1.6 Form Handling
**React Hook Form 7+**
- **Why:** Performance, minimal re-renders, easy validation
- **Package:** `react-hook-form`

**Example:**
```javascript
import { useForm } from 'react-hook-form'

function PrayerRequestForm() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    // Save to Firebase
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true })} />
      {errors.name && <span>This field is required</span>}
    </form>
  )
}
```

### 1.7 Icons
**React Icons** or **Heroicons**
- **Package:** `react-icons` or `@heroicons/react`
- **Why:** Comprehensive icon sets, tree-shakeable

### 1.8 Date Handling
**date-fns 3+**
- **Package:** `date-fns`
- **Why:** Lightweight, modular, simple API
- **Usage:** Format dates, calculate relative times

### 1.9 Image Optimization
**React Lazy Load Image Component**
- **Package:** `react-lazy-load-image-component`
- **Why:** Lazy load images, placeholders, better performance

### 1.10 Animations (Optional)
**Framer Motion**
- **Package:** `framer-motion`
- **Why:** Declarative animations, spring physics
- **Use Cases:** Page transitions, hover effects, modal animations

---

## 2. BACKEND STACK (Firebase)

### 2.1 Firebase Services

#### **Firebase Hosting**
- **Purpose:** Serve static React build
- **Features:**
  - Free SSL certificate
  - Global CDN
  - Custom domain support
  - Instant rollbacks

**Configuration:**
```json
// firebase.json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

#### **Firestore (Database)**
- **Purpose:** Store prayers, events, testimonials, gallery metadata
- **Type:** NoSQL document database
- **Features:**
  - Real-time updates
  - Offline support
  - Scalable
  - Security rules

**Collections:**
1. `prayers`
2. `events`
3. `testimonials`
4. `gallery`
5. `config`

**Security Rules:**
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Events: Read by anyone, write by authenticated users
    match /events/{eventId} {
      allow read: if true;
      allow write: if request.auth != null;
    }

    // Prayers: Write by anyone, read by authenticated users
    match /prayers/{prayerId} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }

    // Testimonials: Write by anyone, read approved ones
    match /testimonials/{testimonialId} {
      allow create: if true;
      allow read: if resource.data.isApproved == true || request.auth != null;
      allow update, delete: if request.auth != null;
    }

    // Gallery: Read by anyone, write by authenticated users
    match /gallery/{imageId} {
      allow read: if true;
      allow write: if request.auth != null;
    }

    // Config: Read by anyone, write by authenticated users
    match /config/{configId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

#### **Firebase Authentication**
- **Purpose:** Secure admin access
- **Method:** Email/Password
- **Features:**
  - Built-in session management
  - Password reset
  - Email verification (optional)

**Admin User Setup:**
```javascript
// Create first admin via Firebase Console
// Email: admin@christsuccessfullife.org
// Password: (secure password)
```

#### **Firebase Storage**
- **Purpose:** Store gallery images, event images
- **Features:**
  - Automatic image serving
  - Security rules
  - Upload/download APIs

**Storage Rules:**
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /gallery/{imageId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /events/{imageId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

#### **Firebase Functions (Optional - Phase 2)**
- **Purpose:** Server-side operations
- **Use Cases:**
  - Send email on prayer request submission
  - Scheduled cleanup of old data
  - Image resizing on upload

**Example Function:**
```javascript
// functions/index.js
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

exports.sendPrayerEmail = functions.firestore
  .document('prayers/{prayerId}')
  .onCreate((snap, context) => {
    const prayer = snap.data();
    // Send email to pastor
    return sendEmail(prayer);
  });
```

### 2.2 Firebase Configuration

**Install Firebase:**
```bash
npm install firebase
```

**Firebase Config File:**
```javascript
// src/firebase/config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "cslm-church.firebaseapp.com",
  projectId: "cslm-church",
  storageBucket: "cslm-church.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
```

---

## 3. DEVELOPMENT TOOLS

### 3.1 Package Manager
**npm** or **pnpm**
- **Recommended:** pnpm (faster, disk efficient)
- **Alternative:** npm (comes with Node.js)

### 3.2 Code Quality

**ESLint**
- **Package:** `eslint`, `eslint-plugin-react`
- **Purpose:** Code linting, catch errors

**Prettier**
- **Package:** `prettier`
- **Purpose:** Code formatting
- **Config:** `.prettierrc`

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

### 3.3 Version Control
**Git + GitHub**
- **Repository:** Private or public GitHub repo
- **Branching Strategy:**
  - `main` - production
  - `develop` - development
  - `feature/*` - new features

**Commit Convention:**
```
feat: Add prayer request form
fix: Fix navbar mobile menu
style: Update button colors
docs: Update README
```

### 3.4 Environment Variables
**dotenv** (built into Vite)

**File:** `.env`
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
# ... other Firebase config
```

**Usage:**
```javascript
const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
```

**Important:** Add `.env` to `.gitignore`

---

## 4. THIRD-PARTY INTEGRATIONS

### 4.1 Payment Processing
**External Links (No code integration needed)**
- **PayPal:** PayPal.me link or donate button
- **Givelify:** External link to Givelify page
- **Stripe:** (Future) Embedded payment form

### 4.2 Email Service (Optional)
**EmailJS** or **Firebase Functions + Nodemailer**
- **Purpose:** Send contact form emails, prayer request notifications
- **Package:** `emailjs-com` or Firebase Functions

### 4.3 Maps
**Google Maps Embed**
- **Purpose:** Show church location
- **Implementation:** Iframe embed (free, no API key needed)

```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!..."
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy">
</iframe>
```

### 4.4 Analytics
**Google Analytics 4**
- **Purpose:** Track visitor metrics
- **Package:** `react-ga4`
- **Implementation:** Add GA script to `index.html`

### 4.5 Social Media
**Social Share Buttons**
- **Package:** `react-share`
- **Use Cases:** Share events, testimonials

---

## 5. DEPLOYMENT PIPELINE

### 5.1 Development Workflow
```bash
# Local development
npm run dev           # Start dev server (localhost:5173)

# Build for production
npm run build         # Creates dist/ folder

# Preview production build
npm run preview       # Test production build locally
```

### 5.2 Firebase Deployment
```bash
# One-time setup
npm install -g firebase-tools
firebase login
firebase init

# Deploy
firebase deploy

# Deploy specific services
firebase deploy --only hosting
firebase deploy --only firestore:rules
```

### 5.3 CI/CD (Optional - Future Enhancement)
**GitHub Actions**
- **Purpose:** Automated testing and deployment
- **Workflow:** On push to `main`, run tests, build, deploy to Firebase

**Example workflow:**
```yaml
# .github/workflows/deploy.yml
name: Deploy to Firebase
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
```

---

## 6. PERFORMANCE OPTIMIZATIONS

### 6.1 Code Splitting
**React.lazy + Suspense**
```javascript
import { lazy, Suspense } from 'react';

const AdminDashboard = lazy(() => import('./pages/admin/Dashboard'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <AdminDashboard />
    </Suspense>
  );
}
```

### 6.2 Image Optimization
- Use WebP format where possible
- Lazy load images below the fold
- Firebase Storage automatic image serving
- Responsive images with `srcset`

### 6.3 Caching Strategy
- Service Worker (optional PWA)
- Firebase Hosting automatic CDN caching
- Browser caching for static assets

### 6.4 Bundle Size
- Tree shaking (automatic with Vite)
- Dynamic imports for large libraries
- Monitor with `vite-bundle-visualizer`

---

## 7. SECURITY BEST PRACTICES

### 7.1 Environment Variables
- Never commit API keys to Git
- Use environment variables for sensitive data
- Different configs for dev/prod

### 7.2 Firestore Security
- Implement granular security rules
- Validate data server-side
- Rate limiting (Firebase App Check)

### 7.3 Authentication
- Strong password requirements
- Email verification for admins
- Session timeout (auto-logout)

### 7.4 Input Validation
- Client-side validation (React Hook Form)
- Server-side validation (Firebase rules)
- Sanitize user input to prevent XSS

### 7.5 HTTPS
- Enforce HTTPS (automatic with Firebase Hosting)
- HSTS headers
- Secure cookies

---

## 8. TESTING (Future Phase)

### 8.1 Unit Testing
**Vitest** or **Jest**
- **Package:** `vitest`, `@testing-library/react`
- **Purpose:** Test components, hooks, utilities

### 8.2 E2E Testing
**Cypress** or **Playwright**
- **Package:** `cypress`
- **Purpose:** Test user flows, form submissions

### 8.3 Firebase Emulators
**Firebase Local Emulator Suite**
- **Purpose:** Test Firestore, Auth, Functions locally
- **Command:** `firebase emulators:start`

---

## 9. ACCESSIBILITY

### 9.1 Standards
- **WCAG 2.1 Level AA** compliance
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support

### 9.2 Tools
- **@axe-core/react** - Accessibility testing
- **eslint-plugin-jsx-a11y** - Linting for a11y

### 9.3 Features
- Alt text for all images
- Focus indicators
- Color contrast ratios
- Screen reader friendly

---

## 10. DOCUMENTATION

### 10.1 Code Documentation
- JSDoc comments for complex functions
- README.md with setup instructions
- Component prop documentation

### 10.2 Admin Documentation
- User guide for admin panel
- How to add events, approve testimonials
- Troubleshooting common issues

---

## 11. MONITORING & MAINTENANCE

### 11.1 Error Tracking (Optional)
**Sentry**
- **Purpose:** Track runtime errors
- **Package:** `@sentry/react`

### 11.2 Performance Monitoring
**Firebase Performance Monitoring**
- Track page load times
- Network request performance

### 11.3 Database Backups
- Firestore automatic backups
- Export data periodically
- Backup strategy for Storage images

---

## 12. COST ESTIMATION

### 12.1 Firebase Free Tier (Spark Plan)
**Included Free:**
- Hosting: 10GB storage, 360MB/day transfer
- Firestore: 50k reads, 20k writes, 20k deletes per day
- Storage: 5GB total, 1GB download per day
- Authentication: Unlimited users

**Expected Usage:**
- Well within free tier for typical church site
- Estimated monthly cost: $0

**If Growth Needed (Blaze Plan - Pay as you go):**
- Still likely $0-5/month for small church site

### 12.2 Domain Cost
- Domain registration: ~$12/year (Google Domains, Namecheap)

### 12.3 Total First Year Cost
- Domain: $12
- Firebase: $0 (free tier)
- **Total: ~$12/year**

---

## 13. BROWSER SUPPORT

### 13.1 Target Browsers
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 5+)

### 13.2 Polyfills
- Automatic via Vite for modern features
- Core-js if targeting older browsers

---

## 14. MOBILE RESPONSIVENESS

### 14.1 Breakpoints (Tailwind defaults)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### 14.2 Mobile-First Approach
- Design for mobile first
- Progressive enhancement for larger screens
- Touch-friendly UI (44px minimum touch targets)

### 14.3 PWA (Optional Future Enhancement)
- Service Worker
- Offline support
- Add to home screen
- Push notifications

---

## 15. PACKAGE.JSON DEPENDENCIES

```json
{
  "name": "cslm-church-website",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.22.0",
    "firebase": "^10.8.0",
    "react-hook-form": "^7.50.0",
    "date-fns": "^3.3.1",
    "react-icons": "^5.0.1",
    "react-lazy-load-image-component": "^1.6.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.1.0",
    "tailwindcss": "^3.4.1",
    "postcss": "^8.4.35",
    "autoprefixer": "^10.4.17",
    "eslint": "^8.56.0",
    "eslint-plugin-react": "^7.33.2",
    "prettier": "^3.2.5"
  }
}
```

---

## 16. PROJECT INITIALIZATION COMMANDS

```bash
# Create Vite project
npm create vite@latest cslm-church -- --template react

# Navigate to project
cd cslm-church

# Install dependencies
npm install

# Install additional packages
npm install react-router-dom firebase react-hook-form date-fns react-icons

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install Firebase CLI globally
npm install -g firebase-tools

# Initialize Firebase
firebase login
firebase init

# Start development server
npm run dev
```

---

## 17. FOLDER STRUCTURE

```
cslm-church/
├── public/
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── fonts/
│   ├── components/
│   │   ├── layout/
│   │   ├── common/
│   │   └── sections/
│   ├── pages/
│   │   ├── public/
│   │   └── admin/
│   ├── firebase/
│   │   ├── config.js
│   │   ├── auth.js
│   │   ├── firestore.js
│   │   └── storage.js
│   ├── hooks/
│   ├── context/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── .gitignore
├── package.json
├── vite.config.js
├── tailwind.config.js
├── firebase.json
└── README.md
```

---

**Document Version:** 1.0
**Last Updated:** December 26, 2025
**Prepared for:** Christ Successful Life Ministries
