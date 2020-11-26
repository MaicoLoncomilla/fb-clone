import React from 'react'
import s from './HeaderMiddle.module.css';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import StoreIcon from '@material-ui/icons/Store';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import DehazeIcon from '@material-ui/icons/Dehaze';

function Header_Middle(){
    return (
        <div className={s.containerMiddleIcon}>
            <div className={s.container_icon}>
                <div className={s.container_icon_2}>
                    <div className={s.container_icon_center_2}>
                        <HomeIcon fontSize="large" className={`${s.IconMiddle} ${s.IconMiddle_active}`} />
                    </div>
                    <div className={s.container_empty_active}>
                    </div>
                </div>
            </div>
            <div className={s.container_icon}>
                <div className={s.container_icon_2}>
                    <div className={s.container_icon_center}>
                        <GroupIcon fontSize="large" className={s.IconMiddle} />
                    </div>
                    <div className={s.container_empty}>
                    </div>
                </div>
            </div>
            <div className={s.container_icon}>
                <div className={s.container_icon_2}>
                    <div className={s.container_icon_center}>
                        <LiveTvIcon fontSize="large" className={s.IconMiddle} />
                    </div>
                    <div className={s.container_empty}>
                    </div>
                </div>
            </div>
            <div className={s.container_icon}>
                <div className={s.container_icon_2}>
                    <div className={s.container_icon_center}>
                        <StoreIcon fontSize="large" className={s.IconMiddle} />
                    </div>
                    <div className={s.container_empty}>
                    </div>
                </div>
            </div>
            <div className={s.container_icon}>
                <div className={s.container_icon_2}>
                    <div className={s.container_icon_center}>
                        <SupervisedUserCircleIcon fontSize="large" className={s.IconMiddle} />
                    </div>
                    <div className={s.container_empty}>
                    </div>
                </div>
            </div>
            <div className={s.DehazeIcon_none_block}>
                <DehazeIcon fontSize="large"/>
            </div>
        </div>
    )
}
export default Header_Middle;