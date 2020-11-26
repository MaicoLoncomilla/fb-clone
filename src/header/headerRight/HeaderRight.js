import React, { useState } from 'react'
import s from './HeaderRight.module.css';
import {Avatar} from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import { useStateValue } from '../../firebase/StateProvider';
import LogOut from './log out/LogOut';

function Header_Right(){

    const [{ user }] = useStateValue();
    const [active, setActive] = useState(false);

    function toogle() {
        setActive(!active);
    }

    return (
        <div className={s.container_main}>
            <div className={s.container_icons}>
                <div className={s.container_create_text}>
                    <div className={s.container_create_text_2}>
                        <h4 className={s.backgroundH4}>Create</h4>
                    </div>
                </div>
                <div className={s.container_backgroundIcon}>
                    <WhatsAppIcon className={s.backgroundIcon} />
                </div>
                <div className={s.container_backgroundIcon}>
                    <NotificationsIcon className={s.backgroundIcon} />
                </div>
                <Avatar className={s.backgroundAvatar} src={user.photoURL} />
                <div className={s.container_backgroundIcon_arrow}>
                    <button onClick={toogle} className={s.button}>
                        <ArrowDropDownOutlinedIcon className={s.backgroundIcon} />
                    </button>
                </div>
            </div>
            <div>
                {active &&
                <LogOut/>
                }
            </div>
        </div>
    )
}
export default Header_Right;