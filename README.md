# Expense Tracker Backend

## Setup
1. `cd expense-tracker-backend`
2. `npm install`
3. `npm run dev` (or `npm start`)

Server runs on https://expense-tracker-front-wheat.vercel.app/

## API Endpoints
- POST /api/signup — { email, password, name }
- POST /api/login — { email, password }
- GET /api/features/:email
- POST /api/features — { name, userEmail }
- PUT /api/features/:id — { name }
- DELETE /api/features/:id
- GET /api/expenses/:email
- POST /api/expenses — { title, amount, category, date, userEmail }
- PUT /api/expenses/:id
- DELETE /api/expenses/:id
