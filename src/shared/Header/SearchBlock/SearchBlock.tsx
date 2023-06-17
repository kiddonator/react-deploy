import React, { useEffect, useState } from 'react';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';
import axios from 'axios';
import { useToken } from '../../../hooks/useToken';

interface ISearchBlockProps {
  token : string;
}

interface IUserData { 
 name?: string,
 iconImg?: string;
}

export function SearchBlock({ token} : ISearchBlockProps) {
  const [data, setData] = useState<IUserData>({});
  const [tokenValue] = useToken(); // Используем хук useToken для получения значения токена


  useEffect(() => {
    axios
      .get('https://oauth.reddit.com/api/v1/me', {
        headers: { Authorization: `bearer ${tokenValue}` },
      })
      .then((resp) => {
        const userData = resp.data;
        setData({ name: userData.name, iconImg: userData.icon_img });
      });
  }, [tokenValue]);

  return (
    <div className={styles.searchblock}>
      <UserBlock/>
    </div>
  );
}
