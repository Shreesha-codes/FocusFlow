# FocusFlow - Cosmic Task Management

A beautiful, modern task management application with a cosmic purple theme built with React (Vite) and Node.js/Express.

## 🌟 Features

- **User Authentication**: Secure registration and login with JWT tokens
- **Task Management**: Create, read, update, and delete tasks
- **Beautiful UI**: Cosmic purple theme with glassmorphism design
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Updates**: Instant task updates without page refresh

## 🚀 Tech Stack

### Frontend
- React 18 with Vite
- React Router for navigation
- Axios for API calls
- Custom CSS with cosmic theme

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- CORS enabled

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Git

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd FocusFlow
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
MONGO_URI=mongodb://localhost:27017/focusflow
JWT_SECRET=your_jwt_secret_key_here_change_this_in_production
PORT=5000
```

Start the backend server:
```bash
npm run dev
# or
npm start
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup
```bash
cd frontend
npm install
```

Start the frontend development server:
```bash
npm run dev
# or
npm start
```

The frontend will run on `http://localhost:3000`

## 🎯 Usage

1. **Register**: Create a new account with your name, email, and password
2. **Login**: Sign in with your credentials
3. **Dashboard**: View your welcome screen and navigate to tasks
4. **Tasks**: 
   - Add new tasks by typing in the input field
   - Mark tasks as complete by clicking on them or the "Done" button
   - Delete tasks using the "Delete" button
   - All changes are saved automatically

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Tasks
- `GET /api/tasks` - Get all user tasks (protected)
- `POST /api/tasks` - Create new task (protected)
- `PUT /api/tasks/:id` - Update task (protected)
- `DELETE /api/tasks/:id` - Delete task (protected)

## 🎨 Design Features

- **Cosmic Theme**: Deep purple gradients with star effects
- **Glassmorphism**: Semi-transparent cards with blur effects
- **Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Subtle hover effects and transitions
- **Accessibility**: Proper contrast ratios and keyboard navigation

## 🛠️ Development

### Project Structure
```
FocusFlow/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── taskController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.js
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Tasks.jsx
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── vite.config.js
│   └── package.json
└── README.md
```

### Available Scripts

#### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

#### Frontend
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🔒 Security Features

- Password hashing with bcryptjs
- JWT token authentication
- Protected routes
- Input validation
- CORS configuration

## 🚀 Deployment

### Backend Deployment
1. Set up MongoDB Atlas or use a cloud MongoDB service
2. Update the `MONGO_URI` in your production environment
3. Set a strong `JWT_SECRET`
4. Deploy to platforms like Heroku, Railway, or Vercel

### Frontend Deployment
1. Run `npm run build` to create production build
2. Deploy the `dist` folder to platforms like Vercel, Netlify, or GitHub Pages
3. Update the API base URL in `frontend/src/api/axios.js` if needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🎉 Acknowledgments

- React team for the amazing framework
- Vite for the fast build tool
- Express.js for the robust backend
- MongoDB for the flexible database
- All the open source contributors

---

**FocusFlow** - Manage your tasks in the cosmic realm! 🌌
