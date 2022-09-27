// 封装的 解析方法
export const parseJsonByString = (str, defaultValue) => {
    let returnValue = defaultValue;
    try {
        returnValue = JSON.parse(str);
    } catch (e) {
    }
    return returnValue;
}