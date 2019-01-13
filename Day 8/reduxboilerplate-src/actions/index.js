// Namespace Actions aka Action Types

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const CLEAR = "CLEAR";

/* Action Creators */

export const incrementFunc = (value = 1) => {
    return {
        type: INCREMENT,
        value //Can write value: value -> same thing
    }
}

export const decrementFunc = (value = 1) => {
    return {
        type: DECREMENT,
        value
    }
}

export const clearFunc = () => {
    return {
        type: CLEAR
    }
}