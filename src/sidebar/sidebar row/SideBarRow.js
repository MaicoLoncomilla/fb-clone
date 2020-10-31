import React from 'react';
import s from './SideBarRow.module.css';
import {Avatar} from '@material-ui/core';

function SideBarRow({src,Icon, text}){
    return(
        <div className={s.container}>
            <div className={s.containerList}>
                <div className={s.container_elements}>
                    {src && <Avatar src={src} />}
                    {Icon && <Icon fontSize="large" className={s.iconSideBar} />}
                    <h4 className={s.ColorText}>{text}</h4>
                </div>
                
            </div>
        </div>    
    )
}
export default SideBarRow;