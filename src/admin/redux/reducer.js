import {produce,original} from 'immer';
import {
    CHANGE_SCHEMA,
    ADD_PAGE_CHILDREN,
    CHANGE_PAGE_CHILD,
    DELECT_PAGE_CHILD,
    CHANGE_PAGE_CHILD_POSITION,
    CHANGE_PAGE_ATTRIBUTE
} from "./constant";

const initialSchema = {
    name: 'page',
    attributes: {},
    children: []
};

const defaultState = {
    schema: initialSchema
};

export const homeManagePageReducer = (state = defaultState, action) => produce(state, (draft) => {
    switch (action.type) {
        // 改变 当前的 schema
        case CHANGE_SCHEMA:
            draft.schema = action.value;
            break;
        // 增加    page children
        case ADD_PAGE_CHILDREN:
            draft.schema.children.push(action.value);
            break;
        //  改变  就是把当前的删除 在回去之前的
        case CHANGE_PAGE_CHILD:
            draft.schema.children.splice(action.index, 1, action.value);
            break;
        // 删除 把当前的删除
        case DELECT_PAGE_CHILD:
            draft.schema.children.splice(action.index, 1);
            break;
        // 这里比较复杂 因为用到了 react-sortable-hoc 它提供了一个 oldIndex 还有 newIndex. 本质上来说我删除 老内容 添加新内容就好
        // 但是这里又用到了 immer 这个库 打印出来的结果就是 proxy类型的数据. 所以查了文档用 immer提供的 original 先拷贝一份你的children
        // 内容  再去删除children里面的内容 新内容我在添加 copy里的 [action.oldIndex]
        case CHANGE_PAGE_CHILD_POSITION:
            const copy = original(draft.schema.children);
            draft.schema.children.splice(action.oldIndex, 1);
            draft.schema.children.splice(action.newIndex, 0,copy[action.oldIndex]);
            break;
        case CHANGE_PAGE_ATTRIBUTE:
            draft.schema.attributes[action.key]=action.value;
            break
        default:
            break;
    }
})
