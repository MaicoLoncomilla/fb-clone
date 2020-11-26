import React from 'react'
import s from './Widgets.module.css';

function Widget(){
    return(
        <div className={s.container}>
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHENRY-108437840594440&tabs=timeline&width=340&height=1000&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" className={s.iframe} title="Henry"></iframe>
        </div>
    )
}
export default Widget;