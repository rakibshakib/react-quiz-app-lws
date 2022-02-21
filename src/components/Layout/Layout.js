import React from 'react';
import style from '../../styles/Layout.module.css';
import Nav from '../Navbar/Nav';

const Layout = ({ children }) => {
    return (
        <div>
            <Nav />
            <main className={style.main}>
                <div className={style.container}>{children}</div>
            </main>
        </div>
    );
};

export default Layout;
