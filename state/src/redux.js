import {applyMiddleware, combineReducers, createStore} from 'redux';

export const changeState = () => ({type: 'CHANGE_STATE'});

// reducers.js
export const checkboxState = (state = false, action) => {
    switch (action.type) {
        case 'CHANGE_STATE':
            return !state;
        default:
            return state;
    }
};

export const reducers = combineReducers({checkboxState});

// store.js
export function configureStore() {
    const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}
    const store = createStore(reducers, persistedState);
    return store;
};

export const store = configureStore();