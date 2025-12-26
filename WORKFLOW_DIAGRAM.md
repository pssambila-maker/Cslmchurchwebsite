# Christ Successful Life Ministries - Workflow Diagrams

## 1. User Journey Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER VISITS SITE                         │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
                    ┌────────────────┐
                    │   Home Page    │
                    └────────┬───────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
        ▼                    ▼                    ▼
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ Browse Pages │    │ Submit Forms │    │Take Actions  │
└──────┬───────┘    └──────┬───────┘    └──────┬───────┘
       │                   │                    │
       │                   │                    │
       ▼                   ▼                    ▼
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ • About Us   │    │ • Prayer Req │    │ • Donate     │
│ • Ministries │    │ • Testimonial│    │ • Contact    │
│ • Leadership │    │ • Contact    │    │ • Get Direct │
│ • Events     │    └──────┬───────┘    └──────────────┘
│ • Gallery    │           │
│ • Services   │           ▼
└──────────────┘    ┌──────────────┐
                    │   Firebase   │
                    │  (Database)  │
                    └──────────────┘
```

---

## 2. Data Flow Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT (Browser)                          │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │ Public Pages │  │  Form Pages  │  │ Admin Panel  │         │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘         │
│         │                 │                  │                  │
└─────────┼─────────────────┼──────────────────┼──────────────────┘
          │                 │                  │
          │    React App    │                  │
          ▼                 ▼                  ▼
    ┌─────────────────────────────────────────────┐
    │            Firebase SDK                      │
    └─────────────────┬───────────────────────────┘
                      │
          ┌───────────┼───────────┐
          │           │           │
          ▼           ▼           ▼
    ┌─────────┐ ┌─────────┐ ┌─────────┐
    │Firestore│ │  Auth   │ │ Storage │
    │(Database)│ │ (Admin) │ │(Images) │
    └────┬────┘ └────┬────┘ └────┬────┘
         │           │           │
         └───────────┴───────────┘
                     │
         ┌───────────┴───────────┐
         │   Firebase Backend    │
         │  (Security Rules +    │
         │   Cloud Functions)    │
         └───────────────────────┘
```

---

## 3. Prayer Request Workflow

```
┌─────────────────────────────────────────────────────────────────┐
│                    USER JOURNEY - PRAYER REQUEST                 │
└─────────────────────────────────────────────────────────────────┘

    User visits site
           │
           ▼
    Clicks "Prayer"
           │
           ▼
    ┌──────────────────┐
    │ Prayer Form Page │
    │                  │
    │ • Name           │
    │ • Email          │
    │ • Request Text   │
    └────────┬─────────┘
             │
             ▼
    Fills out & submits
             │
             ▼
    ┌────────────────┐
    │  Validation    │────── Invalid ──────┐
    └────────┬───────┘                     │
             │ Valid                       ▼
             ▼                    Show error message
    ┌────────────────┐                     │
    │ Save to        │                     │
    │ Firestore      │                     │
    │ 'prayers'      │                     │
    │ collection     │                     │
    └────────┬───────┘                     │
             │                             │
             ▼                             │
    ┌────────────────┐                     │
    │ Show success   │                     │
    │ message        │                     │
    └────────┬───────┘                     │
             │                             │
             └─────────────────────────────┘
                          │
                          ▼
                 User can submit
                 another request
                          │
                          ▼
    ┌───────────────────────────────────────┐
    │ ADMIN SIDE - Prayer Management        │
    │                                       │
    │ 1. Admin logs in                      │
    │ 2. Views prayer dashboard             │
    │ 3. Sees all prayer requests           │
    │ 4. Can mark as "Answered"             │
    │ 5. Answered prayers show on site      │
    └───────────────────────────────────────┘
```

---

## 4. Admin Event Management Workflow

```
┌─────────────────────────────────────────────────────────────────┐
│                  ADMIN - EVENT MANAGEMENT                        │
└─────────────────────────────────────────────────────────────────┘

    Admin needs to add event
              │
              ▼
    ┌───────────────────┐
    │ Go to admin page  │
    └─────────┬─────────┘
              │
              ▼
    ┌───────────────────┐
    │  Login Required?  │────Yes──┐
    └─────────┬─────────┘         │
              │ No (logged in)    │
              │                   ▼
              │         ┌──────────────────┐
              │         │ Enter credentials│
              │         └────────┬─────────┘
              │                  │
              │                  ▼
              │         ┌──────────────────┐
              │         │Firebase Auth     │
              │         └────────┬─────────┘
              │                  │
              └──────────────────┘
                       │
                       ▼
            ┌──────────────────┐
            │ Admin Dashboard  │
            └────────┬─────────┘
                     │
                     ▼
            ┌──────────────────┐
            │ Manage Events    │
            └────────┬─────────┘
                     │
        ┌────────────┼────────────┐
        │            │            │
        ▼            ▼            ▼
┌──────────┐  ┌──────────┐  ┌──────────┐
│   Add    │  │   Edit   │  │  Delete  │
│  Event   │  │  Event   │  │  Event   │
└────┬─────┘  └────┬─────┘  └────┬─────┘
     │             │             │
     │             │             │
     └─────────────┼─────────────┘
                   │
                   ▼
          ┌────────────────┐
          │ Fill out form: │
          │ • Title        │
          │ • Date         │
          │ • Time         │
          │ • Description  │
          │ • Location     │
          │ • Image        │
          └────────┬───────┘
                   │
                   ▼
          ┌────────────────┐
          │   Validation   │
          └────────┬───────┘
                   │
                   ▼
          ┌────────────────┐
          │ Save/Update to │
          │   Firestore    │
          │    'events'    │
          └────────┬───────┘
                   │
                   ▼
          ┌────────────────┐
          │ Event appears  │
          │ on public site │
          │  IMMEDIATELY   │
          └────────────────┘
```

---

## 5. Testimonial Approval Workflow

```
┌─────────────────────────────────────────────────────────────────┐
│               TESTIMONIAL SUBMISSION & APPROVAL                  │
└─────────────────────────────────────────────────────────────────┘

    PUBLIC SIDE                          ADMIN SIDE
         │                                    │
         ▼                                    │
┌──────────────────┐                          │
│ User submits     │                          │
│ testimonial      │                          │
└────────┬─────────┘                          │
         │                                    │
         ▼                                    │
┌──────────────────┐                          │
│ Save to Firestore│                          │
│ isApproved:false │                          │
└────────┬─────────┘                          │
         │                                    │
         ▼                                    │
┌──────────────────┐                          │
│ Show thank you   │                          │
│ "Pending review" │                          │
└──────────────────┘                          │
                                              │
         ┌────────────────────────────────────┘
         │
         ▼
┌──────────────────┐
│ Admin logs in    │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Views pending    │
│ testimonials     │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Reviews content  │
└────────┬─────────┘
         │
         ├─────────┐
         │         │
         ▼         ▼
┌──────────┐  ┌──────────┐
│ APPROVE  │  │  REJECT  │
└────┬─────┘  └────┬─────┘
     │             │
     ▼             ▼
┌──────────┐  ┌──────────┐
│ Update   │  │ Delete   │
│isApproved│  │ document │
│= true    │  └──────────┘
└────┬─────┘
     │
     ▼
┌──────────────────┐
│ Testimonial now  │
│ visible on public│
│ Testimonials page│
└──────────────────┘
```

---

## 6. Deployment Workflow

```
┌─────────────────────────────────────────────────────────────────┐
│                     DEPLOYMENT PROCESS                           │
└─────────────────────────────────────────────────────────────────┘

    LOCAL DEVELOPMENT
           │
           ▼
    ┌──────────────┐
    │ Code changes │
    └──────┬───────┘
           │
           ▼
    ┌──────────────┐
    │ Test locally │
    │ npm run dev  │
    └──────┬───────┘
           │
           ▼
    ┌──────────────┐
    │ Ready to     │
    │ deploy?      │
    └──────┬───────┘
           │
           ▼
    ┌──────────────┐
    │ npm run build│
    └──────┬───────┘
           │
           ▼
    ┌──────────────┐
    │ Test build   │
    │ locally      │
    └──────┬───────┘
           │
           ▼
    ┌──────────────┐
    │firebase login│
    └──────┬───────┘
           │
           ▼
    ┌──────────────┐
    │firebase deploy│
    └──────┬───────┘
           │
           ▼
    ┌──────────────┐
    │ Files upload │
    │ to Firebase  │
    │ Hosting      │
    └──────┬───────┘
           │
           ▼
    ┌──────────────┐
    │ Live at:     │
    │ .web.app URL │
    └──────┬───────┘
           │
           ▼
    ┌──────────────┐
    │ Connect custom│
    │ domain (one  │
    │ time setup)  │
    └──────┬───────┘
           │
           ▼
    ┌──────────────────────┐
    │ Site live at:        │
    │christsuccessfullife  │
    │        .org          │
    └──────────────────────┘
```

---

## 7. Authentication & Security Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                  SECURITY & ACCESS CONTROL                       │
└─────────────────────────────────────────────────────────────────┘

    User Action Request
           │
           ▼
    ┌──────────────┐
    │ Public page? │──Yes──▶ Allow access
    └──────┬───────┘
           │ No
           ▼
    ┌──────────────┐
    │ Admin page?  │
    └──────┬───────┘
           │
           ▼
    ┌──────────────┐
    │ Check if     │
    │ authenticated│
    └──────┬───────┘
           │
      ┌────┴────┐
      │         │
    Yes        No
      │         │
      ▼         ▼
┌──────────┐ ┌──────────┐
│ Check    │ │ Redirect │
│ Firebase │ │ to login │
│ Auth     │ └──────────┘
└────┬─────┘
     │
     ▼
┌──────────┐
│ Valid    │──No──▶ Show error/logout
│ session? │
└────┬─────┘
     │ Yes
     ▼
┌──────────────┐
│ Allow access │
│ to admin     │
│ features     │
└──────────────┘


FIRESTORE SECURITY RULES:

┌─────────────────────────────────────┐
│ Read Events: Anyone                 │
│ Write Events: Authenticated only    │
├─────────────────────────────────────┤
│ Read Prayers: Authenticated only    │
│ Write Prayers: Anyone               │
├─────────────────────────────────────┤
│ Read Testimonials: Anyone (approved)│
│ Write Testimonials: Anyone          │
│ Update Testimonials: Auth only      │
└─────────────────────────────────────┘
```

---

## 8. Component Hierarchy

```
App
│
├── Public Layout
│   │
│   ├── Navbar
│   │   ├── Logo
│   │   └── Navigation Links
│   │
│   ├── Routes (Public)
│   │   ├── Home
│   │   │   ├── Hero Section
│   │   │   ├── Service Times
│   │   │   └── Featured Events
│   │   │
│   │   ├── About Us
│   │   ├── Ministries
│   │   ├── Leadership
│   │   ├── Service Hours
│   │   │
│   │   ├── Events
│   │   │   └── Event Card (map from Firestore)
│   │   │
│   │   ├── Gallery
│   │   │   └── Image Grid (from Storage)
│   │   │
│   │   ├── Prayer Request
│   │   │   └── Prayer Form
│   │   │
│   │   ├── Testimonials
│   │   │   ├── Testimonial List
│   │   │   └── Submit Testimonial Form
│   │   │
│   │   ├── Contact
│   │   │   └── Contact Form
│   │   │
│   │   └── Donations
│   │
│   └── Footer
│       ├── Contact Info
│       ├── Social Links
│       └── Copyright
│
└── Admin Layout (Protected)
    │
    ├── Admin Navbar
    │
    ├── Admin Routes
    │   ├── Dashboard
    │   ├── Manage Events
    │   │   ├── Event List
    │   │   └── Event Form (Add/Edit)
    │   │
    │   ├── Manage Prayers
    │   │   └── Prayer List
    │   │
    │   ├── Manage Testimonials
    │   │   └── Testimonial Approval List
    │   │
    │   ├── Manage Gallery
    │   │   ├── Image Upload
    │   │   └── Image Grid
    │   │
    │   └── Settings
    │
    └── Login Page (unprotected)
```

---

**Last Updated:** December 26, 2025
