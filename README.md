# Hotel PMS - Property Management System

A comprehensive hotel management system built with modern web technologies.

## 🚀 Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd hotel-pms

# Start with Docker (recommended)
docker-compose up

# Or start individually
cd backend && npm install && npm run dev
cd frontend && npm install && npm run dev
```

Visit `http://localhost:3000` to access the application.

## 📚 Documentation

Complete documentation is available in the `docs/` directory:

- **[README](docs/hotel-pms-dev/README.md)** - Project overview
- **[SETUP](docs/hotel-pms-dev/SETUP.md)** - Installation guide
- **[API Documentation](docs/hotel-pms-dev/API.md)** - REST API reference
- **[Database Schema](docs/hotel-pms-dev/DATABASE.md)** - Database design
- **[Development Workflow](docs/hotel-pms-dev/DEVELOPMENT.md)** - Developer guide
- **[Sprint Backlog](docs/hotel-pms-scrum/SPRINT_BACKLOG.md)** - User stories

## 🛠️ Tech Stack

**Frontend**: React 18 + Vite + TailwindCSS  
**Backend**: Node.js + Express  
**Database**: PostgreSQL 15  
**Authentication**: JWT  
**DevOps**: Docker + Docker Compose

## 🔑 Demo Credentials

After running database seed:

```
Admin: admin@hotelpms.com / admin123
Front Desk: frontdesk@hotelpms.com / admin123
Housekeeping: housekeeping@hotelpms.com / admin123
```

⚠️ Change these credentials in production!

## 🏗️ Project Structure

```
hotel-pms/
├── backend/         # Express API
├── frontend/        # React app
├── docs/           # Documentation
│   ├── hotel-pms-dev/      # Developer docs
│   └── hotel-pms-scrum/    # Scrum artifacts
└── docker-compose.yml
```

## 🤝 Contributing

Please read [CONTRIBUTING.md](.github/CONTRIBUTING.md) for development workflow and guidelines.

## 📊 Current Sprint

**Sprint 0: Foundation & Setup** (Weeks 1-2)

✅ Project structure  
✅ Database schema  
✅ Authentication system  
✅ Developer documentation  
⏳ Frontend foundation  

See [Sprint Backlog](docs/hotel-pms-scrum/SPRINT_BACKLOG.md) for details.

## 📝 License

MIT License - see LICENSE file

## 👥 Team

- **Scrum Master**: [Name]
- **Product Owner**: [Name]
- **Developers**: [Names]

---

**Version**: 1.0.0-alpha  
**Last Updated**: 2025-02-18