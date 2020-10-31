import React from 'react';
import style from './Header.module.css'
import Header_Left from './header left/Header_Left'
import Header_Middle from './header middle/Header_Middle'
import Header_Right from './header right/Header_Right'

function Header(){
    return(
        <div className={style.container}>
            <Header_Left/>
            <Header_Middle/>
            <Header_Right/>
        </div>
    )
}
export default Header;