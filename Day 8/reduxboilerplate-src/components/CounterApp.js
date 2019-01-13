import { connect } from 'react-redux'
import Counter from './Counter'
import { INCREMENT, DECREMENT, clearFunc } from '../actions'

//Mapping our state to be the value from our state
const mapStateToProps = (state, ownProps) => {
    return {
        value: state.value
    }
}

//Mapping dispatch to call functions for increment, decrement, and clear
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onIncrement: () => {
            dispatch({ type: INCREMENT, value: 1 });
        },
        onIncrementByFive: () => {
            dispatch({ type: INCREMENT, value: 5 });
        },
        onDecrement: () => {
            dispatch({  type: DECREMENT, value: 1 });
        },
        onDecrementByFive: () => {
            dispatch({ type: DECREMENT, value: 5 });
        },
        onClear: () => {
            dispatch( clearFunc() );
        }
    }
}

const CounterApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterApp;