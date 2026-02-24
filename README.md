# Mixtape-me

A nostalgic web application that leverages Spotify's Web API to showcase your top tracks in a retro 90s mixtape format. Share your musical taste with friends in style!

## 📝 Overview

In today's modern era, music is readily available online; you can play whatever you want whenever you want it. But it wasn't the case back then in the 90's before platforms like Spotify were invented. Music enthusiasts had to go to a record store or a CD store, go through each aisle to find their favorite songs and artists.

Mixtape-me aims to recreate that experience of walking through the doors of a record store, looking at CD covers and store walls with colorful albums, memorabilia, and photos, transferring the same experience in a digital form and sharing your mixtape with your friends! Using Spotify's technology, it has never been easier to find out who you listen to the most all year round, last 6 months, or even this year.

## 🎵 Features

As a user you can:
- Log in with your Spotify account
- Access your top 5 tracks displayed as a retro mixtape
- Choose from "Last month", "Last 6 months", and "All time" top tracks
- Download your mixtape as an image to share with friends

## 🚀 Technology Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript
- **APIs**: Spotify Web API
- **Authentication**: OAuth 2.0
- **Image Generation**: dom-to-image

## 📋 Prerequisites

- Node.js (v14.0.0 or higher)
- A Spotify account
- Spotify Developer API credentials

## 🛠️ Installation

1. Clone the repository:
   ```
   git clone https://github.com/applescan/Mixtape-me.git
   cd Mixtape-me
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the application:
   ```
   npm start
   ```

4. For local development:
   - Edit `src/config/config.js` to change the redirect URI to: `http://localhost:3003/callback`
   - Run `npm run dev` for automatic restarts during development
   - Access the application at `http://localhost:3003`

## 📁 Project Structure

```
mixtape-me/
│
├── server.js               # Application entry point
├── package.json            # Project dependencies and scripts
├── Procfile                # Heroku deployment configuration
│
├── src/
│   ├── app.js              # Express application setup
│   │
│   ├── config/             # Application configuration
│   │   └── config.js       # Environment variables and settings
│   │
│   ├── controllers/        # Request handlers
│   │   ├── pageController.js
│   │   └── spotifyController.js
│   │
│   ├── routes/             # Express routes
│   │   ├── auth.js         # Authentication routes
│   │   ├── index.js        # Route index
│   │   └── pages.js        # Static page routes
│   │
│   ├── utils/              # Utility functions
│   │   └── helpers.js
│   │
│   ├── public/             # Static files
│   │   ├── css/            # Stylesheets
│   │   ├── images/         # Images and icons
│   │   └── js/             # Client-side JavaScript
│   │       ├── auth.js     # Authentication handling
│   │       ├── display.js  # UI rendering
│   │       ├── main.js     # Main entry point
│   │       ├── screenshot.js # Image capture functionality
│   │       └── spotify-api.js # Spotify API interactions
│   │
│   └── views/              # HTML templates
│       ├── about.html
│       ├── contact.html
│       ├── index.html
│       └── privacy.html
```

## 🌐 Live Demo

Visit [https://https://mixtape-me.vercel.app](https://https://mixtape-me.vercel.app) to access the live web application.

## 🔐 Privacy

- This application only requests read access to your Spotify account data
- No user data is stored on our servers
- Your listening history is only displayed to you during your active session

## 👩‍💻 Author

- **Felicia Fel** - [Portfolio](https://felicia-portfolio.netlify.app/)

## 📄 License

This project is licensed under the ISC License.
