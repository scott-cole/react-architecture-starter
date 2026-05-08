# Windows Installation Guide

## Quick Start for Windows Users

### Step 1: Open PowerShell or Command Prompt

**Right-click Start button** → Select **Windows PowerShell** or **Command Prompt**

### Step 2: Navigate to Project

```powershell
# Navigate to where you cloned the repository
cd C:\Users\YourUsername\react-architecture-starter

# Or if you haven't cloned yet:
git clone https://github.com/scott-cole/react-architecture-starter.git
cd react-architecture-starter
```

### Step 3: Install Dependencies

```powershell
npm install --legacy-peer-deps
```

**Why `--legacy-peer-deps`?**
This resolves peer dependency conflicts with Storybook packages. It's safe and commonly used in React projects.

### Step 4: Start Development Server

```powershell
npm run dev
```

### Step 5: Open in Browser

You'll see output like:
```
  VITE v5.2.0  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open **http://localhost:5173** in your browser.

## Troubleshooting

### Node.js Not Found

If you get "node is not recognized":
1. Download Node.js from https://nodejs.org (LTS version)
2. Install it
3. Restart your terminal

### Port Already in Use

If you get "port 5173 is already in use":
```powershell
# Find and kill the process
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

Or use a different port:
```powershell
npm run dev -- --port 3000
```

### Permission Errors

If you get permission errors:
```powershell
# Run PowerShell as Administrator
# Right-click PowerShell → "Run as administrator"
```

## Available Commands

```powershell
npm run dev              # Start development server
npm run build           # Build for production
npm run preview         # Preview production build
npm run lint            # Run linter
npm run typecheck       # Type check
npm run test            # Run tests
npm run storybook       # Start Storybook
```

## What You'll See

When you open the app, you'll see:
1. **Dashboard** - Main application view
2. **Authentication** - Login/Register flow
3. **Example Components** - Button, Card components
4. **Responsive Design** - Works on mobile and desktop

## Next Steps

1. Explore the codebase structure
2. Check out `/src/features/` for feature modules
3. Look at `/src/components/` for reusable components
4. Review `/src/services/` for API integration
5. Read the full [README.md](./README.md) for detailed documentation

## Getting Help

- Documentation: See [README.md](./README.md)
- Issues: Report on GitHub Issues
- Architecture: See [SETUP_SUMMARY.md](./SETUP_SUMMARY.md)
