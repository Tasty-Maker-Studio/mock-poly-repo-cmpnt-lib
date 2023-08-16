import { type ReactNode } from 'react';
import {
  styled,
  type HTMLStyledProps
} from '@tms/styled-system/jsx';
import {
  text,
  type TextVariantProps
} from '@tms/styled-system/recipes';

type TextContentProps = {
  children?: ReactNode | undefined;
};

export type TextProps = TextVariantProps &
  TextContentProps &
  HTMLStyledProps<'p'>;

export const Text = (props: TextProps) => {
  const { size, children, ...rest } = props;
  return (
    <styled.p {...rest} className={text({ size })} data-scope="p">
      {children}
    </styled.p>
  );
};
