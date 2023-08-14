import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '../../../src';

const meta = {
  title: 'Design System/Typography/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: ' default:  Welcome to the Tasty Maker Studio Design System'
  }
};

export const TextVariations: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--size-spacing-2)'
      }}
    >
      <Text size="7xl" color={'purple.500'}>
        "7xl" : Tasty Makers
      </Text>
      <Text size="6xl" bg={'green.100'} textAlign={'right'}>
        "6xl" :Tasty Makers
      </Text>
      <Text size="5xl">"5xl" :Tasty Makers</Text>
      <Text size="4xl" lineClamp={2}>
        "4xl with lineClamp" :Mark Twain once said, It is better to keep your
        mouth closed and let people think you are a fool than to open it and
        remove all doubt.{' '}
      </Text>
      <Text size="3xl">"3xl" :Tasty Makers</Text>
      <Text size="2xl">"2xl" :Tasty Makers</Text>
      <Text size="xl">"xl" :Tasty Makers</Text>
      <Text size="lg" bg={'blue.500'}>
        "lg" :Tasty Makers
      </Text>
      <Text size="md" fontStyle={'bold'}>
        "md" :Tasty Makers
      </Text>
      <Text size="sm" fontStyle={'italic'}>
        Tasty Makers
      </Text>
      <Text size="xs">Tasty Makers</Text>
    </div>
  )
};
