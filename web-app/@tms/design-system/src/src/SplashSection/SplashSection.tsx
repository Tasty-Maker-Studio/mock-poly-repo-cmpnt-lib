import React from 'react';
import { Box } from '@tms/styled-system/jsx';

import { Text } from '../Text';

// Merging div props with SplashSectionProps
type SplashSectionProps = {
  title: string;
  splashImageNode: React.ReactNode | React.ReactFragment;
  buttonNode: React.ReactNode;
};

/**
 * SplashSection component definition - Handles the display of the splash image
 * some text and a button to explore a part of the site. To be displayed within the
 * home page component
 *
 * @param props: SplashSectionProps - The props for the component
 * @param props.title: string - The title text to display
 * @param props.splashImageNode: React.ReactNode - The splash image element Next or Remix
 * @param props.buttonNode : React.ReactNode - The button element which has state
 *
 * @returns SplashSection component: React.FC<SplashSectionProps>
 */
const SplashSection = (props: SplashSectionProps) => {
  const { title, splashImageNode, buttonNode } = props;
  return (
    <Box>
      {splashImageNode}
      <Box position="absolute" bottom="0" width="98%">
        <Box
          padding="3rem"
          position="relative"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          fontFamily='"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif'
        >
          <Box>
            <Text color="#222" fontWeight="bold" fontSize="20px">
              {title}
            </Text>
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="center">
            {buttonNode}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

// exporting the SplashSection component and the types for the props
export { SplashSection, type SplashSectionProps };
