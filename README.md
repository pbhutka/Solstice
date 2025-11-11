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
├── app.js                      # Main Express server setup
├── package.json                # Dependencies and npm scripts
├── .env                        # Environment variables (not committed)
│
├── config/
│   └── mongoose-connect.js      # MongoDB connection configuration
│
├── models/
│   ├── userModel.js             # User schema (auth, profile, etc.)
│   └── postModel.js             # Post schema (image, caption, likes, etc.)
│
├── routes/
│   ├── indexRouter.js           # Main/index routes
│   ├── userRouter.js            # User-related routes (auth, profile, settings)
│   └── postRouter.js            # Post-related routes (CRUD, likes, saves)
│
├── middleware/
│   └── authMiddleware.js        # Route protection and user authentication
│
├── public/
│   ├── images/
│   │   └── uploads/             # User-uploaded images
│   ├── css/                     # Custom styles (if any)
│   ├── js/                      # Client-side scripts
│   └── favicon.ico              # App favicon (optional)
│
├── views/
│   ├── user/                    # User pages (profile, settings)
│   ├── posts/                   # Post pages (feed, view, edit)
│   └── index.ejs                # Landing/login page
│
└── README.md                    # Project documentation

