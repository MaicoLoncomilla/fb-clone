import React from 'react';
import s from './Header_Left.module.css';
import SearchIcon from '@material-ui/icons/Search';

function Header_Left(){
    return (
        <div className={s.container}>
            <div className={s.container_2}>
                <div className={s.container_3}>
                    <img className={s.logoImg} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="Logo-Facebook">
                    </img>
                    <label className={s.container_label}>
                        <div className={s.container_searchicon}>

                        </div>
                        <div className={s.containerInputSearch}>
                            <SearchIcon className={s.SearchIcon}/>
                            <input className={s.inputSearch} type="text" placeholder="Search Facebook" />
                        </div>
                    </label>
                    
                </div>
            </div>
        </div>
    )
}
export default Header_Left;