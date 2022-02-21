import React from 'react';
import image from '../../assets/images/3.jpg';
import style from '../../styles/Video.module.css';

const Video = () => {
    return (
        <a href="www">
            <div className={style.video}>
                <img src={image} alt="" />
                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                <div className={style.qmeta}>
                    <p>10 Questions</p>
                    <p>Score : Not taken yet</p>
                </div>
            </div>
        </a>
    );
};

export default Video;
