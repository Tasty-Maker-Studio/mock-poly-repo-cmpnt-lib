import * as React from 'react';
import Image from 'next/image';
import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@tms/styled-system/css';
import { Box, Center } from '@tms/styled-system/jsx';
import {
  ImageToggleProps,
  ImageToggle
} from '../../../src/ImageToggle/ImageToggle';

type ImageSrc = {
  imgSrc: string;
};
const images = [
  {
    imgSrc:
      'https://images.unsplash.com/photo-1611510338559-2f463335092c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxzaG9lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=601'
  },
  {
    imgSrc:
      'https://images.unsplash.com/photo-1651055183233-13e372fbfe51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHxhaXIlMjBqb3JkYW4lMjBuaWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=601'
  }
];

const getImages = (imageList: any[]) => {
  return imageList.map((image, index) => (
    <Image
      key={index}
      width={0}
      height={0}
      className={css({
        width: '100%',
        height: '100%'
      })}
      src={image.imgSrc}
      objectFit={'cover'}
      alt="this is an image"
    />
  ));
};

const meta = {
  title: 'Design System/Disclosures/ImageToggle',
  component: ImageToggle,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: React.Children
    }
  }
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof ImageToggle>;

type Story = StoryObj<typeof ImageToggle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (props: ImageToggleProps) => (
  <Box w={'500px'}>
    <ImageToggle>{props.children}</ImageToggle>
  </Box>
);

const ImageToggleStory: Story = {
  render: () => <Template children={getImages(images)} />
};

export { ImageToggleStory};
export default meta;
