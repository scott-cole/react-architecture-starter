# React Architecture Starter

An opinionated, production-ready frontend architecture starter for building scalable React applications. This project demonstrates best practices and patterns for modern React development.

## 🚀 Quick Start

### Windows Users

**Easiest method** - Double-click `quick-start.bat` file to automatically install and run!

**Or using PowerShell/CMD:**
```powershell
npm install --legacy-peer-deps
npm run dev
```
Then open **http://localhost:5173** in your browser.

**Note**: The dev server runs with `--host` flag for WSL compatibility.

**Detailed instructions:** See [WINDOWS_SETUP.md](./WINDOWS_SETUP.md)

### macOS/Linux Users

```bash
npm install --legacy-peer-deps
npm run dev
```

## 🚀 Features

- **Scalable Structure** - Feature-based architecture with clear separation of concerns
- **API Layer** - Abstraction with Axios and React Query for data fetching
- **Authentication** - Complete auth system with context, hooks, and state management
- **Testing** - Comprehensive testing setup with Vitest, React Testing Library, and Playwright
- **Storybook** - Component documentation and development environment
- **Performance** - Code splitting, lazy loading, memoization, and optimization patterns
- **CI/CD** - GitHub Actions workflows for automated testing and deployment
- **Type Safety** - Full TypeScript support with strict configuration
- **Styling** - Tailwind CSS for utility-first styling

## 📁 Project Structure

```
src/
├── app/                    # App-level configuration and providers
├── components/             # Reusable UI components
│   ├── ui/                # Base UI components (Button, Card, etc.)
│   ├── layout/            # Layout components
│   └── common/            # Common shared components
├── features/              # Feature-based modules
│   ├── auth/             # Authentication feature
│   ├── dashboard/        # Dashboard feature
│   └── [feature-name]/   # Other features
├── lib/                   # Utility functions and helpers
├── hooks/                 # Custom React hooks
├── services/              # API services and data fetching
├── stores/                # State management (Zustand)
├── types/                 # TypeScript type definitions
├── test/                  # Test utilities and mocks
├── styles/                # Global styles
├── assets/                # Static assets
└── stories/               # Storybook stories
```

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **State Management**: Zustand
- **Data Fetching**: TanStack Query (React Query)
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **Styling**: Tailwind CSS
- **Testing**: Vitest, React Testing Library, Playwright
- **Component Docs**: Storybook
- **Linting**: ESLint
- **CI/CD**: GitHub Actions

## 📦 Installation

### Prerequisites

- Node.js 18 or higher
- npm, yarn, or pnpm

### Windows Users (Recommended)

If you're on Windows, use PowerShell or Command Prompt (not WSL):

```powershell
# Clone the repository
git clone https://github.com/scott-cole/react-architecture-starter.git
cd react-architecture-starter

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

Then open http://localhost:5173 in your browser.

### macOS/Linux Users

```bash
# Clone the repository
git clone https://github.com/scott-cole/react-architecture-starter.git
cd react-architecture-starter

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

**Note**: The `--legacy-peer-deps` flag is used to resolve peer dependency conflicts with Storybook packages.

## 🎯 Available Scripts

```bash
# Development
npm run dev              # Start dev server

# Building
npm run build           # Build for production
npm run preview         # Preview production build

# Code Quality
npm run lint            # Run ESLint
npm run typecheck       # Run TypeScript type checking

# Testing
npm run test            # Run tests in watch mode
npm run test:ui         # Run tests with UI
npm run test:run        # Run tests once
npm run test:coverage   # Run tests with coverage

# E2E Testing
npm run e2e             # Run Playwright tests
npm run e2e:ui          # Run Playwright with UI

# Storybook
npm run storybook       # Start Storybook dev server
npm run build-storybook # Build Storybook for production
```

## 🏗️ Architecture Patterns

### Feature-Based Structure

The codebase is organized by features rather than file types. Each feature contains all related components, hooks, services, and types.

```typescript
// Example feature structure
features/
  auth/
    Login.tsx          # Component
    Register.tsx       # Component
    useAuth.ts         # Hook
    authService.ts     # Service
    types.ts           # Types
```

### API Layer

A centralized API client with interceptors for authentication and error handling.

```typescript
// services/apiClient.ts
export const apiClient = new ApiClient()

// Example service
export const userService = {
  getUsers: (params) => apiClient.get('/users', params),
  getUser: (id) => apiClient.get(`/users/${id}`),
  // ...
}
```

### Custom Hooks for Data Fetching

React Query hooks with consistent error handling and caching.

```typescript
export function useUsers(params) {
  return useApiQuery(['users', params], () => userService.getUsers(params))
}
```

### Authentication System

Complete auth implementation with:
- Zustand store for state management
- Context and custom hooks for auth operations
- Protected route components
- Token management and refresh logic

### Performance Optimization

- **Code Splitting**: Route-based and manual chunk splitting in Vite config
- **Lazy Loading**: Components loaded on demand with React.lazy
- **Memoization**: React.memo for expensive components
- **Caching**: React Query with intelligent stale-time management
- **Throttle/Debounce**: Custom hooks for performance optimization

## 🧪 Testing

### Unit Tests

```bash
npm run test
```

Tests are located alongside components using the `__tests__` directory pattern.

```typescript
// components/ui/__tests__/Button.test.tsx
describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })
})
```

### E2E Tests

```bash
npm run e2e
```

Playwright tests are located in the `e2e` directory.

```typescript
// e2e/auth.spec.ts
test('should navigate to dashboard on successful login', async ({ page }) => {
  await page.goto('/login')
  await page.fill('input[type="email"]', 'test@example.com')
  await page.fill('input[type="password"]', 'password123')
  await page.getByRole('button', { name: 'Sign In' }).click()
  await expect(page).toHaveURL('/dashboard')
})
```

## 📖 Storybook

```bash
npm run storybook
```

Interactive component documentation with stories for all UI components.

## 🔄 CI/CD

The project includes GitHub Actions workflows for:

- **Linting**: ESLint on every push
- **Type Checking**: TypeScript validation
- **Testing**: Unit tests with coverage reporting
- **E2E Testing**: Playwright tests on Chrome, Firefox, and Safari
- **Build**: Production build validation
- **Storybook Deployment**: Automatic deployment to GitHub Pages

## 🎨 Styling

Tailwind CSS is used for styling with a custom configuration in `tailwind.config.ts`.

```typescript
// Example utility function
import { cn } from '@/lib/utils'

<div className={cn('base-class', isActive && 'active-class')} />
```

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=https://your-api.com/api
```

## 📝 Best Practices

1. **Feature-based organization**: Group related code by feature
2. **Type safety**: Leverage TypeScript for all components and functions
3. **Custom hooks**: Extract logic into reusable hooks
4. **Error boundaries**: Implement error boundaries for better UX
5. **Performance**: Use memoization and code splitting strategically
6. **Testing**: Write tests for all critical paths
7. **Documentation**: Keep Storybook stories updated

## 🚢 Deployment

The project is ready for deployment to various platforms:

- **Vercel**: Connect your repository and deploy
- **Netlify**: Connect and deploy with build command `npm run build`
- **GitHub Pages**: Use the provided workflow for deployment

## 🤝 Contributing

This starter is designed to be forked and customized for your projects. Feel free to:
- Add new features following the established patterns
- Modify the architecture to fit your needs
- Improve documentation
- Report issues or suggest improvements

## 📄 License

MIT License - feel free to use this starter for your projects.

## 🙏 Acknowledgments

Built with modern best practices and patterns from the React community. Inspired by various architecture guides and production applications.

---

**Note**: This starter is opinionated and reflects specific architectural decisions. Feel free to adapt it to your team's preferences and requirements.
