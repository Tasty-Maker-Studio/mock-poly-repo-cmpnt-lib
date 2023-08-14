import * as react_jsx_runtime from 'react/jsx-runtime';
import { HTMLStyledProps } from '@tms/styled-system/jsx';
import { ButtonVariantProps, TextVariantProps } from '@tms/styled-system/recipes';
import React, { ReactNode } from 'react';
import { Preset } from '@pandacss/types';

type ButtonProps = ButtonVariantProps & HTMLStyledProps<'button'> & HTMLStyledProps<'a'>;
/**
 * Button component definition
 *
 * @param props:ButtonProps  The props for the Button component
 * @param props.variant      The variant of the button (primary, secondary,
 *                           tertiary, accent, info, danger, link, icon, outline)
 * @param props.shape        The shape of the button (rounded, square)
 * @param props.children     The children of the button, can be text or JSX
 * @param rest               The rest of the passed in props for the button
 *                             component  (e.g. onClick, onMouseOver, etc.)
 *
 * @returns React.Element     The Button component JSX element
 */
declare const Button: (props: ButtonProps) => react_jsx_runtime.JSX.Element;

type TextContentProps = {
    children?: ReactNode | undefined;
};
type TextProps = TextVariantProps & TextContentProps & HTMLStyledProps<'p'>;
declare const Text: (props: TextProps) => react_jsx_runtime.JSX.Element;

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
declare const SplashSection: (props: SplashSectionProps) => react_jsx_runtime.JSX.Element;

type ImageRevealType = {
    children: React.ReactNode;
};
/** This component provide a way to shuffle between to image on a mouse enter  */
declare const ImageToggle: (props: ImageRevealType) => react_jsx_runtime.JSX.Element;

declare const tmsPandaPreset: Preset;

export { Button, ButtonProps, ImageRevealType, ImageToggle, SplashSection, SplashSectionProps, Text, TextProps, tmsPandaPreset };
