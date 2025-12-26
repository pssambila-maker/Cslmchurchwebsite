# Christ Successful Life Ministries - Site Map

## Visual Site Structure

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        christsuccessfullife.org                          │
│                              HOME PAGE                                   │
│                         (Primary Landing)                                │
└────────────┬───────────────────────────────────┬────────────────────────┘
             │                                   │
    ┌────────┴─────────┐               ┌────────┴─────────┐
    │                  │               │                  │
    │  PUBLIC PAGES    │               │  ADMIN SECTION   │
    │                  │               │  (Protected)     │
    └────────┬─────────┘               └────────┬─────────┘
             │                                  │
             │                                  │
    ┌────────┴─────────────────────────┐       │
    │                                  │       │
    ▼                                  ▼       ▼
```

---

## 1. PUBLIC SITE STRUCTURE

### 1.1 Main Navigation Pages

```
HOME (/)
│
├── ABOUT US (/about)
│   ├── Our Mission
│   ├── Our Vision
│   ├── Church History
│   └── Statement of Faith
│
├── MINISTRIES (/ministries)
│   ├── Children's Ministry
│   ├── Youth Ministry
│   ├── Young Adults
│   ├── Women's Ministry
│   ├── Men's Ministry
│   ├── Music Ministry
│   └── Outreach & Missions
│
├── SERVICE HOURS (/services)
│   ├── Sunday Worship
│   │   └── 10:00 AM - 12:00 PM
│   ├── Location & Directions
│   └── What to Expect
│
├── LEADERSHIP (/leadership)
│   ├── Senior Pastor
│   ├── Associate Pastors
│   ├── Ministry Leaders
│   └── Church Board
│
├── EVENTS (/events)
│   ├── Upcoming Events (Dynamic)
│   ├── Event Details Pages
│   └── Past Events Archive
│
├── GALLERY (/gallery)
│   ├── Recent Photos
│   ├── Photo Categories
│   │   ├── Worship Services
│   │   ├── Church Events
│   │   ├── Community Outreach
│   │   └── Special Occasions
│   └── Photo Detail View
│
├── PRAYER REQUESTS (/prayers)
│   ├── Submit Prayer Request Form
│   ├── Answered Prayers Section
│   └── How We Pray
│
├── TESTIMONIALS (/testimonials)
│   ├── Read Testimonies
│   ├── Submit Your Testimony Form
│   └── Video Testimonials (Future)
│
├── CONTACT (/contact)
│   ├── Contact Form
│   ├── Church Information
│   │   ├── Address: 23655 Northwestern Hwy, Southfield, MI 48075
│   │   ├── Phone: +1 248-828-5305
│   │   └── Email
│   ├── Location Map
│   └── Office Hours
│
└── DONATIONS (/donate)
    ├── Why Give
    ├── Online Giving Options
    │   ├── PayPal
    │   ├── Givelify
    │   └── Stripe
    ├── Other Ways to Give
    └── Financial Transparency
```

---

## 2. ADMIN DASHBOARD STRUCTURE

### 2.1 Protected Admin Routes

```
ADMIN LOGIN (/admin/login)
│
└── ADMIN DASHBOARD (/admin)
    │
    ├── OVERVIEW
    │   ├── Recent Prayer Requests (count)
    │   ├── Pending Testimonials (count)
    │   ├── Upcoming Events (count)
    │   └── Quick Actions
    │
    ├── MANAGE EVENTS (/admin/events)
    │   ├── View All Events
    │   ├── Add New Event
    │   ├── Edit Event
    │   └── Delete Event
    │
    ├── MANAGE PRAYERS (/admin/prayers)
    │   ├── View All Prayer Requests
    │   ├── Mark as Answered
    │   ├── Delete Prayer Request
    │   └── Filter (Answered/Pending)
    │
    ├── MANAGE TESTIMONIALS (/admin/testimonials)
    │   ├── View Pending Testimonials
    │   ├── Approve Testimonial
    │   ├── Reject Testimonial
    │   └── View Approved Testimonials
    │
    ├── MANAGE GALLERY (/admin/gallery)
    │   ├── View All Photos
    │   ├── Upload New Photos
    │   ├── Edit Photo Details
    │   ├── Delete Photos
    │   └── Organize by Category
    │
    └── SETTINGS (/admin/settings)
        ├── Site Configuration
        ├── Contact Information
        ├── Service Times
        ├── Social Media Links
        └── Admin Account Management
```

---

## 3. DETAILED PAGE BREAKDOWN

### 3.1 HOME PAGE (/)
**Purpose:** First impression and navigation hub

**Sections:**
1. Hero Section
   - Welcome message
   - Background image
   - Call-to-action buttons (Visit Us, Prayer Request)

2. Service Times
   - Sunday worship time
   - Location information
   - "Plan Your Visit" button

3. Featured Events
   - 3-4 upcoming events
   - Event cards with date, title, description
   - "See All Events" link

4. Welcome Message
   - Brief about the church
   - Pastor's welcome video (optional)

5. Quick Links
   - Prayer Request
   - Donate
   - Contact Us

6. Recent Testimonials
   - 2-3 recent approved testimonials
   - "Read More Testimonies" link

---

### 3.2 ABOUT US (/about)
**Purpose:** Church identity and beliefs

**Content:**
- Church history and founding
- Mission statement
- Vision statement
- Core values
- Statement of faith
- What makes CSLM unique
- Photo gallery of church

---

### 3.3 MINISTRIES (/ministries)
**Purpose:** Showcase church programs

**Content:**
- Overview of all ministries
- Ministry cards with:
  - Icon/image
  - Ministry name
  - Description
  - Contact person
  - Meeting times
- "Get Involved" call-to-action

**Ministries to feature:**
1. Children's Ministry (Kids Church)
2. Youth Ministry (Teens)
3. Young Adults
4. Women's Ministry
5. Men's Ministry
6. Music/Worship Ministry
7. Prayer Ministry
8. Outreach & Missions

---

### 3.4 SERVICE HOURS (/services)
**Purpose:** Help visitors know when to attend

**Content:**
- Sunday worship time: 10:00 AM - 12:00 PM
- Location with map
- Parking information
- What to expect (dress code, service flow)
- Children's programs during service
- Livestream information (if available)

---

### 3.5 LEADERSHIP (/leadership)
**Purpose:** Introduce church leaders

**Content:**
- Senior pastor profile
  - Photo
  - Biography
  - Vision statement
- Associate pastors
- Ministry leaders
- Church board members
- Contact information for leaders

---

### 3.6 EVENTS (/events)
**Purpose:** Keep congregation informed
**Data Source:** Firestore `events` collection

**Features:**
- Event list (upcoming first)
- Event cards showing:
  - Date and time
  - Event title
  - Brief description
  - Location
  - Featured image
  - RSVP button (future feature)
- Filter by month
- Past events archive

**Individual Event Page:** (/events/:id)
- Full event details
- Large image
- Date, time, location
- Full description
- Contact for questions
- Share buttons

---

### 3.7 GALLERY (/gallery)
**Purpose:** Visual storytelling
**Data Source:** Firebase Storage + Firestore

**Features:**
- Photo grid/masonry layout
- Categories/filters
- Lightbox view
- Photo details (title, date, event)
- Download option (optional)
- Pagination or infinite scroll

---

### 3.8 PRAYER REQUESTS (/prayers)
**Purpose:** Community prayer support
**Data Source:** Firestore `prayers` collection

**Sections:**

**Submit Prayer Request Form:**
- Name (required)
- Email (required)
- Prayer request (textarea, required)
- Anonymous option (checkbox)
- Submit button

**Answered Prayers:**
- Display approved answered prayers
- Testimony of God's faithfulness
- Encouragement to others

**How We Pray:**
- Information about prayer ministry
- Prayer meeting times
- Join prayer team

---

### 3.9 TESTIMONIALS (/testimonials)
**Purpose:** Share faith stories
**Data Source:** Firestore `testimonials` collection

**Sections:**

**Read Testimonies:**
- Grid/list of approved testimonials
- Name (or "Anonymous")
- Date submitted
- Testimony text
- Filter by category (optional)

**Submit Your Testimony:**
- Name (required)
- Email (required)
- Testimony (textarea, required)
- Category (dropdown: Salvation, Healing, Answered Prayer, etc.)
- Photo upload (optional)
- Submit button
- Note: "Your testimony will be reviewed before publishing"

---

### 3.10 CONTACT (/contact)
**Purpose:** Make it easy to reach church

**Content:**

**Contact Information:**
- Address: 23655 Northwestern Highway, Southfield, MI 48075
- Phone: +1 248-828-5305
- Email: info@christsuccessfullife.org
- Office hours

**Contact Form:**
- Name (required)
- Email (required)
- Phone (optional)
- Subject (dropdown)
- Message (textarea, required)
- Submit button

**Map:**
- Embedded Google Maps
- Get directions link

**Social Media:**
- Facebook
- YouTube
- Instagram
- Twitter/X (if applicable)

---

### 3.11 DONATIONS (/donate)
**Purpose:** Facilitate giving

**Content:**

**Why Give:**
- Scriptural basis for giving
- How donations are used
- Impact stories

**Online Giving Options:**
- PayPal button
- Givelify link
- Stripe integration
- Recurring giving option

**Other Ways to Give:**
- Mail checks
- In-person during service
- Stock donations
- Planned giving

**Financial Accountability:**
- "We are committed to transparency"
- Annual report link (optional)

---

## 4. ADMIN PAGES DETAIL

### 4.1 ADMIN LOGIN (/admin/login)
**Purpose:** Secure access

**Features:**
- Email field
- Password field
- "Remember me" checkbox
- Login button
- "Forgot password" link
- Firebase Authentication

---

### 4.2 ADMIN DASHBOARD (/admin)
**Purpose:** Overview and quick access

**Widgets:**
1. Statistics Cards
   - Total prayer requests (this month)
   - Pending testimonials
   - Upcoming events count
   - Gallery photos count

2. Recent Activity
   - Last 5 prayer requests
   - Last 5 testimonials

3. Quick Actions
   - Add New Event button
   - View Prayer Requests button
   - Approve Testimonials button
   - Upload Photos button

---

### 4.3 MANAGE EVENTS (/admin/events)
**Purpose:** Full CRUD for events

**Views:**

**Event List:**
- Table with: Title, Date, Status, Actions
- Search/filter
- Pagination

**Add/Edit Event Form:**
- Title (required)
- Date (date picker, required)
- Time (time picker, required)
- Location (text)
- Description (rich text editor)
- Featured image (upload)
- Active/Inactive toggle
- Save button
- Cancel button

---

### 4.4 MANAGE PRAYERS (/admin/prayers)
**Purpose:** View and manage prayer requests

**Features:**
- List all prayer requests
- Columns: Name, Date, Request (truncated), Status
- "Mark as Answered" button
- Delete button
- Filter: All / Pending / Answered
- Search functionality
- Export to CSV (optional)

**Privacy Note:**
- Remind admin of confidentiality

---

### 4.5 MANAGE TESTIMONIALS (/admin/testimonials)
**Purpose:** Approve/reject testimonials

**Tabs:**
1. Pending Approval
2. Approved
3. Rejected

**Pending View:**
- List of testimonials awaiting approval
- Full testimony text
- Submitter name and email
- Submit date
- Actions: Approve / Reject / Edit

**Approved View:**
- List of published testimonials
- Unpublish option

---

### 4.6 MANAGE GALLERY (/admin/gallery)
**Purpose:** Manage photo library

**Features:**
- Upload multiple photos
- Drag & drop interface
- Photo grid with thumbnails
- Edit photo details:
  - Title
  - Description
  - Category
  - Date taken
- Delete photos
- Reorder photos (drag & drop)

---

### 4.7 SETTINGS (/admin/settings)
**Purpose:** Configure site settings

**Sections:**

**Service Times:**
- Edit Sunday service time
- Add additional service times

**Contact Information:**
- Church address
- Phone number
- Email address

**Social Media:**
- Facebook URL
- YouTube URL
- Instagram URL
- Twitter/X URL

**Admin Users:**
- Add new admin
- Remove admin
- Change password

---

## 5. SITE MAP BY FUNCTIONALITY

### 5.1 Information Pages (Static Content)
- Home
- About Us
- Ministries
- Service Hours
- Leadership

### 5.2 Dynamic Content Pages (Database-Driven)
- Events
- Gallery
- Prayer Requests (read answered prayers)
- Testimonials (read approved)

### 5.3 Form Submission Pages
- Prayer Request submission
- Testimonial submission
- Contact form
- Donation page

### 5.4 Admin Pages (Protected)
- Login
- Dashboard
- All management pages

---

## 6. NAVIGATION STRUCTURE

### 6.1 Primary Navigation (Header)
```
Logo (left) | Home | About | Ministries | Events | Gallery | Contact | Donate (Button)
```

### 6.2 Secondary Navigation (Header)
```
Prayer Requests | Testimonials | Service Hours | Leadership
```

### 6.3 Footer Navigation
**Column 1: About**
- About Us
- Leadership
- Statement of Faith

**Column 2: Get Involved**
- Ministries
- Events
- Volunteer

**Column 3: Resources**
- Prayer Requests
- Testimonials
- Gallery

**Column 4: Contact**
- Contact form link
- Address
- Phone
- Email
- Social media icons

---

## 7. URL STRUCTURE

### 7.1 Public URLs
```
/                          → Home
/about                     → About Us
/ministries                → Ministries
/services                  → Service Hours
/leadership                → Leadership
/events                    → Events List
/events/:id                → Event Detail
/gallery                   → Gallery
/prayers                   → Prayer Requests
/testimonials              → Testimonials
/contact                   → Contact
/donate                    → Donations
```

### 7.2 Admin URLs
```
/admin/login               → Admin Login
/admin                     → Dashboard
/admin/events              → Manage Events
/admin/events/new          → Add Event
/admin/events/:id/edit     → Edit Event
/admin/prayers             → Manage Prayers
/admin/testimonials        → Manage Testimonials
/admin/gallery             → Manage Gallery
/admin/settings            → Settings
```

---

## 8. MOBILE NAVIGATION

**Hamburger Menu (screens < 768px):**
- Home
- About Us
- Ministries
- Service Hours
- Leadership
- Events
- Gallery
- Prayer Requests
- Testimonials
- Contact
- **Donate** (highlighted button)

**Bottom Tab Bar (optional for mobile):**
- Home
- Prayer
- Events
- Contact
- More

---

## 9. USER PERSONAS & PATHS

### Persona 1: First-Time Visitor
**Goal:** Learn about the church
**Path:** Home → About Us → Service Hours → Contact

### Persona 2: Regular Member
**Goal:** Submit prayer request
**Path:** Home → Prayer Requests → Submit Form

### Persona 3: Event Attendee
**Goal:** Find event details
**Path:** Home → Events → Event Detail

### Persona 4: Donor
**Goal:** Make a donation
**Path:** Home → Donate → External payment

### Persona 5: Pastor/Admin
**Goal:** Add new event
**Path:** Admin Login → Dashboard → Manage Events → Add Event

---

## 10. SEO & METADATA STRUCTURE

**All Pages Include:**
- Page title (unique)
- Meta description
- Open Graph tags
- Canonical URL
- Schema.org markup (for Organization, Events, etc.)

**Example for Home:**
```html
<title>Christ Successful Life Ministries | Church in Southfield, MI</title>
<meta name="description" content="Welcome to Christ Successful Life Ministries. Join us for Sunday worship at 10am. Located in Southfield, Michigan.">
```

---

## 11. FILE & FOLDER STRUCTURE

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Form/
│   │   └── Modal.jsx
│   └── sections/
│       ├── Hero.jsx
│       ├── ServiceTimes.jsx
│       └── FeaturedEvents.jsx
├── pages/
│   ├── public/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Ministries.jsx
│   │   ├── Services.jsx
│   │   ├── Leadership.jsx
│   │   ├── Events.jsx
│   │   ├── EventDetail.jsx
│   │   ├── Gallery.jsx
│   │   ├── PrayerRequests.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   └── Donate.jsx
│   └── admin/
│       ├── Login.jsx
│       ├── Dashboard.jsx
│       ├── ManageEvents.jsx
│       ├── ManagePrayers.jsx
│       ├── ManageTestimonials.jsx
│       ├── ManageGallery.jsx
│       └── Settings.jsx
├── firebase/
│   ├── config.js
│   ├── auth.js
│   ├── firestore.js
│   └── storage.js
├── hooks/
│   ├── useAuth.js
│   ├── useEvents.js
│   ├── usePrayers.js
│   └── useTestimonials.js
├── context/
│   └── AuthContext.jsx
├── utils/
│   ├── validation.js
│   └── helpers.js
├── App.jsx
└── main.jsx
```

---

**Document Version:** 1.0
**Last Updated:** December 26, 2025
**Total Pages:** 11 public + 7 admin = 18 pages
