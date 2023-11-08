import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./SiderLeft.module.css"

function SiderLeft() {

    return (
        <siderleft className={styles.siderleft}>
            <div className={styles.icons}>
                <Link to="/page1">
                    <img src="/images/icon1.png" alt="Icon 1" />
                </Link>
                <Link to="/page2">
                    <img src="/images/icon2.png" alt="Icon 2" />
                </Link>
                <Link to="/page3">
                    <img src="/images/icon3.png" alt="Icon 3" />
                </Link>
                <Link to="/page4">
                    <img src="/images/icon4.png" alt="Icon 4" />
                </Link>
            </div>
            <div className={styles.text}>Copyright, SportSee 2020</div>
        </siderleft >
    );
}

export default SiderLeft;