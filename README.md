# Unsplash Image Search App (MERN + OAuth + Render Deployment)
A full-stack MERN web app that allows users to search for images using the Unsplash API.  
Includes authentication with Google, GitHub, and Facebook via Passport.js.  
Users can view top searches, maintain search history, and multi-select images.
## 🛠 Setup Instructions

# Clone the repo
```bash'''
git clone https://github.com/YourUsername/Unsplash-Image-Search-App.git
cd Unsplash-Image-Search-App

#Install Dependencies
cd server && npm install
cd client && npm install

#Create .env file in /server:
PORT=5000
MONGO_URI=your_mongo_connection_string_here
JWT_SECRET=your_jwt_secret_here
GOOGLE_CLIENT_ID=your_Client_ID
GOOGLE_CLIENT_SECRET=your_secret
GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback 
GITHUB_CLIENT_ID=your_Client_ID
GITHUB_CLIENT_SECRET=your_secret
GITHUB_CALLBACK_URL=http://localhost:5000/api/auth/github/callback
FACEBOOK_CLIENT_ID=your_Client_ID
FACEBOOK_CLIENT_SECRET=your_secret
FACEBOOK_CALLBACK_URL=http://localhost:5000/api/auth/facebook/callback

#Start servers
# Terminal 1 (Server)
cd server
npm run dev

# Terminal 2 (Client)
cd client
npm run dev

## 🔌 API Endpoints

### 1️⃣ Auth
**POST** `/api/auth/signup`
curl -X POST https://unsplash-image-search-app.onrender.com/api/auth/signup \
-H "Content-Type: application/json" \
-d '{"name":"John Doe","email":"john@example.com","password":"123456"}'

POST /api/auth/login
curl -X POST https://unsplash-image-search-app.onrender.com/api/auth/login \
-H "Content-Type: application/json" \
-d '{"email":"john@example.com","password":"123456"}'

GET /api/auth/google
➡️ Redirects to Google OAuth.

GET /api/search?q=nature
➡️ Returns Unsplash results for "nature".

GET /api/top-searches
➡️ Returns trending search keywords.
