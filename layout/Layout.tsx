import React, {FunctionComponent} from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import {ILayoutProps} from "./Layout.props";
import Sidebar from "./Sidebar/Sidebar";
import styles from "./Layout.module.scss";

export const Layout = ({children}: ILayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header}/>
            <Sidebar className={styles.sidebar}/>
            <div className={styles.main}>{children}</div>
            <Footer className={styles.footer}/>
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown>>(
    Component: FunctionComponent<T>
) => {
    return function withLayoutComp(props: T) {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};
