import {useDispatch, useSelector} from "react-redux";
import {
    getChangePageAttributeAction,
    getChangePageChildAction,
    getChangeSchemaAction,
    getDelectPageChildAction
} from "../redux/action";
import {useCallback, useState} from "react";

// 自定义 hooks 把重复的事情 集合起来 schema 传数据 取数据 统一管理
export const useStore = (index) => {
    const [num,setNum] = useState();
    const dispatch = useDispatch();
    const schema = useSelector((state) => state.homeManagePageReducer.schema);
    const pageChild = useSelector((state) => state.homeManagePageReducer.schema.children?.[index] || {});
    const changeSchema = useCallback((schema) => {
        dispatch(getChangeSchemaAction(schema));
        setNum(num+1);
    },[num,dispatch]);
    const changePageChild = (temp) => {
        dispatch(getChangePageChildAction(index, temp));
    };
    const removePageChild = () => {
        dispatch(getDelectPageChildAction(index));
    };
    const changePageAttribute = (key, value) => {
        dispatch(getChangePageAttributeAction(key, value));
    }
    return {schema,pageChild, changePageChild, removePageChild,changeSchema,changePageAttribute};
}
