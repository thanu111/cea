# Project Structure

```
career-education-admission/
├── frontend/                      # React frontend application
│   ├── public/                   # Static files
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   └── assets/
│   │       └── images/
│   ├── src/
│   │   ├── components/          # Reusable components
│   │   │   ├── common/         # Shared components
│   │   │   │   ├── Button/
│   │   │   │   ├── Input/
│   │   │   │   ├── Card/
│   │   │   │   └── Modal/
│   │   │   ├── layout/         # Layout components
│   │   │   │   ├── Header/
│   │   │   │   ├── Footer/
│   │   │   │   ├── Sidebar/
│   │   │   │   └── Navigation/
│   │   │   └── modules/        # Feature-specific components
│   │   │       ├── student/
│   │   │       ├── mentor/
│   │   │       └── admin/
│   │   ├── pages/              # Page components
│   │   │   ├── auth/
│   │   │   ├── student/
│   │   │   ├── mentor/
│   │   │   └── admin/
│   │   ├── services/           # API services
│   │   │   ├── api.js
│   │   │   ├── auth.service.js
│   │   │   └── user.service.js
│   │   ├── store/              # Redux store
│   │   │   ├── slices/
│   │   │   └── index.js
│   │   ├── utils/              # Utility functions
│   │   ├── hooks/              # Custom hooks
│   │   ├── context/            # React context
│   │   ├── styles/             # Global styles
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .env
│
├── backend/                     # Node.js backend application
│   ├── src/
│   │   ├── config/             # Configuration files
│   │   │   ├── database.js
│   │   │   └── auth.js
│   │   ├── controllers/        # Route controllers
│   │   │   ├── auth.controller.js
│   │   │   ├── user.controller.js
│   │   │   ├── course.controller.js
│   │   │   └── college.controller.js
│   │   ├── models/            # Database models
│   │   │   ├── User.js
│   │   │   ├── Course.js
│   │   │   ├── College.js
│   │   │   └── Career.js
│   │   ├── routes/            # API routes
│   │   │   ├── auth.routes.js
│   │   │   ├── user.routes.js
│   │   │   ├── course.routes.js
│   │   │   └── college.routes.js
│   │   ├── middleware/        # Custom middleware
│   │   │   ├── auth.middleware.js
│   │   │   └── validation.middleware.js
│   │   ├── services/          # Business logic
│   │   │   ├── auth.service.js
│   │   │   └── user.service.js
│   │   ├── utils/            # Utility functions
│   │   │   ├── logger.js
│   │   │   └── helpers.js
│   │   └── app.js           # Express app setup
│   ├── tests/               # Test files
│   │   ├── unit/
│   │   └── integration/
│   ├── package.json
│   └── .env
│
├── docs/                    # Documentation
│   ├── api/
│   ├── setup/
│   └── architecture/
│
├── docker/                  # Docker configuration
│   ├── frontend/
│   │   └── Dockerfile
│   ├── backend/
│   │   └── Dockerfile
│   └── docker-compose.yml
│
├── .github/                 # GitHub configuration
│   └── workflows/          # GitHub Actions workflows
│
├── README.md
├── LICENSE
└── .gitignore
```

## Key Directories and Files Explanation

### Frontend Structure
- `components/`: Reusable UI components organized by feature and common elements
- `pages/`: Main page components for different user roles
- `services/`: API integration and service layer
- `store/`: Redux state management
- `utils/`: Helper functions and utilities
- `hooks/`: Custom React hooks
- `context/`: React context providers
- `styles/`: Global styles and theme configuration

### Backend Structure
- `config/`: Application configuration files
- `controllers/`: Request handlers and business logic
- `models/`: Database models and schemas
- `routes/`: API route definitions
- `middleware/`: Custom middleware functions
- `services/`: Business logic and service layer
- `utils/`: Helper functions and utilities
- `tests/`: Unit and integration tests

### Documentation
- `api/`: API documentation
- `setup/`: Setup and installation guides
- `architecture/`: System architecture documentation

### Docker
- Configuration files for containerization
- Separate Dockerfiles for frontend and backend
- Docker Compose for local development

### GitHub
- GitHub Actions workflows for CI/CD
- Issue templates and pull request templates 