import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {BasicSetting, HomeManagePage, Login} from "./pages";

import {Provider} from "react-redux";
import store from "./redux/store";

import './style.scss';
import "normalize.css";
import 'antd/dist/antd.css';

import styles from './style.module.scss';
import {Layout, Menu} from "antd";
import {parseJsonByString} from "../utils/paresJsonByString";
import {useStore} from "./hook/useStore";
import request from "../utils/service";
import {getLoginStatus,cleanLoginData} from "./utils/login";
import {AuthenticationClient} from "authing-js-sdk";

const authClient = new AuthenticationClient({
    appId: "63326c6fc50edca9bc452318",
});

const {Header, Sider, Content} = Layout;
// 自定义的hooks
const useCollapsed = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => setCollapsed(!collapsed);
    return {collapsed, toggleCollapsed};
}
const Wrapper = () => {
    const handleHomePage = () => window.location.href = '/';
    const {collapsed, toggleCollapsed} = useCollapsed();
    const {changeSchema} = useStore();
    const login = getLoginStatus();
    const photo = window.localStorage.photo;
    useEffect(() => {
        request.get('/api/schema/getLatestOne').then((res) => {
            const data = res?.data;
            data && changeSchema(parseJsonByString(data.schema, {}));
        })
    }, [changeSchema]);

    // 点击图片退出登录
    const handleLogout = () => {
        const user = authClient.getCurrentUser();
        if (!user) {
            alert("你还没有登录,请先登录");
        }
        authClient.logout();
        alert("登出成功");
        cleanLoginData();
        window.location.reload();
    }

    return login ? (
        <Router>
            <Layout>
                <Sider className={styles.sidebar} trigger={null} collapsible collapsed={collapsed}>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['adminHome']}>
                        <Menu.Item key='adminHome'>
                            <Link to='/'>
                                <span className='iconfont'>&#xe821;首页内容管理</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key='adminSetting'>
                            <Link to='/setting'>
                                <span className='iconfont'>&#xe821;基础内容配置</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key='adminBack' onClick={handleHomePage}>
                            <span className='iconfont'>&#xe629;返回用户页面</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className={styles.header}>
                        {collapsed ?
                            <span className='iconfont' onClick={toggleCollapsed}>&#xe62c;</span>
                            : <span className='iconfont' onClick={toggleCollapsed}>&#xe62a;</span>
                        }
                        <img className={styles.avatar} src={photo} alt='avatar' onClick={handleLogout}/>
                    </Header>
                    <Content className={styles.content}>
                        <Switch>
                            <Route exact path='/' component={HomeManagePage}></Route>
                            <Route exact path='/setting' component={BasicSetting}></Route>
                            <Route></Route>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </Router>
    ) : <Login/>
}


ReactDOM.render(
    <Provider store={store}>
        <Wrapper/>
    </Provider>,
    document.getElementById('root')
);

