# Firebase Setup Guide for CSLM Church Website

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Add project"
3. Enter project name: `cslm-church`
4. Enable Google Analytics (optional)
5. Click "Create project"

## Step 2: Add Web App

1. In Firebase Console, click the web icon `</>`
2. Register app name: `CSLM Church Website`
3. Click "Register app"
4. Copy the Firebase configuration object

## Step 3: Configure Environment Variables

1. In your project root, create a `.env` file
2. Add your Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

**IMPORTANT:** Never commit the `.env` file to Git! It's already in `.gitignore`.

## Step 4: Enable Firestore Database

1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Start in **production mode** (we'll update rules later)
4. Choose your preferred location (e.g., `us-central`)
5. Click "Enable"

## Step 5: Set Up Firestore Collections

The following collections will be created automatically when you submit forms:

### Collections Structure:

#### `contacts`
- name (string)
- email (string)
- subject (string)
- message (string)
- createdAt (timestamp)

#### `prayers`
- name (string)
- email (string)
- request (string)
- anonymous (boolean)
- isAnswered (boolean)
- createdAt (timestamp)

#### `testimonials`
- name (string)
- email (string)
- testimony (string)
- isApproved (boolean)
- createdAt (timestamp)

#### `events` (for future use)
- title (string)
- description (string)
- date (timestamp)
- location (string)
- imageUrl (string)
- isActive (boolean)
- createdAt (timestamp)

#### `gallery` (for future use)
- title (string)
- imageUrl (string)
- category (string)
- uploadedAt (timestamp)

## Step 6: Configure Firestore Security Rules

1. In Firebase Console, go to "Firestore Database" → "Rules"
2. Replace the default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Contacts: Anyone can write, authenticated users can read
    match /contacts/{contactId} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }

    // Prayer Requests: Anyone can write, authenticated users can read
    match /prayers/{prayerId} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }

    // Testimonials: Anyone can write, only approved ones are publicly readable
    match /testimonials/{testimonialId} {
      allow create: if true;
      allow read: if resource.data.isApproved == true || request.auth != null;
      allow update, delete: if request.auth != null;
    }

    // Events: Anyone can read active events, authenticated users can write
    match /events/{eventId} {
      allow read: if resource.data.isActive == true || request.auth != null;
      allow write: if request.auth != null;
    }

    // Gallery: Anyone can read, authenticated users can write
    match /gallery/{imageId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

3. Click "Publish"

## Step 7: Enable Authentication (for Admin Panel - Phase 4)

1. In Firebase Console, go to "Authentication"
2. Click "Get started"
3. Click on "Email/Password"
4. Enable "Email/Password"
5. Click "Save"

### Create First Admin User:

1. Go to "Authentication" → "Users" tab
2. Click "Add user"
3. Enter email: `admin@christsuccessfullife.org`
4. Enter a strong password
5. Click "Add user"

**Save these credentials securely!**

## Step 8: Enable Firebase Storage (for Gallery - Phase 4)

1. In Firebase Console, go to "Storage"
2. Click "Get started"
3. Start in **production mode**
4. Choose same location as Firestore
5. Click "Done"

### Storage Security Rules:

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

## Step 9: Test Your Setup

1. Run `npm run dev` to start your development server
2. Submit a contact form
3. Check Firebase Console → Firestore Database
4. You should see a new document in the `contacts` collection

## Step 10: Deploy to Firebase Hosting (Phase 5)

1. Install Firebase CLI globally:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase in your project:
   ```bash
   firebase init
   ```
   - Select: Hosting
   - Select your project: `cslm-church`
   - Public directory: `dist`
   - Single-page app: Yes
   - GitHub auto-deploys: No (for now)

4. Build your project:
   ```bash
   npm run build
   ```

5. Deploy to Firebase:
   ```bash
   firebase deploy
   ```

6. Your site will be live at: `https://cslm-church.web.app`

## Troubleshooting

### Issue: "Permission denied" errors
**Solution:** Check your Firestore security rules are published correctly

### Issue: Forms not submitting
**Solution:**
1. Check browser console for errors
2. Verify `.env` file has correct Firebase config
3. Make sure Firestore is enabled in Firebase Console

### Issue: "Firebase not defined" error
**Solution:** Make sure you've added your Firebase config to `.env` file

## Next Steps

- ✅ Phase 1: Project Setup - COMPLETE
- ✅ Phase 2: Public Pages - COMPLETE
- ✅ Phase 3: Firebase Integration - IN PROGRESS
- ⏳ Phase 4: Admin Dashboard
- ⏳ Phase 5: Deployment

---

**Last Updated:** December 26, 2025
