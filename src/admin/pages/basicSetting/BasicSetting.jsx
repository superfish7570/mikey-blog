import React, {useCallback} from 'react';
import styles from './style.module.scss';
import {Button, Input} from 'antd';
import {parseJsonByString} from "../../../utils/paresJsonByString";
import request from "../../../utils/service";
import {useStore} from "../../hook/useStore";

export const BasicSetting = () => {
    // 折叠 收缩
    const {changePageAttribute, schema = {}, changeSchema} = useStore();
    const {attributes = {}} = schema;
    const {title = ''} = attributes;

    // 保存 数据存到数据库
    const handleSaveButtonClick = () => {
        request.post('/api/schema/save', {
            schema: JSON.stringify(schema),
        }).then(() => {
        })
    }
    // 重置还原 最开始的想法是当你点击 Reset 方法的时候, 你需要做的只是 调用一下 resetSchema的方法就好了, 至于怎么重置交给子组件来决定
    // 最后思考
    const handleResetButtonClick = () => {
        // 先获取最新的 schema
        request.get('/api/schema/getLatestOne').then((response) => {
            const data = response?.data;
            data && changeSchema(parseJsonByString(data.schema,{}));
        });
    }
    // 标题改变
    const handleTitleChange = useCallback((e) => {
        changePageAttribute('title', e.target.value);
    }, [changePageAttribute]);
    return (
        <div>
            <div className={styles.row}>
                <div className={styles.title}>页面标题</div>
                <div className={styles.content}>
                    <Input value={title} onChange={handleTitleChange}/>
                </div>
            </div>
            <div className={styles.buttons}>
                <Button type='primary' onClick={handleSaveButtonClick}>保存基础配置</Button>
                <Button type='primary' className={styles.reset} onClick={handleResetButtonClick}>重置基础配置</Button>
            </div>
        </div>
    );
};
