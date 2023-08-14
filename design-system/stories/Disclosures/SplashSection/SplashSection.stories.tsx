import Image from 'next/image';
import Link from 'next/link';
import type { Meta, StoryObj } from '@storybook/react';

import { Button, SplashSection } from '../../../src';

// Storybook configuration
const meta: Meta = {
  title: 'Design System/Disclosures/SplashSection',
  component: SplashSection,
  tags: ['autodocs']
} satisfies Meta<typeof SplashSection>;

type Story = StoryObj<typeof SplashSection>;

const getImageNode = () => {
  const currentImageUrl =
    'https://burst.shopifycdn.com/photos/yellow-pillow-bedside-table.jpg?width=925&format=pjpg&exif=1&iptc=1';
  const imageAltText = 'splash image';
  return (
    <>
      <Image
        src={currentImageUrl}
        alt={imageAltText}
        fill={true}
        style={{
          aspectRatio: 'widescreen',
          position: 'absolute',
          top: '0px',
          left: '0px',
          objectFit: 'cover',
          objectPosition: 'center center',
          opacity: 1,
          transition: 'opacity 500ms ease 0s',
          overscrollBehavior: 'contain',
          overflowClipMargin: 'content-box',
          boxSizing: 'border-box',
          overflow: 'clip'
        }}
      />
    </>
  );
};

const getSplashButtonNode = () => {
  const exploreUrl = 'http://www.google.com';
  const exploreButtonText = 'Explore Products';
  return (
    <Button variant="accent" fill="outline">
      <Link
        href={exploreUrl}
        style={{
          color: 'white',
          textDecoration: 'none'
        }}
      >
        {exploreButtonText}
      </Link>
    </Button>
  );
};
const SplashSectionStory: Story = {
  render: () => (
    <SplashSection
      splashImageNode={getImageNode()}
      title="Crafted with spirit in mind"
      buttonNode={getSplashButtonNode()}
    />
  )
};

// exporting the SplashSectionStory, and meta as default
export { SplashSectionStory };
export default meta;
