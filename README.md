# Mahendra's Portfolio

A modern, full-stack portfolio application built with the MERN stack. Features a unique terminal-inspired interface with glassmorphism and neon accents.

## Tech Stack
- **Frontend**: React, Vite, CSS Modules
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Communication**: REST API

## Features
- **Terminal UI**: Interactive command-line interface simulation.
- **Glassmorphism**: Modern "Dark Glass" and "Light Glass" themes.
- **Radial Skills Menu**: Auto-rotating Ferris Wheel UI for showcasing skills.
- **Contact Form**: Fully functional email integration.
- **Live Resume**: Downloadable PDF resume.

## Setup

1.  **Install Dependencies**
    ```bash
    cd client && npm install
    cd ../server && npm install
    ```

2.  **Environment Variables**
    Create a `.env` file in `server/`:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_uri
    EMAIL_USER=your_email@gmail.com
    EMAIL_PASS=your_app_password
    ```

3.  **Run Development Servers**
    Open two terminals:
    ```bash
    # Client
    cd client && npm run dev

    # Server
    cd server && npm run dev
    ```

## Customization
- **Themes**: Edit `client/src/index.css` for global variables.
- **Content**: Update `client/src/resume.json` for personal data.
