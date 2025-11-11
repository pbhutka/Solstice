# 🌅 Solstice — A Full-Stack Social Media App (Backend by Me)

Solstice is a **Node.js + Express-based web app** that lets users share posts with images, titles, and captions — and interact through likes and saves.  
It includes **authentication, sessions, profile management, and secure CRUD operations** for both users and posts.

🧠 **Backend designed and implemented entirely by me.**  
🎨 **Frontend layout generated using AI** and integrated via **EJS templates** with **TailwindCSS** styling.

---

## 🚀 Core Features

### 👤 User System
- Sign up / Login with secure session handling  
- Update username, bio, gender, and profile picture  
- Change password or delete account permanently  

### 🖼️ Post Management
- Create and upload image posts  
- Add title and caption  
- Like and save posts  
- View saved and liked posts  

### 💡 Other Highlights
- Dark & light mode support  
- Flash message system for feedback  
- Middleware for authentication and route protection  
- Clean MVC-style Express structure  

---

## ⚙️ Tech Stack

| Layer | Technology |
|--------|-------------|
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB + Mongoose |
| **Frontend** | EJS Templates (AI-Generated), TailwindCSS |
| **Auth & Sessions** | express-session, connect-flash, bcrypt |
| **File Handling** | multer |
| **Environment Config** | dotenv |

---

## 📁 Folder Structure
solstice/
│
├── app.js                       # Main Express server setup
├── package.json                 # Dependencies and scripts
├── .env                         # Environment variables (not committed)
│
├── config/
│   └── mongoose-connect.js       # MongoDB connection configuration
│
├── models/
│   ├── userModel.js              # User schema (profile, auth, etc.)
│   └── postModel.js              # Post schema (image, caption, likes, etc.)
│
├── routes/
│   ├── indexRouter.js            # Landing and general routes
│   ├── userRouter.js             # User-related routes (auth, profile, settings)
│   └── postRouter.js             # Post-related routes (CRUD, likes, saves)
│
├── middleware/
│   └── authMiddleware.js         # Authentication and access control
│
├── public/
│   ├── images/
│   │   └── uploads/              # User-uploaded images
│   ├── css/                      # Custom styles (if any)
│   ├── js/                       # Client-side scripts
│   └── favicon.ico               # App icon (optional)
│
├── views/
│   ├── partials/                 # Shared EJS components (navbars, footers, etc.)
│   ├── user/                     # User-specific pages (profile, settings, etc.)
│   ├── posts/                    # Post-related pages (feed, edit, view, etc.)
│   └── index.ejs                 # Landing / Login page
│
└── README.md                     # Project documentation


