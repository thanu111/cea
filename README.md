# Career & Education Admission Software

A comprehensive platform connecting students with educational opportunities and career guidance.

## Features

### Student Module
- User registration/login (email & social login)
- Career guidance test
- Personalized career recommendations
- Course finder with advanced filters
- College finder
- Bookmark system
- Mentor consultation booking

### Mentor Module
- Secure mentor portal
- Student test results access
- Query management
- Session scheduling
- Personalized guidance

### Admin Module
- College and course management
- Mentor approval system
- Analytics dashboard
- System monitoring

## Tech Stack

### Frontend
- React.js
- Material-UI
- Redux Toolkit
- React Router
- Axios

### Backend
- Node.js
- Express.js
- JWT Authentication
- PostgreSQL
- Sequelize ORM

### DevOps
- Docker
- GitHub Actions
- AWS (for production)

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- PostgreSQL (v13 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Set up environment variables:
```bash
# Backend (.env)
cp .env.example .env
# Edit .env with your configuration

# Frontend (.env)
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development servers:
```bash
# Start backend server
cd backend
npm run dev

# Start frontend server
cd frontend
npm start
```

## Project Structure

```
├── frontend/               # React frontend application
├── backend/               # Node.js backend application
├── docs/                  # Documentation
└── docker/               # Docker configuration files
```

## API Documentation

API documentation is available at `/api-docs` when running the backend server.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 