//poc for redux core working in js

const redux=require('redux')

//reducer
const initialState={counter:0}
const counterReducer=(state=initialState,action)=>{
console.log('action :', action);
switch (action.type) {
    case 'INCREMENT':
        return {counter:state.counter+1}        
        break;
        case 'DECREMENT':
        return {counter:state.counter-1}        
        break;

    default:
         return state
}
}

//initializig store
const store=redux.legacy_createStore(counterReducer)

//subscribing the store
const counterSubscriber=()=>{
    const latesstState= store.getState()
    console.log('latesstState :', latesstState);

}
console.log('store.getState() ß:', store.getState());
store.subscribe(counterSubscriber)

//dispatching the action
store.dispatch({type:'INCREMENT'})