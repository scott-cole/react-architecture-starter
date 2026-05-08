# Contributing to React Architecture Starter

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## How to Contribute

### Reporting Issues

Before creating an issue, please search existing issues to avoid duplicates. When creating an issue, include:
- Clear description of the problem
- Steps to reproduce
- Expected behavior
- Environment details (OS, Node version, etc.)

### Pull Requests

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes following the code style guidelines
4. Write/update tests for your changes
5. Ensure all tests pass (`npm run test:run`)
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

### Code Style Guidelines

- Follow the existing code structure and patterns
- Use TypeScript for all new code
- Write tests for new features and bug fixes
- Update documentation when needed
- Run linting before committing (`npm run lint`)
- Run type checking before committing (`npm run typecheck`)

### Project Structure

- Add new features under `src/features/`
- Create reusable components in `src/components/`
- Add custom hooks in `src/hooks/`
- Create services in `src/services/`
- Update types in `src/types/`

### Testing

- Unit tests should be in `__tests__` directories alongside components
- E2E tests go in the `e2e` directory
- Ensure tests cover critical paths and edge cases
- Maintain test coverage above 80%

### Documentation

- Update README.md for significant changes
- Add Storybook stories for new components
- Update inline comments for complex logic
- Keep documentation clear and concise

## Development Workflow

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test

# Run linting
npm run lint

# Type check
npm run typecheck
```

## Questions?

Feel free to open an issue for questions or discussion about the project.
