import React, { useState } from 'react';
import s from './SideBar.module.css'
import SideBarRow from './sidebar row/SideBarRow';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import StorefrontIcon from '@material-ui/icons/Storefront';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import TodayIcon from '@material-ui/icons/Today';
import TimerIcon from '@material-ui/icons/Timer';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';
import PaymentIcon from '@material-ui/icons/Payment';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import WorkIcon from '@material-ui/icons/Work';
import TheatersIcon from '@material-ui/icons/Theaters';
import MessageIcon from '@material-ui/icons/Message';
import ChatIcon from '@material-ui/icons/Chat';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import FlagIcon from '@material-ui/icons/Flag';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import CloudIcon from '@material-ui/icons/Cloud';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { useStateValue } from '../firebase/StateProvider';


function SideBar(){
    const [activate, setActivate] = useState(false);
    const [activateButton, setActivateButton] = useState(true);
    const [{ user }, dispatch] = useStateValue();

    function SeeMore(e){
        e.preventDefault();
        setActivate(true);
        setActivateButton(false);
    }
    function SeeLess(e){
        e.preventDefault();
        setActivate(false)
        setActivateButton(true);
    }

    return(
        <div className={s.container}>
            <div className={s.sideBarContainer}>
                <SideBarRow text={user.displayName} src={user.photoURL} />
                <SideBarRow text="COVID-19 Information Center" Icon={HomeIcon} />
                <SideBarRow text="Find Friends" Icon={GroupIcon} />
                <SideBarRow text="Groups" Icon={SupervisedUserCircleIcon} />
                <SideBarRow text="Marketplace" Icon={StorefrontIcon} />
                <SideBarRow text="Videos" Icon={OndemandVideoIcon} />
                <SideBarRow text="Events" Icon={TodayIcon} />
                <SideBarRow text="Memories" Icon={TimerIcon} />
                <SideBarRow text="Saved" Icon={BookmarkIcon} />
                {
                    activateButton &&
                    <div className={s.container_button_main}>
                        <div className={s.container_button}>

                            <button className={s.buttonSeeMore} onClick={SeeMore}>
                                <ExpandMoreIcon fontSize="large" className={s.IconButton} /> <h4>See More</h4>
                            </button>

                        </div>
                    </div>
                }
                {
                    activate && <div>
                        <SideBarRow text="Campus" Icon={FlightTakeoffIcon} />
                        <SideBarRow text="Crisis Response" Icon={WifiTetheringIcon} />
                        <SideBarRow text="Facebook Pay" Icon={PaymentIcon} />
                        <SideBarRow text="Friend List" Icon={RecentActorsIcon} />
                        <SideBarRow text="Fundraisers" Icon={FavoriteIcon} />
                        <SideBarRow text="Games" Icon={VideogameAssetIcon} />
                        <SideBarRow text="Gaming Video" Icon={SportsEsportsIcon} />
                        <SideBarRow text="Jobs" Icon={WorkIcon} />
                        <SideBarRow text="Live Videos" Icon={TheatersIcon} />
                        <SideBarRow text="Messenger" Icon={MessageIcon} />
                        <SideBarRow text="Messenger Kids" Icon={ChatIcon} />
                        <SideBarRow text="Most Recent" Icon={MarkunreadMailboxIcon} />
                        <SideBarRow text="Offers" Icon={WorkOutlineIcon} />
                        <SideBarRow text="Pages" Icon={FlagIcon} />
                        <SideBarRow text="Recent Ad Activity" Icon={LocalActivityIcon} />
                        <SideBarRow text="Weather" Icon={CloudIcon} />
                        <div className={s.container_button_main}>
                            <div className={s.container_button}>
                                <button className={s.buttonSeeMore} onClick={SeeLess}>
                                    <ExpandLessIcon fontSize="large" className={s.IconButton} /> <h4>See Less</h4>
                                </button>
                            </div>
                        </div>
                    </div>
                }
            </div>
            {
                !activate &&
                <div className={s.container_footer}>
                    <div className={s.container_footer_span}>
                        <span className={s.container_span}>
                            <ul>
                                <li> Privacy -</li>
                                <li> Terms -</li>
                                <li> Advertising -</li>
                                <li> Ad Choices -</li>
                                <li> Cookies -</li>
                                <li> More -</li>
                                <li> Facebook © 2020</li>
                            </ul>
                        </span>
                    </div>
                </div>
            }
        </div>
        
    )
}
export default SideBar