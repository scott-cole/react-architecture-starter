import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is the card content.</p>
        </CardContent>
      </>
    ),
  },
}

export const WithActions: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Product Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">This product is amazing and you should buy it!</p>
          <div className="flex gap-2">
            <Button size="sm">Buy Now</Button>
            <Button variant="outline" size="sm">Learn More</Button>
          </div>
        </CardContent>
      </>
    ),
  },
}

export const LongContent: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Article Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="mb-4">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <Button variant="outline" size="sm">Read More</Button>
        </CardContent>
      </>
    ),
  },
}
