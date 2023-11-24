const initialState ={
    projects:[],
    error:null
}

const projectReducer =(state = initialState,action)=>{
  switch(action.type){
    case 'CREATE_PROJECT_SUCESS':
        return action.payload;
    case 'CREATE_PROJECT_FAILURE':
        return action.payload;
    case 'GET_ALL_PROJECT_SUCCESS':
        return {
            ...state,projects:action.payload,error:null
        }
    case 'GET_ALL_PROJECT_FAILURE':
        return{
            ...state,error:action.payload
        }    
    default :
    return state;
  }
}

export default projectReducer;