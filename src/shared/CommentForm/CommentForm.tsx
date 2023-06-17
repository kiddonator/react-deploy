import React, { ChangeEvent, useState, FormEvent } from 'react';
import styles from './commentform.css';



export function CommentForm() { 
  const [value, setValue] = useState('');
  function handleChange(event: ChangeEvent<HTMLTextAreaElement>){
    setValue(event.target.value)
}
function handleSubmit(event: FormEvent){
  event.preventDefault();
}
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} value={value} onChange={handleChange}/>
      <button type="submit" className={styles.button}>Комментировать</button>
    </form>
  );
}
