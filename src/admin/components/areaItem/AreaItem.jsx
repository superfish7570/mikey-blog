import React, {useState,useEffect} from 'react';
import styles from "./style.module.scss";
import {Button, Modal, Select} from "antd";
import {SortableElement} from "react-sortable-hoc";
import {Banner, List,Footer} from "./component";
import {cloneDeep} from 'lodash';
import {useStore} from "../../hook/useStore";

const {Option} = Select;
const map = {Banner, List, Footer};


export const AreaItem = SortableElement((props) => {
    // 取父组件数据 就是 AreaList 组件
    const {value:index} = props;
    const {pageChild, changePageChild, removePageChild} = useStore(index);
    // antd ui提供的
    const [isModalOpen, setIsModalOpen] = useState(false);
    // 控制临时弹窗
    const [tempPageChild, setTempPageChild] = useState(cloneDeep(pageChild));

    useEffect(() => {
        setTempPageChild(cloneDeep(pageChild));
    },[pageChild])

    // 展示
    const showModal = () => {
        setIsModalOpen(true);
    };

    // 确定
    const handleOkClick = () => {
        setIsModalOpen(false);
        changePageChild(tempPageChild);
    };

    // 取消
    const handleModalCancelClick = () => {
        setIsModalOpen(false);
        setTempPageChild(cloneDeep(pageChild));
    };

    // 改变
    const handleSelectChange = (value) => {
        setTempPageChild({name: value, attributes: {}, children: []});
    }

    // 给 AdminBanner 提供的方法
    const changeTempPageChildAttributes = (kvObj) => {
        const newTempPageChild = {...tempPageChild};
        for (let key in kvObj) {
            newTempPageChild.attributes[key] = kvObj[key];
        }
        setTempPageChild(newTempPageChild);
    }
    // 给 AdminList 提供的方法
    const changeTempPageChildChildren = (children) => {
        const newTempPageChild = {...tempPageChild};
            newTempPageChild.children= children;
        setTempPageChild(newTempPageChild);
    }
    //
    const getComponent = () => {
        const {name} = tempPageChild;
        const Component = map[name];
        return Component ? (<Component {...tempPageChild} changeAttributes ={changeTempPageChildAttributes}
                       changeChildren={changeTempPageChildChildren}/>) : null;
    }
    return (
        <div>
            <li className={styles.item}>
                <span className={styles.content} onClick={showModal}>
                    {pageChild.name ? pageChild.name + '组件' : '当前区块内容为空'}</span>
                <span className={styles.delete}>
                    <Button size='small' type='dashed' danger onClick={removePageChild}>删除</Button>
                </span>
                <Modal title="选择组件" open={isModalOpen} onOk={handleOkClick}
                       onCancel={handleModalCancelClick} bodyStyle={{maxHeight:600,overflowY:'scroll'}}>
                    <Select value={tempPageChild.name} className={styles.select}
                            onChange={handleSelectChange}>
                        <Option value='Banner'>Banner 组件</Option>
                        <Option value='List'>List 组件</Option>
                        <Option value='Footer'>Footer 组件</Option>
                    </Select>
                    {getComponent()}
                </Modal>
            </li>
        </div>
    )
})
