import styles from './Contents.module.css';
import SaveForm from './SaveForm';
import Tasks from './Tasks';

export default function Contents({contents, projList, onTaskListChange, onProjListDelete, regi, onProjListAdd, onProjListAddCancel}){

    function handleDelete() {
        // 인덱스에 해당하는 항목을 제외한 새로운 배열을 생성
        onProjListDelete(contents.title);
    } 

    return (
        <div className={styles.contents}>
        {regi && Object.keys(contents).length == 0 && <SaveForm save={onProjListAdd} cancel={onProjListAddCancel} projList={projList}></SaveForm> }    
        {Object.keys(contents).length > 0 && (
            <>
            <h3>{contents.title}</h3>
            <p>{contents.description}</p>
            <p>{contents.duedate}</p>
            <button onClick={handleDelete}>
             Delete Project
            </button> 
            
            <Tasks title={contents.title} taskList={projList[contents.title].tasks} onTaskListChange={onTaskListChange}></Tasks>        
            </>)}
            {!regi &&  Object.keys(contents).length == 0 && (
            <>
            <h3>No Project Selected</h3>
            </>)}    

            

        </div>);
}