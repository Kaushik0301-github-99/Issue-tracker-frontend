import { memo, useEffect } from "react";
import './allproject.scss'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllProject } from "./redux/action";
const AllProject = () => {
  const projects = useSelector((state)=>state.projects);
  const dispatch = useDispatch();
  useEffect(()=>{
  dispatch(getAllProject());
  },[dispatch])
  console.log(projects);
    return (
    <div>
    <h1>Project List</h1>

    </div>
    );
}

export default memo(AllProject);