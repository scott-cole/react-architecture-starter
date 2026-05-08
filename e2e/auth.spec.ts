import { test, expect } from '@playwright/test'

test.describe('Authentication', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login')
  })

  test('should display login form', async ({ page }) => {
    await expect(page.locator('input[type="email"]')).toBeVisible()
    await expect(page.locator('input[type="password"]')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible()
  })

  test('should show validation error with empty credentials', async ({ page }) => {
    await page.getByRole('button', { name: 'Sign In' }).click()
    
    await expect(page.locator('input[type="email"]')).toBeFocused()
  })

  test('should navigate to dashboard on successful login', async ({ page }) => {
    await page.fill('input[type="email"]', 'test@example.com')
    await page.fill('input[type="password"]', 'password123')
    
    await page.getByRole('button', { name: 'Sign In' }).click()
    
    await expect(page).toHaveURL('/dashboard')
    await expect(page.getByText('Dashboard')).toBeVisible()
  })
})

test.describe('Dashboard', () => {
  test('should display dashboard cards', async ({ page }) => {
    await page.goto('/dashboard')
    
    await expect(page.getByText('Welcome!')).toBeVisible()
    await expect(page.getByText('Features')).toBeVisible()
    await expect(page.getByText('Getting Started')).toBeVisible()
  })
})
