import React from 'react';
import s from './SignUp.module.css'
import HelpOutlinedIcon from '@material-ui/icons/HelpOutlined';
import { Months, ArrayDays, ArrayYears } from '../../utils'
import { auth, provider } from '../../firebase/firebase';
import { useStateValue } from '../../firebase/StateProvider.js';
import { SET_USER, DIV_SIGN_UP } from '../../firebase/actions';

function SignUp(){
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: SET_USER,
                    user: result.user,
                })
            })
            .catch(error => alert(error.message))
        dispatch({
            type: DIV_SIGN_UP,
            divSignUp: false
        })
    }

    const toggle = (e) => {
        e.preventDefault();
        dispatch({
            type: DIV_SIGN_UP,
            divSignUp: false
        })
    }
    return (
        <div className={s.container_signup}>
            <div className={s.container_signup_2}>
                <button onClick={toggle}> X </button>
                <div className={s.container_signup_title}>
                    <h2>Sign Up</h2>
                    <p>It's quick and easy</p>
                </div>
                <div className={s.container_form}>
                    <div className={s.container_form_2}>
                        <form >
                            <div className={s.container_name_lastname}>
                                <div className={s.container_first_name}>
                                    <input placeholder="First name" />
                                </div>
                                <div className={s.container_last_name}>
                                    <input placeholder="Last name" />
                                </div>
                            </div>
                            <div className={s.container_mobile_email_password}>
                                <input placeholder="Mobile number or email" />
                            </div>
                            <div className={s.container_mobile_email_password}>
                                <input placeholder="New password" />
                            </div>
                            <div className={s.container_birthday_3_input}>
                                <div className={s.container_birthday}>
                                    <p>Birthday</p>
                                    <HelpOutlinedIcon fontSize="inherit" />
                                </div>
                                <div className={s.container_select}>
                                    <select>
                                        {Months && Months.map(months =>
                                            <option>{months}</option>
                                        )}
                                    </select>
                                    <select>
                                        {ArrayDays && ArrayDays.map(days =>
                                            <option>{days}</option>
                                        )}
                                    </select>
                                    <select>
                                        {ArrayYears && ArrayYears.map(years =>
                                            <option>{years}</option>
                                        )}
                                    </select>
                                </div>
                            </div>
                            <div className={s.container_birthday_3_input}>
                                <div className={s.container_birthday}>
                                    <p>Gender</p>
                                    <HelpOutlinedIcon fontSize="inherit" />
                                </div>
                                <div className={s.container_select}>
                                    <span>
                                        <label>Female</label>
                                        <input type="radio" />
                                    </span>
                                    <span>
                                        <label>Male</label>
                                        <input type="radio" />
                                    </span>
                                    <span>
                                        <label>Custom</label>
                                        <input type="radio" />
                                    </span>
                                </div>
                            </div>
                            <div className={s.container_text}>
                                <p>
                                    By clicking Sign Up, you agree to our
                                    <a> Terms</a>
                                    ,
                                    <a> Data Policy </a>
                                    and
                                    <a> Cookies Policy</a>
                                    . You may receive SMS Notifications from us and can opt out any time.
                                </p>
                            </div>
                            <div className={s.container_button}>
                                <input type="button" value="Sign Up" />
                            </div>
                            <div className={s.container_button_google}>
                                <input onClick={signIn} type="button" value="Sign in with Google" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignUp