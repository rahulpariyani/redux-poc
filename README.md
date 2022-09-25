Branches:

1. redux-with-js : In this branch I did a POC on using redux with normal JS, creating a store and manipulating the data by dispatching actions and handling                    it with reducers.


2. react-redux : In this branch I did a POC on using redux with React JS, It consist of 2 apps sharing a common store:  
           i.  Todo app : In this app I have handled the reducer with createReducer() and actions with createAction() method of redux-toolkit library and                  integrated it with class based components using connect method of react-redux library.    
           ii. Counter app : In Counter app I have used createSlice() method of redux-toolkit library and integrated it with react's functional components                using useSelector() and useDispatch() hooks of react-redux library.
