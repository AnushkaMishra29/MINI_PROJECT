import * as actionTypes from './action';
const initialState=
{
    loader:false
}
const reducer =(state=initialState,action)=>
    {
        switch(action.type)
        {
            case actionTypes.CHANGE_LOADER:
                return {
                    ...state,
                    loader:!state.loader
                
                }
            default:
                return state;     
        }   
    }
export default reducer