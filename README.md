# 🚀 Do-Work Task Management App  

A **modern and responsive** task management application that allows users to create, update, and organize their tasks with **drag-and-drop functionality**. This project uses **React, TanStack Query, and Firebase** for authentication and data management.  

📌 **[Live Demo](https://do-workk.web.app/)** | 🌐 **[Backend API](https://do-work-task-management-server-express.vercel.app/)**  

---

## 🛠 Technologies Used  
- **Frontend:** React 19, Vite, Tailwind CSS, DaisyUI  
- **State Management:** TanStack React Query  
- **Drag & Drop:** `@hello-pangea/dnd`  
- **Authentication:** Firebase  
- **API Calls:** Axios  
- **Notifications & Alerts:** SweetAlert2  

---

## 📥 Installation & Setup  

### 🔹 Prerequisites  
- **Node.js** installed (>= v16 recommended)  
- **NPM or Yarn** installed  
- **Firebase Project** configured  

### 🔹 1. Clone the Repository  
```sh
git clone https://github.com/your-username/do-work-task-manager.git
cd do-work-task-manager
```
### 🔹 2. Install Dependencies
```sh
npm install
```
### 🔹 3. Set Up Environment Variables
Create a .env.local file in the root of your project and add:
```sh
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_firebase_auth_domain
VITE_projectId=your_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_firebase_messaging_sender_id
VITE_appId=your_firebase_app_id
VITE_server_link=https://do-work-task-management-server-express.vercel.app/

```

### 🔹 4. Start the Development Server
```sh
npm run dev
```

## 🚀 Usage Guide
- 1️⃣ Login/Register using Firebase authentication.
- 2️⃣ Add a task by clicking the "Add Task" button.
- 3️⃣ Drag & Drop tasks between columns to update their status.
- 4️⃣ Edit/Delete tasks by clicking on them.

## 📦 Dependencies
``` 
  "@hello-pangea/dnd": "^18.0.1",
  "@tanstack/react-query": "^5.66.9",
  "axios": "^1.7.9",
  "firebase": "^11.3.1",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-hook-form": "^7.54.2",
  "react-icons": "^5.5.0",
  "react-router-dom": "^7.2.0",
  "react-spinners": "^0.15.0",
  "sweetalert2": "^11.17.2"
```

## 🛠 Dev Dependencies

```
 "@types/react": "^19.0.10",
  "@types/react-dom": "^19.0.4",
  "@vitejs/plugin-react": "^4.3.4",
  "autoprefixer": "^10.4.20",
  "daisyui": "^4.12.23",
  "eslint": "^9.20.1",
  "eslint-plugin-react": "^7.37.4",
  "eslint-plugin-react-hooks": "^5.1.0",
  "eslint-plugin-react-refresh": "^0.4.19",
  "globals": "^16.0.0",
  "postcss": "^8.5.3",
  "tailwindcss": "^3.4.17",
  "vite": "^6.1.1"
```
