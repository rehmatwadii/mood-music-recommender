# Mood Music Recommender - Dockerized Microservices Application

## Description
Mood Music Recommender is a microservices-based web application that suggests music playlists based on the user's mood. It consists of a React frontend and a Node.js backend API, with MongoDB as the database. The application is fully containerized using Docker, demonstrating Docker's power in microservices architecture, networking, volumes, and image optimization.

## Architecture Overview
- **Frontend Service:** React app serving the user interface on port 3000.
- **Backend Service:** Node.js API providing endpoints for music recommendations on port 5000.
- **Database Service:** MongoDB container storing user data and music metadata.

The services communicate over a custom Docker network named `app-network`.

### Diagram
```
[Frontend (React)] <--> [Backend (Node.js API)] <--> [MongoDB Database]
```

## Tech Stack
- Frontend: React, Node.js
- Backend: Node.js, Express, Mongoose
- Database: MongoDB
- Docker for containerization

## Setup and Run Instructions

### Step 1: Clone the Repository
```bash
git clone https://github.com/rehmatwadii/mood-music-recommender.git
cd mood-music-recommender
```

### Step 2: Create Docker Network
```bash
docker network create app-network
```

### Step 3: Build Docker Images
```bash
docker build -t rehmatwadi/mood-frontend:v1 ./frontend
docker build -t rehmatwadi/mood-backend:v1 ./backend
```

### Step 4: Run MongoDB Container
```bash
docker volume create mongo-data
docker run -d --name mongo-container --network app-network -v mongo-data:/data/db mongo
```

### Step 5: Run Backend Container
```bash
docker run -d --name backend-container --network app-network -p 5000:5000 rehmatwadi/mood-backend:v1
```

### Step 6: Run Frontend Container
```bash
docker run -d --name frontend-container --network app-network -p 3000:80 rehmatwadi/mood-frontend:v1
```

### Step 7: Access the Application
Open your browser and go to: `http://localhost:3000`

## Creative Enhancement
To demonstrate Docker's capabilities, a **health check** was implemented in the backend Dockerfile to monitor service status. The backend container restarts automatically if unhealthy, improving robustness. Additionally, custom Docker volumes are used for persistent MongoDB data storage.

## Docker Hub Repositories
- [https://hub.docker.com/repository/docker/rehmatwadi/mood-frontend](https://hub.docker.com/repository/docker/rehmatwadi/mood-frontend)
- [https://hub.docker.com/repository/docker/rehmatwadi/mood-backend](https://hub.docker.com/repository/docker/rehmatwadi/mood-backend)

## Screenshots
*(Add screenshots or logs here showing the app running successfully.)*