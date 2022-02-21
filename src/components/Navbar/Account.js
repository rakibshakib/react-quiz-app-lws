import React from 'react';
import style from '../../styles/Account.module.css';

const Account = () => {
    return (
        <div className={style.account}>
            <span className="material-icons-outlined" title="Account">
                account_circle
            </span>
            <a href="www">Signup</a>
            {/* <span class="material-icons-outlined" title="Logout"> logout </span>  */}
        </div>
    );
};

export default Account;
