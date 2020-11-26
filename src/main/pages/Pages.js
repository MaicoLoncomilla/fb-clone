import React from 'react';
import s from './Pages.module.css'
import Story from './story/Story';

function Pages(){
    
    return(
        <div className={s.containerStory}>
            <Story 
            title="Ciri" 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSC79Eippb5fk_DuYZ2aDWapIF4l_FNjQh1bw&usqp=CAU" profileSrc="https://i.pinimg.com/originals/2f/28/c4/2f28c44225bc74fd2eafbf26702575b7.jpg"
            />
            <Story 
            title="The Witcher 3" 
            image="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/10/witcher-netflix.jpg" profileSrc="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2015/06/02/1331726752199_2/the-witcher-3-wild-hunt"
            />
            <Story 
            title="Cyberpunk 2077" 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFPJPxawW1kRLbhDpTQg1oKeIX1fz68xVekA&usqp=CAU" profileSrc="https://eloutput.com/app/uploads-eloutput.com/2020/01/cyberpunk-2077-keanu.jpg"
            />
            <div className={s.Story4}>
                <Story 
                title="Fate Zero" 
                image="https://c4.wallpaperflare.com/wallpaper/452/792/928/saber-anime-girls-anime-fate-zero-wallpaper-preview.jpg" profileSrc="https://opiniondemierdadotcom.files.wordpress.com/2018/02/kiritsugu.jpg?w=1200"
                />
            </div>
            <div className={s.Story5}>
                <Story 
                title="Steins Gate" 
                image="https://d2skuhm0vrry40.cloudfront.net/2019/articles/2019-06-21-11-10/dvm703m3baf01.jpg/EG11/thumbnail/750x422/format/jpg/quality/60" profileSrc="https://pbs.twimg.com/media/DueId-5X4AA4Wxc.jpg"
                />
            </div>
            
            
        </div>

    )
}
export default Pages;
