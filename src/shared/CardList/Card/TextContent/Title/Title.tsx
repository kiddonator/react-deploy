import React, {useState} from 'react';
import styles from './title.css';
import { Post } from '../../../../Post';

export function Title() {

  const [isModalOpend, setIsModalOpened] = useState(false)

  return (
<h2 className={styles.title}>
        <a href="#post-url" className={styles.postLink} onClick={() => { setIsModalOpened(true); }}>
          свечи на соевом воске, ручная работа. ароматы: ваниль, базилик и так далее
        </a>
        {isModalOpend && (
          <Post onClose={() => { setIsModalOpened(false)}} />
        )}
      </h2>
  );
}
