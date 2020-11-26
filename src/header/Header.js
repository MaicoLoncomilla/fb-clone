import React from 'react';
import s from './Header.module.css'
import HeaderLeft from './headerLeft/HeaderLeft'
import HeaderMiddle from './headerMiddle/HeaderMiddle'
import HeaderRight from './headerRight/HeaderRight'

function Header(){
    return(
        <div className={s.container}>
            <HeaderLeft/>
            <HeaderMiddle/>
            <HeaderRight/>
        </div>
    )
}
export default Header;