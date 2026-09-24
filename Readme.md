# LunaAI 🤖

### AI-Powered Interview Preparation Platform

LunaAI is an AI-powered interview preparation platform designed to help candidates practice realistic interviews, improve their communication and technical skills, and understand their performance through AI-driven feedback.

The platform generates personalized interview questions based on the candidate's **role, experience, skills, projects, and resume**, conducts an interactive interview, and provides a detailed performance report at the end.

---

## 🚀 Features

* 🤖 **AI-Generated Interview Questions**

  * Personalized questions based on the selected job role and experience.
  * Supports HR and Technical interview modes.

* 📄 **Resume-Based Interview Preparation**

  * Upload your resume and use it as context for generating relevant interview questions.

* 🎙️ **Voice-Based Interviews**

  * Practice answering questions through voice input for a more realistic interview experience.

* 🧠 **AI-Powered Feedback**

  * Analyze answers and receive feedback on interview performance.
  * Evaluation includes correctness, communication, confidence, and overall response quality.

* 📊 **Performance Reports**

  * View final scores and question-wise performance.
  * Identify strengths and areas that need improvement.

* 📚 **Interview History**

  * Keep track of previous interviews and review your performance.

* 📥 **PDF Report Download**

  * Generate and download the complete interview performance report as a PDF.
  * Includes overall score, question-wise evaluation, feedback, and performance metrics.
  * Useful for saving and reviewing interview results offline.

* 🔐 **Authentication**

  * Google authentication using Firebase.
  * JWT-based authentication and protected backend routes.

* 💳 **Credit-Based Interview System**

  * Users receive interview credits to generate and conduct AI interviews.
  * Multiple pricing plans are available.

* 💰 **Razorpay Integration**

  * Secure online payment through Razorpay.
  * Automatic credit updates after successful payment verification.

* 📱 **Responsive UI**

  * Designed to work across desktop, tablet, and mobile devices.

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Motion
* React Router
* Redux Toolkit
* Axios
* Firebase Authentication
* React Icons

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* Cookie Parser
* Multer
* PDF.js

### AI & APIs

* OpenRouter
* OpenAI-compatible LLM APIs
* Firebase Authentication

### Payments

* Razorpay

---

## 🏗️ Project Architecture

```text
LunaAI
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── redux/
│   │   ├── utils/
│   │   └── config/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## 🔄 How It Works

```text
User
  │
  ▼
Select Interview Type
  │
  ├── Role
  ├── Experience
  ├── Skills
  ├── Projects
  └── Resume
        │
        ▼
   AI Question Generation
        │
        ▼
   Interactive Interview
        │
        ├── Voice Input
        └── Answer Evaluation
                │
                ▼
        AI Performance Analysis
                │
                ▼
          Detailed Report
```

---

## 💳 Pricing & Credits

LunaAI uses a credit-based system for AI interviews.

| Plan         | Price | Credits |
| ------------ | ----: | ------: |
| Free         |    ₹0 |     100 |
| Starter Pack |  ₹100 |     150 |
| Pro Pack     |  ₹500 |     650 |

Users can purchase additional credits through **Razorpay** and receive the credits after successful payment verification.

---

## 🔐 Authentication Flow

The application uses Firebase for Google authentication and JWT for maintaining authenticated sessions.

```text
Google Sign-In
      │
      ▼
Firebase Authentication
      │
      ▼
Backend Authentication API
      │
      ▼
JWT Token
      │
      ▼
HTTP-Only Cookie
      │
      ▼
Protected API Routes
```

---

## ⚙️ Environment Variables

### Frontend

Create a `.env` file inside the frontend directory:

```env
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
VITE_SERVER_URL=http://localhost:8000
```

### Backend

Create a `.env` file inside the backend directory:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

> Never commit your `.env` file or API keys to GitHub.

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/luna-ai.git

cd luna-ai
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Install frontend dependencies

```bash
cd ../frontend
npm install
```

### 4. Configure environment variables

Create the required `.env` files in both `frontend` and `backend` directories.

### 5. Start the backend

```bash
cd backend
npm run dev
```

### 6. Start the frontend

```bash
cd frontend
npm run dev
```

The application will then be available on the Vite development server.

---

## 🧩 Core Modules

### Interview Module

Handles:

* Interview configuration
* Question generation
* Interview sessions
* Answer submission
* AI evaluation
* Final scoring
* Performance reports

### Resume Module

Handles resume uploads and extracts resume content that can be used as context for personalized interview generation.

### Payment Module

Handles:

* Razorpay order creation
* Payment checkout
* Payment verification
* Credit allocation
* Transaction-related validation

### User Module

Handles:

* User authentication
* User profile
* Available credits
* Interview history

---

## 📊 Performance Evaluation

Interview responses can be evaluated across multiple dimensions:

* **Correctness**
* **Communication**
* **Confidence**
* **Answer Quality**
* **Overall Performance**

The results are presented through a structured performance report to help candidates identify areas for improvement.

---

## 🔮 Future Improvements

* Real-time AI voice conversation
* Advanced resume-to-job-description matching
* Job description-based interview generation
* Personalized preparation plans
* Skill progression tracking
* More detailed analytics
* Interview difficulty customization
* Multiple AI model support
* Improved speech analysis
* Deployment with production-grade infrastructure

---

## 🎯 Goal

The goal of LunaAI is to make interview preparation more **personalized, interactive, and accessible** by combining AI, voice-based practice, resume analysis, and performance analytics in a single platform.

---

## 👨‍💻 Developer

**Vijay Singh Khetwal**

Computer Science Engineering
Full-Stack Developer | MERN Stack | JavaScript | C++

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.
