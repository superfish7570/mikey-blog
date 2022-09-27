import React from 'react';
import styles from './style.module.scss';
import {Button, Input} from "antd";

export const Footer = (props) => {
    // 增加列表项
    // 删除列表项
    // 改列表内容
    const {attributes = {}, changeAttributes, children = [], changeChildren} = props, {copyright, record} = attributes,
        addItemToChildren = () => {
            const newChildren = [...children];
            newChildren.push({
                name: 'Item',
                attributes: {title: '', link: ''},
                children: []
            });
            changeChildren(newChildren);
        }, deleteItemFromChildren = (index) => {
            const newChildren = [...children];
            newChildren.splice(index, 1);
            changeChildren(newChildren);
        }, changeChildrenItem = (index, key, value) => {
            const originItem = children[index];
            const item = {...originItem};
            item.attributes[key] = value;
            const newChildren = [...children]
            newChildren.splice(index, 1, item);
            changeChildren(newChildren);
        };

    return (
        <div className={styles.wrapper}>
            <div className={styles.row}>
                <span className={styles.label}>版权信息</span>
                <Input
                    className={styles.content}
                    value={copyright}
                    placeholder='请输入版权信息'
                    onChange={(e) => {
                        changeAttributes({copyright: e.target.value})
                    }}/>
            </div>
            <div className={styles.row}>
                <span className={styles.label}>备案信息</span>
                <Input
                    className={styles.content}
                    value={record}
                    placeholder='请输入备案信息'
                    onChange={(e) => {
                        changeAttributes({record: e.target.value})
                    }}/>
            </div>
            <Button type='primary' className={styles.button} onClick={addItemToChildren}>新增列表项</Button>
            {children.map(({attributes: {title,link}}, index) =>
                <div className={styles.area} key={index}>
                    <div className={styles.delete} onClick={() => deleteItemFromChildren(index)}>X</div>
                    <div className={styles['area-row']}>
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
                    <div className={styles['area-row']}>
                        <span className={styles.label}>链接</span>
                        <Input
                            className={styles.content}
                            value={link}
                            placeholder='请输入链接'
                            onChange={(e) => {
                                changeChildrenItem(index, 'link', e.target.value)
                            }}
                        />
                    </div>
                </div>)}
        </div>
    )
}