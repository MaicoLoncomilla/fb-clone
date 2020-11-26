import React from 'react';
import s from './Login.module.css';
import SignUp from './sign up/SignUp';
import { DIV_SIGN_UP } from '../firebase/actions'
import { useStateValue } from '../firebase/StateProvider';

function Login(){

    const [ state, dispatch ] = useStateValue();

    const toggle = (e) => { 
        e.preventDefault();
        dispatch({
            type: DIV_SIGN_UP,
            divSignUp: true
        })
    }
    return(
        <>
            <div className={s.container_main}>
                <div className={s.container_top}>
                    <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="Logo-Facebook"/>
                    <div className={s.container_inputs_button}>
                        <div className={s.container_input_email_password}>
                            <input className={s.inputs} type="text" placeholder="Email or Phone Number" />
                        </div>
                        <div className={s.container_input_email_password}>
                            <input className={s.inputs} type="password" placeholder="Password" />
                        </div>
                        <div className={s.container_button}>
                            <button type="submit">Log In</button>
                        </div>
                        <div className={s.container_a}>
                            <label>Forgot Password?</label>
                        </div>
                        <div className={s.container_empty}></div>
                        <div className={s.container_button_newAccout}>
                            <button onClick={toggle}>Create New Account</button>
                        </div>
                        <div className={s.container_create_page}>
                            <label><b>Create a Page </b></label>
                        for celebrity, band or business
                    </div>
                    </div>
                </div>
                <div className={s.container_bot}>
                    <div className={s.container_bot_sec}>
                        <div className={s.container_ul}>
                            <ul>
                                <li>English (US)</li>
                                <li>Español</li>
                                <li>Português (Brasil)</li>
                                <li>Italian</li>
                                <li>Français (France)</li>
                                <li>العربية</li>
                                <li>Deutsch</li>
                                <li>中文(简体)</li>
                                <li>हिन्दी</li>
                                <li>日本語</li>
                                <li><button>+</button></li>
                            </ul>
                            <div className={s.container_bot_empty}></div>
                            <div className={s.container_ul2}>
                                <li><label>Sign Up</label></li>
                                <li><label>Log In</label></li>
                                <li><label>Messenger</label></li>
                                <li><label>Facebook Lite</label></li>
                                <li><label>Watch</label></li>
                                <li><label>People</label></li>
                                <li><label>Pages</label></li>
                                <li><label>Page Categories</label></li>
                                <li><label>Places</label></li>
                                <li><label>Games</label></li>
                                <li><label>Locations</label></li>
                                <li><label>Marketplace</label></li>
                                <li><label>Facebook Pay</label></li>
                                <li><label>Groups</label></li>
                                <li><label>Oculus</label></li>
                                <li><label>Portal</label></li>
                                <li><label>Instagram</label></li>
                                <li><label>Local</label></li>
                                <li><label>Fundraisers</label></li>
                                <li><label>Services</label></li>
                                <li><label>Voting Information Center</label></li>
                                <li><label>About</label></li>
                                <li><label>Create Ad</label></li>
                                <li><label>Create Page</label></li>
                                <li><label>Developers</label></li>
                                <li><label>Careers</label></li>
                                <li><label>Privacy</label></li>
                                <li><label>Cookies</label></li>
                                <li><label>Ad Choices</label></li>
                                <li><label>Terms</label></li>
                                <li><label>Help</label></li>
                            </div>
                            <div className={s.container_copyright}>
                                <span> Facebook © 2020</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                state.divSignUp &&
                <div className={s.container_main_signUp}>
                    <SignUp />
                </div>
            }
        </>
    )
}
export default Login;