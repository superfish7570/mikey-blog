import React from 'react';
import styles from './style.module.scss';
import {Button} from "antd";
import {AreaItem} from "../areaItem";
import {useDispatch, useSelector} from "react-redux";
import {getAddPageChildrenAction,getChangePageChildPositionAction} from "../../redux/action";
import {SortableContainer} from "react-sortable-hoc";

const SortableList = SortableContainer(({list}) => {
    return (
        <ul className={styles.list}>
            {list.map((item, index) => (
                <AreaItem key={index} index={index} value={index}/>
            ))}
        </ul>
    )
});

export const AreaList = () => {
    const dispatch = useDispatch();
    const children = useSelector((state) => state.homeManagePageReducer.schema?.children || []);
    // 增加
    const addPageChildren = () => {
        dispatch(getAddPageChildrenAction())
    }

    // 根据 react-sortable-hoc 官网操作
    const onSortEnd = ({oldIndex,newIndex}) => {
        dispatch(getChangePageChildPositionAction(oldIndex, newIndex));
    }

    return (
        <div>
            <SortableList distance={5} lockAxis='y' list={children} onSortEnd={onSortEnd} />
            <Button type='primary' ghost onClick={addPageChildren}>新增区块按钮</Button>
        </div>
    )
}