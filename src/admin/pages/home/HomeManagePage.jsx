import React from 'react';
import styles from './style.module.scss';
import {Button} from 'antd';
import {AreaList} from "../../components";
import {parseJsonByString} from "../../../utils/paresJsonByString";
import request from "../../../utils/service";
import {useStore} from "../../hook/useStore";

export const HomeManagePage = () => {
    const {changeSchema, schema} = useStore();
    // 保存到数据库 post接口
    const handleSaveButtonClick = () => {
        request.post('/api/schema/save', {
            schema: JSON.stringify(schema),
        }).then(() => {
        })
    }
    // 重置还原
    const handleResetButtonClick = () => {
        request.get('/api/schema/getLatestOne').then((res) => {
            const data = res?.data;
            data && changeSchema(parseJsonByString(data.schema,{}));
        })
    }

    return (
        <div>
            <AreaList/>
            <div className={styles.buttons}>
                <Button type='primary' onClick={handleSaveButtonClick}>保存区块配置</Button>
                <Button type='primary' className={styles.reset} onClick={handleResetButtonClick}>重置区块配置</Button>
            </div>
        </div>
    );
};
