import React from 'react';
import styles from './style.module.scss';
import {Input, Button} from "antd";

export const List = (props) => {
    const {children = [], changeChildren} = props;
    // 增加列表项
    const addItemToChildren = () => {
        const newChildren = [...children];
        newChildren.push({
            name: 'Item',
            attributes: {title: '', description: '', imageUrl: '', link: ''},
            children: []
        });
        changeChildren(newChildren);
    }
    // 删除列表项
    const deleteItemFromChildren = (index) => {
        const newChildren = [...children];
        newChildren.splice(index, 1);
        changeChildren(newChildren);
    }
    // 改列表内容
    const changeChildrenItem = (index, key, value) => {
        const originItem = children[index];
        const item = {...originItem};
        item.attributes[key] = value;
        const newChildren = [...children]
        newChildren.splice(index, 1, item);
        changeChildren(newChildren);
    }

    return (
        <div className={styles.wrapper}>
            <Button type='primary' className={styles.button} onClick={addItemToChildren}>新增列表项</Button>
            {children.map(({attributes: {title, description, imageUrl, link}}, index) =>
                <div className={styles.area} key={index}>
                    <div className={styles.delete} onClick={() => deleteItemFromChildren(index)}>X</div>
                    <div className={styles.row}>
                        <span className={styles.label}>标题</span>
                        <Input
                            className={styles.content}
                            value={title}
                            placeholder='请输入标题'
                            onChange={(e) => {
                                changeChildrenItem(index, 'title', e.target.value)
                            }}
                        />
                    </div>
                    <div className={styles.row}>
                        <span className={styles.label}>描述</span>
                        <Input
                            className={styles.content}
                            value={description}
                            placeholder='请输入描述'
                            onChange={(e) => {
                                changeChildrenItem(index, 'description', e.target.value)
                            }}
                        />
                    </div>
                    <div className={styles.row}>
                        <span className={styles.label}>图片</span>
                        <Input
                            className={styles.content}
                            value={imageUrl}
                            placeholder='请输入图片地址'
                            onChange={(e) => {
                                changeChildrenItem(index, 'imageUrl', e.target.value)
                            }}
                        />
                    </div>
                    <div className={styles.row}>
                        <span className={styles.label}>链接</span>
                        <Input
                            className={styles.content}
                            value={link}
                            placeholder='请输入跳转链接'
                            onChange={(e) => {
                                changeChildrenItem(index, 'link', e.target.value)
                            }}
                        />
                    </div>
                </div>)}
        </div>
    )
}