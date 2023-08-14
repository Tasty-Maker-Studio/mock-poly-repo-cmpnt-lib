import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from '../../../src';

const Comments: string = require('../../assets/comments.svg').default;

// Configure metadata for the story view
const meta = {
  title: 'Design System/Forms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

// Individual stories use this template for rendering the button variants
const Template = (props: ButtonProps) => {
  const { title, variant, shape, fill, children, ...rest } = props;
  return (
    <div
      style={{
        fontFamily: '"Nunito Sans","Helvetica Neue",Helvetica,Arial,sans-serif'
      }}
    >
      <h2>{title}</h2>
      {variant === 'icon' || fill === 'outline' ? (
        <div className="button-backdrop-separate">
          <Button variant={variant} shape={shape} fill={fill} {...rest}>
            {children}
          </Button>
        </div>
      ) : (
        <p>
          <Button variant={variant} shape={shape} fill={fill} {...rest}>
            {children}
          </Button>
        </p>
      )}
    </div>
  );
};

// Stories for each button variant

const PrimarySquareSolid: Story = {
  render: () => (
    <Template variant="primary" title="Primary Square Solid Button">
      Button
    </Template>
  )
};

const SecondarySquareSolid: Story = {
  render: () => (
    <Template variant="secondary" title="Secondary Square Solid Button">
      Button
    </Template>
  )
};

const TertiarySquareSolid: Story = {
  render: () => (
    <Template variant="tertiary" title="Tertiary Square Solid Button">
      Button
    </Template>
  )
};


const PrimarySquareOutline: Story = {
  render: () => (
    <Template
      variant="primary"
      fill="outline"
      title="Primary Square Outline Button"
    >
      Button
    </Template>
  )
};

const SecondarySquareOutline: Story = {
  render: () => (
    <Template
      variant="secondary"
      fill="outline"
      title="Secondary Square Outline Button"
    >
      Button
    </Template>
  )
};


const PrimaryRoundedOutline: Story = {
  render: () => (
    <Template
      variant="primary"
      shape="rounded"
      fill="outline"
      title="Primary Rounded Outline Button"
    >
      Button
    </Template>
  )
};

const SecondaryRoundedOutline: Story = {
  render: () => (
    <Template
      variant="secondary"
      shape="rounded"
      fill="outline"
      title="Secondary Rounded Outline Button"
    >
      Button
    </Template>
  )
};


export {
  PrimarySquareSolid,
  SecondarySquareSolid,
  TertiarySquareSolid,
  PrimarySquareOutline,
  SecondarySquareOutline,
  PrimaryRoundedOutline,
  SecondaryRoundedOutline
};

export default meta;
