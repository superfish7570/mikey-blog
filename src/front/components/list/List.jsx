import React from 'react';
import styles from './style.module.scss';

export const List = ({schema}) => {
    const {children = []} = schema;
    return (
        <div className='wrapper'>
            <ul className={styles.list}>
                {children.map((item, index) => {
                    const {attributes = {}} = item;
                    const {title,description,link,imageUrl} = attributes;
                    return (
                        <li className={styles.item} key={index}>
                            <a className={styles.link} href={link} target='_blank' rel='noreferrer'>
                                <img className={styles.img}
                                     src={imageUrl}
                                     alt={title}/>
                                <h4 className={styles.title}>{title || '暂无标题'}</h4>
                                <p className={styles.desc}>{description || '暂无描述'}</p>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
