import {ADD_TODO} from './actions';

const initialState = {
    list: []
};

function todos(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                list: [
                    ...state.list,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            })
        dafault:
            return state
    }
}

export default todoReducer;