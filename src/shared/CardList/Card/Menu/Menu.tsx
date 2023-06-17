import React from 'react';
import styles from './menu.css';
import { MenuIcon } from '../../../icons';
import { Dropdown } from '../../../Dropdown';
import { Text } from '../../../Text'; 
import { MenuItemsList } from './MenuItemsList';

export function Menu() {
  return (
    <Dropdown
      button={
        <button className={styles.menuButton}>
          <MenuIcon />
        </button>
      }
    >
      <div className={styles.dropdown}>
        <MenuItemsList postId='522'/>
        <button className={styles.closeButton}>
          <Text mobileSize={12} size={14} color="gray66">Закрыть</Text>
        </button>
      </div>
    </Dropdown>
  );
} 