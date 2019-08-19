import * as React from 'react';

export interface AvatarProps {
  alt?: string;
  childrenClassName?: string;
  imgProps?: React.HtmlHTMLAttributes<HTMLImageElement>;
  sizes?: string;
  src?: string;
  srcSet?: string;
}

declare const Avatar: React.ComponentType<AvatarProps>;

export default Avatar;
