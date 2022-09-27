import React, {useState, useEffect} from 'react';
import {parseJsonByString} from "../../../utils/paresJsonByString";
import {Banner, Footer, List} from "../../components";
import {Helmet} from "react-helmet";
import request from "../../../utils/service";
const map = {Footer, Banner, List};

const render = (index, item) => {
    const Component = map[item.name];
    return Component ? <Component key={index} schema={item}/> : null;
}

export const HomePage = () => {
    const [pageSchema, setPageSchema] = useState({});
    const {children = [], attributes = {}} = pageSchema;
    // 副作用,在数据库取东西
    useEffect(() => {
        request.get('/api/schema/getLatestOne').then((res) => {
            const data = res?.data;
            data && setPageSchema(parseJsonByString(data.schema,{}));
        });
    }, [])

    return (
        <div>
            <Helmet>
                <title> {attributes?.title || ''} </title>
            </Helmet>
            {children.map((item, index) => render(index, item))}
        </div>
    );
}
