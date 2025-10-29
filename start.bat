@echo off
echo Starting FocusFlow Application...
echo.

echo Setting up Backend...
cd backend
if not exist .env (
    echo Creating .env file from example...
    copy env.example .env
    echo Please edit backend/.env with your MongoDB URI and JWT secret
)
echo Installing backend dependencies...
call npm install
echo Starting backend server...
start "FocusFlow Backend" cmd /k "npm run dev"

echo.
echo Setting up Frontend...
cd ..\frontend
echo Installing frontend dependencies...
call npm install
echo Starting frontend server...
start "FocusFlow Frontend" cmd /k "npm run dev"

echo.
echo FocusFlow is starting up!
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo.
pause
