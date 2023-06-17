import React, { useEffect, useRef } from 'react';
import styles from './post.css';
import ReactDOM from 'react-dom';
import { CommentForm } from '../CommentForm';

interface IPost{
  onClose?: () => void;
}

export function Post(props : IPost) {
const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent){
      if (event.target instanceof Node && !ref.current?.contains(event.target))
      {
        props.onClose?.()
      }
    }

    document.addEventListener ('click',handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);
  
  const node = document.querySelector('#modal_root');
  if (!node) return null;

  return ReactDOM.createPortal( (
        <div className={styles.modal} ref ={ref}>
          <h2> Название товара</h2>
          <div className={styles.content}>
            <p>some discriptions</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus fugiat consequatur minima officiis explicabo vel, temporibus eius quod doloribus obcaecati iste ducimus et! Quaerat sed optio veniam maiores enim minima.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis molestiae harum velit iure aliquid, nesciunt placeat repellendus minima expedita magnam debitis quidem praesentium atque culpa alias explicabo pariatur. Architecto, explicabo!</p>
          </div>
          <CommentForm/>
        </div>
), node);
  
}
