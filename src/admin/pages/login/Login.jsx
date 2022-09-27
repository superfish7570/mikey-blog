import React from 'react';
import styles from './style.module.scss';
import {Guard} from "@authing/react-ui-components";
import "@authing/react-ui-components/lib/index.min.css";
import {setLoginData} from "../../utils/login";

export const Login = () => {
    const appId = "63326c6fc50edca9bc452318";
    const onLogin = (userInfo) => {
        const {token,tokenExpiredAt,photo} = userInfo;
        setLoginData(token,tokenExpiredAt,photo);
        window.location.reload();
    }
    return (
        <div className={styles.wrap}>
            <Guard appId={appId} onLogin={onLogin} />
        </div>
    )
}
