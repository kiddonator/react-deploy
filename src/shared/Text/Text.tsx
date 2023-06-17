
import React from 'react';
import styles from './text.css';

export type EColor = "black" | "orange" | "green" | "white" | "grayF4" | "grayF3" | "grayD9" | "grayC4" | "gray99" | "gray66";

interface TextProps {
  children: React.ReactNode;
  mobileSize?: number;
  size?: number;
  color?: EColor | string;
}

const Text: React.FC<TextProps> = ({ children, mobileSize, size, color }) => {
  const textStyles = [
    mobileSize && styles[`m${mobileSize}`],
    size && styles[`s${size}`],
    color && styles[color],
  ].filter(Boolean);

  return <span className={textStyles.join(' ')}>{children}</span>;
};

export { Text, TextProps };