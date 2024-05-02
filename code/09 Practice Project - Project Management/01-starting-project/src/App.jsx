import { useState } from "react";
import Contents from "./components/Contents";
import Sidebar from "./components/Sidebar";
import SaveForm from "./components/SaveForm";

const PROJLIST ={};

function App() {

  const[ regi, setRegi] = useState(false);

  const[ projList, setProjList] = useState(PROJLIST);

  const[ contents, setContents] = useState({});


function handleContents(selectedTopic){
    if (selectedTopic) {
      setContents(projList[selectedTopic]);
    }  
 }

 function handleRegi(isRegi){
     setRegi(isRegi);
     if(isRegi){
      setContents({});

     }
 }

 function handleSave(stitle, sdescription, sduedate){

  setProjList((prevProjList) => ({
    ...prevProjList, 
    [stitle]:{ 
      title: stitle,
      description: sdescription, 
      duedate: sduedate,
      tasks: [] 
    }}));
  setRegi(false)
  setContents({})  
}

function handleTask(stitle, newList){

  setProjList((prevProjList) => ({
    ...prevProjList, 
    [stitle]:{
      ...prevProjList[stitle],
      tasks: newList}
  }));
}

function handleProjDelete(stitle){

  const updatedProjList = { ...projList };
  delete updatedProjList[stitle];

  setProjList(updatedProjList);

  // 선택된 프로젝트를 삭제하면 Contents를 초기화
  const firstProject = Object.keys(updatedProjList)[0];
  if (firstProject) {
    setContents(updatedProjList[firstProject]);
  }else{
    setContents({});
  }

} 

  return (
    <>
      <Sidebar projList={projList} onMenuClick={handleContents} onAddClick={() => handleRegi(true)}></Sidebar>
      {<Contents contents={contents} projList={projList}  onTaskListChange={(a,b)=> handleTask(a,b)} onProjListDelete={(a)=> handleProjDelete(a)} regi={regi} onProjListAdd={(a,b,c)=> handleSave(a,b,c)} onProjListAddCancel={(a)=> handleRegi(a)}  />}
    </>
  );
}

export default App;
