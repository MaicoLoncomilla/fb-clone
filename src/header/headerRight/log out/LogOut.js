import React from 'react';
import s from './LogOut.module.css';
import { Avatar } from '@material-ui/core';
import FeedbackIcon from '@material-ui/icons/Feedback';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SettingsIcon from '@material-ui/icons/Settings';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import HelpOutlinedIcon from '@material-ui/icons/HelpOutlined';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { auth } from '../../../firebase/firebase';
import { useStateValue } from '../../../firebase/StateProvider';
import { SET_USER } from '../../../firebase/actions';


function LogOut (){

    const [{ user }, dispatch] = useStateValue();
    //no se deslogea de google
    const exit = e =>{
        e.preventDefault()
        auth.signOut()
            .then((result) =>{
                dispatch({
                    type: SET_USER,
                    user: result,
                })
            })
    }

    return (
        <div className={s.container}>
            <div className={s.container_main}>
                <div className={s.container_user}>
                    <div className={s.container_user_a}>
                        <div className={s.container_user_a_2}>
                            <div className={s.container_user_avatar}>
                                <Avatar src={user.photoURL} className={s.avatar}/>
                            </div>
                            <div className={s.container_user_name}>
                                <div className={s.container_user_name_seeprofile}>
                                    <div className={s.container_user_name_seeprofile_2}>
                                        <div className={s.container_user_nameuser}>
                                            <span className={s.username_span}>{user.displayName}</span>
                                        </div>
                                        <div className={s.container_user_seeprofile}>
                                            <span className={s.see_profile}>See your profile</span>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.container_line_empty}></div>
                <div className={s.container_give_feedback}>
                    <div className={s.container_give_feedback_2}>
                        <div className={s.container_main_feedback}>
                            <div className={s.container_icon_feedback}>
                                <div className={s.container_icon_feedback2}>
                                    <FeedbackIcon className={s.FeedbackIcon}/>
                                </div>
                            </div>
                            <div className={s.container_text_feedback}>
                                <div className={s.container_text_feedback_2}>
                                    <div className={s.container_text_feedback_3}>
                                        <div className={s.container_text_top_feedback}>
                                            <span className={s.container_span_feedback}>Give Feedback</span>
                                        </div>
                                        <div className={s.container_text_top_feedback}>
                                            <span className={s.container_span_feedback2}>Help us improve the new Facebook.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.container_line_empty}></div>
                <div className={s.container_5_container}>
                    <div className={s.container_5_container_2}>
                        <div className={s.container_1_switchAccount}>
                            <div className={s.container_1_switchAccount_2}>
                                <div className={s.container_1_switchAccount_3}>
                                    <div className={s.container_avatar_switch}>
                                        <Avatar/>
                                    </div>
                                    <div className={s.container_text_switch}>
                                        <div className={s.container_text_switch_2}>
                                            <div className={s._text_switch_top}>
                                                <span>Switch Account</span>
                                            </div>
                                            <div className={s._text_switch_bot}>
                                                <span>Log in as default name</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={s.container_icon_switch}> 
                                        <div className={s.container_icon}>
                                            <MoreHorizIcon/>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className={s.container_2_setting_privacy}>
                            <div className={s.container_2_setting_privacy_2}>
                                <div className={s.container_2_setting_privacy_3}>
                                    <div className={s.container_icon_setting_privacy}>
                                        <div className={s.container_icon_setting_privacy_2}>
                                            <SettingsIcon className={s.SettingsIcon}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={s.container_text_setting_privacy}>
                                    <div className={s.container_text_setting_privacy_2}>
                                        <span>Settings & Privacy</span>
                                    </div>
                                    <div className={s.container_arrow}>
                                        <div className={s.container_arrow_2}>
                                            <ArrowForwardIosIcon className={s.ArrowForwardIosIcon}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.container_2_setting_privacy}>
                            <div className={s.container_2_setting_privacy_2}>
                                <div className={s.container_2_setting_privacy_3}>
                                    <div className={s.container_icon_setting_privacy}>
                                        <div className={s.container_icon_setting_privacy_2}>
                                            <HelpOutlinedIcon className={s.SettingsIcon}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={s.container_text_setting_privacy}>
                                    <div className={s.container_text_setting_privacy_2}>
                                        <span>Help & Support</span>
                                    </div>
                                    <div className={s.container_arrow}>
                                        <div className={s.container_arrow_2}>
                                            <ArrowForwardIosIcon className={s.ArrowForwardIosIcon}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.container_2_setting_privacy}>
                            <div className={s.container_2_setting_privacy_2}>
                                <div className={s.container_2_setting_privacy_3}>
                                    <div className={s.container_icon_setting_privacy}>
                                        <div className={s.container_icon_setting_privacy_2}>
                                            <Brightness2Icon className={s.SettingsIcon}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={s.container_text_setting_privacy}>
                                    <div className={s.container_text_setting_privacy_2}>
                                        <span>Display Preferences</span>
                                    </div>
                                    <div className={s.container_arrow}>
                                        <div className={s.container_arrow_2}>
                                            <ArrowForwardIosIcon className={s.ArrowForwardIosIcon}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.container_2_setting_privacy}>
                            <button onClick={exit} className={s.container_button_log_out}>
                                <div className={s.container_2_setting_privacy_2}>
                                    <div className={s.container_2_setting_privacy_3}>
                                        <div className={s.container_icon_setting_privacy}>
                                            <div className={s.container_icon_setting_privacy_2}>
                                                <MeetingRoomIcon className={s.SettingsIcon} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={s.container_text_setting_privacy}>
                                        <div className={s.container_text_setting_privacy_2}>
                                            <span>Log Out</span>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            
                        </div>
                    </div>
                </div>
                <div className={s.container_copy}>
                    <span>
                        <ul>
                            <li> Privacy - </li>
                            <li> Terms - </li>
                            <li> Advertising - </li>
                            <li> Ad Choices - </li>
                            <li> Cookies - </li>
                            <li> More - </li>
                            <li> Facebook © 2020</li>
                        </ul>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default LogOut