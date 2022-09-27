import React, {useState, forwardRef, useImperativeHandle} from 'react';
import styles from './style.module.scss';
import {Input} from "antd";

const {TextArea} = Input;

export const PageSetting = forwardRef((props, ref) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    // 标题
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }
    // 页面描述
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }
    // ref 把标题 页面描述内容 保存 传递
    useImperativeHandle(ref, () => {
        return {title, description}
    })
    return (
        <div>
            <div className={styles.row}>
                <span className={styles.label}>页面标题</span>
                <Input value={title}
                       className={styles.content}
                       placeholder='请输入页面标题'
                       onChange={handleTitleChange}
                />
            </div>
            <div className={styles.row}>
                <span className={styles.label}>页面描述</span>
                <TextArea value={description}
                          className={styles.content}
                          rows={2} placeholder='请输入页面描述'
                          onChange={handleDescriptionChange}
                />
            </div>
        </div>
    )
})