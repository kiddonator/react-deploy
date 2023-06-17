import React from 'react';
import styles from './userblock.css';
import { Text, EColor } from '../../../Text';
import { IconAnon } from '../../../icons';
import { Break } from '../../../Break/Break';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
}

export function UserBlock({avatarSrc, username }: IUserBlockProps) {
  return (

    <a 
    href='https://www.reddit.com/api/v1/authorize?client_id=Hz4tfzJLcgYTkDCxUh2Smw&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity'
     className={styles.userBox}>
  <div className={styles.userBox}>
   <div className={styles.avatarBox}>
    {avatarSrc 
    ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage} />
    : <IconAnon />
    }
  </div>
  
   <div className={styles.username}>
    <Break size={12}/>
    <Text size={20} color={username ? "black" : "gray99"}> {username || 'Аноним'} </Text>
    </div>
  </div>
  </a>
  )}
  ;
