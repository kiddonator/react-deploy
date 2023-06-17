import React from 'react';
import styles from './Break.css';

const BreakStyles = {
  s4: styles.s4,
  s8: styles.s8,
  s12: styles.s12,
  s16: styles.s16,
  s20: styles.s20,
  inline: styles.inline,
  topS4: styles.topS4,
  topS8: styles.topS8,
  topS12: styles.topS12,
  topS16: styles.topS16,
  topS20: styles.topS20,
  mobileS4: styles.mobileS4,
  mobileS8: styles.mobileS8,
  mobileS12: styles.mobileS12,
  mobileS16: styles.mobileS16,
  mobileS20: styles.mobileS20,
  topMobileS4: styles.topMobileS4,
  topMobileS8: styles.topMobileS8,
  topMobileS12: styles.topMobileS12,
  topMobileS16: styles.topMobileS16,
  topMobileS20: styles.topMobileS20,
  tabletS4: styles.tabletS4,
  tabletS8: styles.tabletS8,
  tabletS12: styles.tabletS12,
  tabletS16: styles.tabletS16,
  tabletS20: styles.tabletS20,
  topTabletS4: styles.topTabletS4,
  topTabletS8: styles.topTabletS8,
  topTabletS12: styles.topTabletS12,
  topTabletS16: styles.topTabletS16,
  topTabletS20: styles.topTabletS20,
  desktopS4: styles.desktopS4,
  desktopS8: styles.desktopS8,
  desktopS12: styles.desktopS12,
  desktopS16: styles.desktopS16,
  desktopS20: styles.desktopS20,
  topDesktopS4: styles.topDesktopS4,
  topDesktopS8: styles.topDesktopS8,
  topDesktopS12: styles.topDesktopS12,
  topDesktopS16: styles.topDesktopS16,
  topDesktopS20: styles.topDesktopS20,
};

function Break({ size }) {
  const breakStyle = BreakStyles[`s${size}`];

  return <div className={breakStyle} />;
}

export { Break, BreakStyles };