import React from 'react';
import Header from './Header';
import SiderLeft from './SiderLeft';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';


function Layout() {

    return (
        <div className={styles.layout}>
            <Header />
            <main>
                <Outlet />
            </main>
            <SiderLeft/>
        </div>
    );
}

export default Layout;