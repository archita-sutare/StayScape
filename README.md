# StayScape 🏡

**StayScape – Discover Your Perfect Stay!**

StayScape is an Airbnb-inspired web application where users can explore different properties, view listing details, create their own listings, and share their experiences through reviews.

The project is developed using the MERN-related web technologies with Node.js, Express.js, MongoDB, and EJS.

## ✨ Features

- User registration and login authentication.
- Create, view, edit, and delete property listings.
- Upload property images using Cloudinary.
- Add and delete reviews for listings.
- Search listings by title, country, and location.
- Filter properties by categories.
- Display property locations using Mapbox.
- Responsive user interface.

## 🛠️ Technologies Used

**Frontend:**
- HTML
- CSS
- JavaScript
- Bootstrap
- EJS

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB
- Mongoose

**Other Tools & Services:**
- Cloudinary – Image storage
- Mapbox – Geocoding and maps
- Passport.js – User authentication
- Git & GitHub – Version control

## 📂 Project Structure

```text
StayScape/
│
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── utils/
├── init/
├── app.js
├── middleware.js
├── cloudConfig.js
├── schema.js
├── package.json
└── .gitignore
```

## ⚙️ Installation and Setup

1. Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

2. Navigate to the project directory:

```bash
cd StayScape
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory and configure your environment variables:

```env
MONGO_URL=your_mongodb_atlas_connection_string
MAP_TOKEN=your_mapbox_token
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

5. Start the application:

```bash
node app.js
```

6. Open your browser:

```text
http://localhost:8080
```

## 🔐 Environment Variables

Keep your `.env` file private. Never upload database passwords, API keys, or other secret credentials to GitHub.

## 🎯 Project Objective

The main objective of StayScape is to develop a full-stack web application that provides an easy platform for users to discover and manage property listings while learning practical web development concepts.

## 👩‍💻 Developer

**Archita Sutare**

Computer Engineering Student

---

⭐ If you find this project interesting, feel free to explore the repository!
