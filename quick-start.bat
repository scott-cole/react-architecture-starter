@echo off
echo ========================================
echo React Architecture Starter - Quick Start
echo ========================================
echo.

REM Check if node is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org
    echo.
    pause
    exit /b 1
)

echo [✓] Node.js found
node --version
echo npm --version
echo.

REM Check if node_modules exists
if not exist "node_modules\" (
    echo Installing dependencies...
    echo This may take a few minutes...
    echo.
    call npm install --legacy-peer-deps
    
    if %errorlevel% neq 0 (
        echo.
        echo ERROR: Installation failed
        echo Please check the error messages above
        echo.
        pause
        exit /b 1
    )
    
    echo.
    echo [✓] Dependencies installed successfully
) else (
    echo [✓] Dependencies already installed
)
echo.

REM Start development server
echo Starting development server...
echo.
echo The app will be available at: http://localhost:5173
echo Press Ctrl+C to stop the server
echo.
echo ========================================
echo.

call npm run dev
