import { Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import LoadingSpinner from './components/common/LoadingSpinner'

const Dashboard = lazy(() => import('./features/dashboard/Dashboard'))
const Login = lazy(() => import('./features/auth/Login'))

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  )
}

export default App
