import React from 'react';
import styles from './card.css';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { TextContent } from './TextContent';

export function Card() {
  return (
    <li className={styles.card}>
      <div className={styles.textContent} >
          <TextContent/>
        </div> 
      <div className={styles.preview} >
            <img className={styles.previewImg} src="https://i.pinimg.com/236x/2d/33/5b/2d335b2ea259fa4305b60e8bc81a36e8.jpg"  />
            </div>
          <div className={styles.previewImg} />
      <div className={styles.menu}>
        <Menu/>
        </div>
      <div className={styles.controls} >
        <Controls/>
          
       </div>
      
    </li>
  );
}
