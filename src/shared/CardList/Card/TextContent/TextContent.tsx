import React from 'react';
import styles from './textcontent.css';
import { Title } from './Title';

export function TextContent() {
  return (
    <div ><div className={styles.metaData}>
      <div className={styles.userLink}>
        <img className={styles.avatar}
          src='https://i.pinimg.com/236x/6c/84/ec/6c84ec3585074b7a42ef15e8233593a1.jpg'
          alt='avatar' />
        <a href='#user-url' className={styles.username}> Мефодий Федоров</a>
      </div>

      <span className={styles.createdAt}>
        <span className={styles.publishedLabel}> опубликовано </span>
        час назад
      </span>
    </div>

    <Title/>
    
    </div>
  );
}
