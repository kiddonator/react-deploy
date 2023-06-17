import React from 'react';
import styles from './header.css';
import { SearchBlock } from './SearchBlock/SearchBlock';
import { ThreadTitle } from './ThreadTitle';
import { SortBox } from './SortBox';

interface IHeaderProps{
  token: string;
}

export function Header({token} : IHeaderProps) {
  return (
<header className={styles.header}>
  <SearchBlock token={token} />
  <ThreadTitle/>
  <SortBox/>
</header>
  );
}
