import { SET_USER, DIV_SIGN_UP, CREATE_POST } from './actions';


export const initialState = {
    user: null,
    divSignUp: false,
    create_post: false
};


const reducer = (state, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user,
            };
            
        case DIV_SIGN_UP:
            return {
                ...state,
                divSignUp: action.divSignUp
            }
        case CREATE_POST:
            return {
                ...state,
                create_post: action.create_post
            }
        default:
            return state
    }
};

export default reducer;