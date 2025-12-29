# CSLM Website Styling & Formatting Guide

## Overview
This document contains all styling specifications, color schemes, fonts, animations, and formatting details for the Christ Successful Life Ministries (CSLM) website.

---

## Color Scheme

### Primary Blue Colors
Based on the original website theme color: `#00aeef`

```javascript
primary: {
  50: '#e0f7ff',   // Lightest blue
  100: '#b3ebff',
  200: '#80dfff',
  300: '#4dd3ff',
  400: '#26c9ff',
  500: '#00aeef',  // Main brand color (theme-color)
  600: '#0A95C9',  // Hover states
  700: '#0072bc',  // Dark variant
  800: '#015891',  // Footer/darker sections
  900: '#014166',  // Darkest
}
```

### Secondary Gray Colors
```javascript
secondary: {
  50: '#fafafa',
  100: '#f4f4f5',
  200: '#e4e4e7',
  300: '#d4d4d8',
  400: '#a1a1aa',
  500: '#71717a',
  600: '#52525b',
  700: '#3f3f46',
  800: '#27272a',
  900: '#18181b',
}
```

### Usage Guidelines
- **Primary 500** (`#00aeef`): Main buttons, links, icons
- **Primary 600** (`#0A95C9`): Button hover states
- **Primary 700** (`#0072bc`): Section backgrounds
- **Primary 800** (`#015891`): Footer background
- **Secondary colors**: Text, borders, backgrounds

---

## Typography

### Font Families

#### Google Fonts Import
```html
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
```

#### Font Configuration (Tailwind)
```javascript
fontFamily: {
  sans: ['Raleway', 'system-ui', 'sans-serif'],    // Body text
  heading: ['Poppins', 'sans-serif'],               // Headings
}
```

### Font Usage
- **Raleway**: All body text, paragraphs, navigation, buttons
- **Poppins**: All headings (h1, h2, h3, etc.)

### Font Sizes & Weights
```css
/* Body Text */
body {
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: rgb(69, 69, 69);
}

/* Headings */
h1 { font-size: 2.5rem; font-weight: 700; } /* 40px */
h2 { font-size: 2rem; font-weight: 600; }   /* 32px */
h3 { font-size: 1.5rem; font-weight: 600; } /* 24px */
```

---

## Animations

### Keyframe Definitions

#### Slide In Left Animation
```javascript
slideInLeft: {
  '0%': {
    opacity: '0',
    transform: 'translateX(-100px)',
  },
  '100%': {
    opacity: '1',
    transform: 'translateX(0)',
  },
}
```

**Usage:**
```jsx
<h1 className="animate-slide-in-left">Welcome!</h1>
<h3 className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
  Bienvenue!
</h3>
```

**Timing:**
- Duration: 1s
- Easing: ease-out
- Stagger delays: 0.2s increments

#### Fade In Animation
```javascript
fadeIn: {
  '0%': { opacity: '0' },
  '100%': { opacity: '1' },
}
```

**Usage:**
```jsx
<div className="animate-fade-in">Content</div>
```

### Transition Specifications
```css
transition-duration: 0.6s;
transition-property: opacity;
transition-timing-function: ease-in-out;
```

---

## Hero Section / Carousel

### Specifications
```javascript
{
  height: '600px',                    // Fixed height
  backgroundSize: 'cover',            // Fill container
  backgroundPosition: 'center',       // Center image
  backgroundRepeat: 'no-repeat',     // No tiling
  position: 'relative',               // For overlay
  display: 'flex',                    // Center content
  alignItems: 'center',               // Vertical center
}
```

### Hero Section Structure
```jsx
<div
  className="relative bg-cover bg-center bg-no-repeat text-white h-[600px] flex items-center px-4"
  style={{ backgroundImage: "url('/images/banners/AboutUs.jpg')" }}
>
  {/* Dark gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto text-center md:text-left w-full">
    <h1 className="animate-slide-in-left">Welcome!</h1>
    <h3 className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
      Bienvenue!
    </h3>
    <p className="animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
      CSLM Church is glad and honored to host your visit...
    </p>
    <div className="animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
      <Link to="/about" className="btn-primary">About Us</Link>
    </div>
  </div>
</div>
```

### Overlay Specifications
- **Gradient**: `from-black/70 to-black/50` (left to right)
- **Purpose**: Ensures text readability over background images
- **Opacity**: 50-70% black

---

## Page Headers / Banners

### Standard Page Header
```jsx
<div
  className="relative bg-cover bg-center text-white py-20 md:py-32 px-4"
  style={{ backgroundImage: "url('/images/banners/[PAGE].jpg')" }}
>
  <div className="absolute inset-0 bg-black/50"></div>
  <div className="relative max-w-7xl mx-auto text-center">
    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
      Page Title
    </h1>
    <p className="text-xl text-blue-100">
      Page subtitle or description
    </p>
  </div>
</div>
```

### Banner Image Mapping
```
/images/banners/AboutUs.jpg     → About page, Home hero
/images/banners/Events.jpg      → Events page
/images/banners/Ministries.jpg  → Ministries page
/images/banners/Prayers.jpg     → Prayer Requests, Services, Gallery
/images/banners/Donations.jpg   → Donate, Contact pages
/images/banners/Baptism.jpg     → (Reserved for future use)
```

### Height Specifications
- **Mobile**: `py-20` (80px padding = ~160px total)
- **Desktop**: `md:py-32` (128px padding = ~256px total)
- **Hero Section**: Fixed `600px` height

---

## Buttons

### Primary Button
```jsx
<button className="px-8 py-3 bg-primary-500 text-white rounded-md font-semibold hover:bg-primary-600 transition-colors shadow-lg">
  Button Text
</button>
```

**Styles:**
- Background: `#00aeef` (primary-500)
- Hover: `#0A95C9` (primary-600)
- Text: White, semibold
- Padding: 32px horizontal, 12px vertical
- Border radius: Medium (6px)
- Shadow: Large
- Transition: 0.3s colors

### Secondary Button
```jsx
<button className="px-8 py-3 bg-white text-primary-700 rounded-md font-semibold hover:bg-gray-100 transition-colors shadow-lg">
  Button Text
</button>
```

**Styles:**
- Background: White
- Text: `#0072bc` (primary-700)
- Hover: Light gray background
- Same padding and styling as primary

---

## Card Components

### Event Card
```jsx
<div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
  {/* Header */}
  <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6">
    <h3 className="text-2xl font-heading font-bold mb-2">Event Title</h3>
    <p className="text-primary-100">Subtitle</p>
  </div>

  {/* Content */}
  <div className="p-6 space-y-4">
    {/* Event details */}
  </div>
</div>
```

### Ministry Card
```jsx
<div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all p-8 border-2 border-gray-100 hover:border-primary-300">
  <div className="flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6 mx-auto">
    <Icon size={32} />
  </div>
  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2 text-center">
    Ministry Name
  </h3>
  <p className="text-primary-600 font-semibold text-center mb-4">
    Led by Leader Name
  </p>
  <p className="text-gray-600 mb-6 text-center">Description</p>
</div>
```

---

## Layout & Spacing

### Container Widths
```javascript
maxWidth: {
  'xl': '1280px',    // max-w-xl
  '7xl': '80rem',    // max-w-7xl (1280px)
  '6xl': '72rem',    // max-w-6xl (1152px)
  '4xl': '56rem',    // max-w-4xl (896px)
  '2xl': '42rem',    // max-w-2xl (672px)
}
```

### Section Spacing
```css
/* Standard section padding */
.section { padding: 4rem 1rem; }        /* py-16 px-4 */

/* Large section padding */
.section-large { padding: 6rem 1rem; } /* py-24 px-4 */

/* Section with background */
.section-alt { background-color: #f9fafb; } /* bg-gray-50 */
```

### Grid Layouts
```jsx
{/* 2-column grid */}
<div className="grid md:grid-cols-2 gap-8">

{/* 3-column grid */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{/* 4-column grid */}
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

{/* Responsive service times grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
```

---

## Gallery Component

### Grid Layout
```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer group">
    <img
      src={imageUrl}
      alt={imageName}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      referrerPolicy="no-referrer"
    />
  </div>
</div>
```

### Lightbox Modal
```jsx
<div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
  <button className="absolute top-4 right-4 text-white hover:text-gray-300">
    <FaTimes className="text-4xl" />
  </button>
  <img
    src={fullImageUrl}
    alt="Full size"
    className="max-w-full max-h-full object-contain"
    referrerPolicy="no-referrer"
  />
</div>
```

---

## Responsive Design

### Breakpoints (Tailwind Default)
```javascript
screens: {
  'sm': '640px',   // Small devices
  'md': '768px',   // Medium devices (tablets)
  'lg': '1024px',  // Large devices (desktops)
  'xl': '1280px',  // Extra large devices
  '2xl': '1536px', // 2X large devices
}
```

### Mobile-First Approach
```jsx
{/* Mobile: stack vertically, Desktop: 2 columns */}
<div className="flex flex-col md:flex-row gap-4">

{/* Mobile: center text, Desktop: left align */}
<div className="text-center md:text-left">

{/* Mobile: full width, Desktop: max width */}
<div className="w-full md:max-w-2xl">
```

---

## Icon Usage

### React Icons (Font Awesome)
```javascript
import {
  FaCalendar,       // Calendar/Events
  FaClock,          // Time
  FaMapMarkerAlt,   // Location
  FaPhone,          // Phone/Contact
  FaPray,           // Prayer
  FaBook,           // Bible/Teaching
  FaHeart,          // Love/Donation
  FaUsers,          // Community/Group
  FaMusic,          // Worship/Music
  FaChild,          // Children
  FaDollarSign,     // Finance/Money
  FaImages,         // Gallery
  FaTimes,          // Close
} from 'react-icons/fa';
```

### Icon Styling
```jsx
{/* Large icon */}
<FaCalendar className="text-6xl mx-auto mb-4 text-blue-100" />

{/* Medium icon in circle */}
<div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
  <FaMusic size={32} />
</div>

{/* Small inline icon */}
<FaClock className="text-primary-600 text-xl" />
```

---

## Form Styling

### Input Fields
```jsx
<input
  type="text"
  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
  placeholder="Your name"
/>
```

### Textarea
```jsx
<textarea
  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
  rows="6"
  placeholder="Your message"
></textarea>
```

### Checkbox
```jsx
<label className="flex items-center gap-2 cursor-pointer">
  <input
    type="checkbox"
    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
  />
  <span className="text-gray-700">Submit anonymously</span>
</label>
```

---

## Firebase Integration

### Storage URL Format
```
https://firebasestorage.googleapis.com/v0/b/cslm-church.firebasestorage.app/o/[path]?alt=media&token=[token]
```

### CORS Configuration (cors.json)
```json
[
  {
    "origin": ["*"],
    "method": ["GET"],
    "maxAgeSeconds": 3600
  }
]
```

### Apply CORS
```bash
gsutil cors set cors.json gs://cslm-church.firebasestorage.app
```

### Storage Rules
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

---

## CSS Custom Properties

### Root Variables (Optional Enhancement)
```css
:root {
  --color-primary: #00aeef;
  --color-primary-hover: #0A95C9;
  --color-primary-dark: #0072bc;
  --color-footer: #015891;

  --font-body: 'Raleway', sans-serif;
  --font-heading: 'Poppins', sans-serif;

  --transition-fast: 0.3s;
  --transition-medium: 0.6s;
  --transition-slow: 1s;

  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}
```

---

## Accessibility

### ARIA Labels
```jsx
<button aria-label="Close modal" onClick={closeModal}>
  <FaTimes />
</button>

<nav aria-label="Main navigation">
  {/* Navigation items */}
</nav>

<img src={url} alt="Descriptive text for screen readers" />
```

### Keyboard Navigation
- All interactive elements must be focusable
- Use `tabindex="0"` for custom interactive elements
- Ensure proper focus styles:
```css
.focus-visible:focus {
  outline: 2px solid #00aeef;
  outline-offset: 2px;
}
```

### Color Contrast
- **Minimum ratio**: 4.5:1 for normal text
- **Large text**: 3:1 ratio acceptable
- Test with tools: WebAIM Contrast Checker

---

## Performance Optimization

### Image Optimization
```jsx
{/* Lazy loading */}
<img loading="lazy" src={url} alt={alt} />

{/* Responsive images */}
<img
  srcSet="image-small.jpg 640w, image-medium.jpg 1024w, image-large.jpg 1920w"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  src="image-medium.jpg"
  alt="Description"
/>
```

### Font Loading
```html
<!-- Preconnect to Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Use display=swap to prevent FOIT -->
<link href="...&display=swap" rel="stylesheet" />
```

---

## Browser Support

### Target Browsers
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

### Progressive Enhancement
```css
/* Modern browsers */
@supports (backdrop-filter: blur(10px)) {
  .modal-overlay {
    backdrop-filter: blur(10px);
  }
}

/* Fallback for older browsers */
@supports not (backdrop-filter: blur(10px)) {
  .modal-overlay {
    background-color: rgba(0, 0, 0, 0.9);
  }
}
```

---

## Development Guidelines

### Code Style
- Use Tailwind classes for styling (avoid custom CSS)
- Follow mobile-first responsive design
- Use semantic HTML elements
- Keep components modular and reusable
- Comment complex logic

### File Organization
```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx
│   └── Footer.jsx
├── pages/
│   └── public/         # Public-facing pages
│       ├── Home.jsx
│       ├── Events.jsx
│       └── ...
├── firebase/           # Firebase configuration
│   └── config.js
└── index.css          # Global styles
```

### Naming Conventions
- **Components**: PascalCase (e.g., `EventCard.jsx`)
- **Functions**: camelCase (e.g., `handleSubmit`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_KEY`)
- **CSS classes**: Use Tailwind utilities

---

## Deployment

### Build Process
```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Deploy to Firebase
firebase deploy --only hosting
```

### Environment Variables
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=cslm-church
VITE_FIREBASE_STORAGE_BUCKET=cslm-church.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

## Meta Tags

### HTML Head
```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#00aeef" />
  <meta name="description" content="Christ Successful Life Ministries Church" />
  <meta name="keywords" content="CSLM, church, ministry, Michigan, Southfield" />

  <title>Christ Successful Life Ministries</title>

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
</head>
```

---

## Version History

### v1.0.0 - Initial Release
- Implemented blue color scheme (#00aeef)
- Added Raleway and Poppins fonts
- Created hero section with 600px height
- Added slide-in-left animations
- Implemented banner images for all pages
- Set up Firebase Storage with CORS
- Responsive design for mobile and desktop

---

## Contact & Support

For questions or issues with styling:
- GitHub: [Repository URL]
- Email: cslmchurch@gmail.com
- Website: https://cslm-church.web.app

---

**Last Updated:** December 28, 2025
