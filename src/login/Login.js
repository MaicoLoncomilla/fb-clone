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
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"/>
                <div className={s.container_inputs_button}>
                    <div className={s.container_input_email_password}>
                        <input className={s.inputs} type="text" placeholder="Email or Phone Number"/>
                    </div>
                    <div className={s.container_input_email_password}>
                        <input className={s.inputs} type="password" placeholder="Password"/>
                    </div>
                    <div className={s.container_button}>
                        <button type="submit">Log In</button>
                    </div>
                    <div className={s.container_a}>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <div className={s.container_empty}></div>
                
                    <div className={s.container_button_newAccout}>
                        <button onClick={toggle}>Create New Accout</button>
                    </div>
                    <div className={s.container_create_page}>
                        <a>Create a Page </a>
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
                            <li><a>Sign Up</a></li>
                            <li><a>Log In</a></li>
                            <li><a>Messenger</a></li>
                            <li><a>Facebook Lite</a></li>
                            <li><a>Watch</a></li>
                            <li><a>People</a></li>
                            <li><a>Pages</a></li>
                            <li><a>Page Categories</a></li>
                            <li><a>Places</a></li>
                            <li><a>Games</a></li>
                            <li><a>Locations</a></li>
                            <li><a>Marketplace</a></li>
                            <li><a>Facebook Pay</a></li>
                            <li><a>Groups</a></li>
                            <li><a>Oculus</a></li>
                            <li><a>Portal</a></li>
                            <li><a>Instagram</a></li>
                            <li><a>Local</a></li>
                            <li><a>Fundraisers</a></li>
                            <li><a>Services</a></li>
                            <li><a>Voting Information Center</a></li>
                            <li><a>About</a></li>
                            <li><a>Create Ad</a></li>
                            <li><a>Create Page</a></li>
                            <li><a>Developers</a></li>
                            <li><a>Careers</a></li>
                            <li><a>Privacy</a></li>
                            <li><a>Cookies</a></li>
                            <li><a>Ad Choices</a></li>
                            <li><a>Terms</a></li>
                            <li><a>Help</a></li>
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
                <SignUp/>
            </div>
        }
        </>
    )
}
export default Login;