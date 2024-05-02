import { useState } from "react";
import Input from "./Input";


export default function Tasks({title, taskList, onTaskListChange}){
    const [enteredTask, setEnteredTask] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleInputChange(value) {
        setEnteredTask(value);
    }
  
    function handleAdd() {


        setSubmitted(true);

        if(isValid()){
            const newTaskList = [...(taskList || []), enteredTask];

            onTaskListChange(title, newTaskList);

            setEnteredTask('');
            setSubmitted(false);
        }
    }
    
    function handleDelete(index) {
        // 인덱스에 해당하는 항목을 제외한 새로운 배열을 생성
        const updatedTaskList = (taskList || []).filter((_, i) => i !== index);
        onTaskListChange(title, updatedTaskList);
    }    
      
    function isValid() {
        return enteredTask.trim().length > 0 ;
      }

    const taskNotValid = submitted && enteredTask.trim().length < 1;
    return (
    <div>
        <h3>Tasks</h3>
        <Input
            label="TASK"
            invalid={taskNotValid}
            type="task" 
            // style={{
            //   backgroundColor: taskNotValid ? '#f87171': '#d1d5db'
            // }}
            value={enteredTask}
            onChange={(event) => handleInputChange(event.target.value)}
          />
          <button onClick={handleAdd}>Add Task</button>

          <ul>
                {taskList && taskList.map((task, index) => (
                    <li key={index}>{task}
                        <button onClick={() => handleDelete(index)}>
                            Clear
                        </button>                    
                    </li>
                ))}
          </ul>          


    </div>);
}