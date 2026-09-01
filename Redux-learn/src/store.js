import {createStore} from "redux"

// initial
const initialstate = {
    user: {
        username : "Teju",
        balance : 50000,
    },
};

// Action

export const addMoney = (amt) => ({
    type: "addMoney",
    payload: amt
});

export const removeMoney = (amt) => ({
    type: "removeMoney",
    payload: amt
});

// reduer

function reducer(state = initialstate, action) {

    switch (action.type){
        case "addMoney":
            return{
                user: {
                    username: state.user.username,
                    balance: state.user.balance + action.payload,

                },
            };
        case "removeMoney":
            return{
                user: {
                    username: state.user.username,
                    balance: state.user.balance - action.payload,
                },
            };

        default:
            return state;
    }
}

const store = createStore(reducer)
export default store;