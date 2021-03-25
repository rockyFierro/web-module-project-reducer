# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* 
...
event fires,
triggers callback which dispatches addOne(),
addOne() returns object with type ADD_ONE to dispatch,
..................
react source useReducer is: 

export function useReducer<S, I, A>(
  reducer: (S, A) => S,
  initialArg: I,
  init?: I => S,
): [S, Dispatch<A>] {
  const dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
................................
we know S = state, A = action and I = initial state, Dispatch<A> = dispatch(action) but what is happening in respolveDispatcher, every hook uses it!
it's just a huge terinary that calls Dispatch which calls the action as a callback and returns nothing...
.....................................
dispatch is an alias for resolveDispatcher which calls the action addOne as a callback and gives the returned data from it to the reducer before cleaning up after itself,
the reducers switch triggers ADD_ONE and uses the initialState to return a new state...
bingo bongo that was longo, there's a new state to render!





* TotalDisplay shows the total plus 1.
