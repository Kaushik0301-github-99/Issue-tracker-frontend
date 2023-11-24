import axios from "axios"

export const CREATE_PROJECT =(project)=> {
    return(dispatch)=>{
        axios.post('http://localhost:9098/project/create',project).then((response)=>response.json()).then(data=>{
           dispatch({
            type:"CREATE_PROJECT_SUCESS",
            payload:"Project created"
           })       
 }).catch((error)=>{
     dispatch({
        type:"CREATE_PROJECT_FAILURE",
        payload:"Project not created"
     })
 })
}
}

export const getAllProject =()=>{
    return (dispatch)=>{
        console.log("call made here")
        axios.get('http://localhost:9098/project/get-all-project').then((response)=>{
         dispatch({
          type:"GET_ALL_PROJECT_SUCCESS",
          payload:response
         })
        }).catch((error)=>{
            dispatch({
                type:"GET_ALL_PROJECT_FAILURE",
                payload:error.message
            })
            console.log(error.message)
            console.log("error while fetching data")
        })
    }
}