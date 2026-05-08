import { memo, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  value: string | number
  change?: string
  trend?: 'up' | 'down' | 'neutral'
}

const StatCard = memo(({ title, value, change, trend = 'neutral', className, ...props }: StatCardProps) => {
  const trendColors = {
    up: 'text-green-600',
    down: 'text-red-600',
    neutral: 'text-gray-600',
  }

  return (
    <div className={cn('rounded-lg border border-gray-200 bg-white p-6', className)} {...props}>
      <h3 className="text-sm font-medium text-gray-600">{title}</h3>
      <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
      {change && (
        <p className={cn('mt-2 text-sm', trendColors[trend])}>{change}</p>
      )}
    </div>
  )
})

StatCard.displayName = 'StatCard'

export default StatCard
