import { useEffect, useState } from 'react';
import Input from './Input.jsx';

export default function SaveForm({save, cancel, projList}){
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');
    const [enteredDuedate, setEnteredDuedate] = useState('');

    const [submitted, setSubmitted] = useState(false);

    function handleInputChange(identifier, value) {
      if (identifier === 'title') {
        setEnteredTitle(value);
      } else if (identifier === 'description') {
        setEnteredDescription(value);
      }else {
        setEnteredDuedate(value);
      }
    }
  
    function handleRegister() {
      setSubmitted(true);
  
      if (isValid()) {
        save(enteredTitle, enteredDescription, enteredDuedate);
        resetForm();
      }
    }

    // const saveData = () => {
    //   if(isValid()){
    //     save(enteredTitle,enteredDescription,enteredDuedate);
    //     resetForm();
    //   }
    // };
    function isValid() {
      return enteredTitle.trim().length > 0 && !Object.keys(projList).includes(enteredTitle) && enteredDescription.trim().length > 0 && enteredDuedate.trim().length > 0;
    }
    function handleCancel() {
      cancel(false);

    }
  
    const titleNotValid = submitted && (enteredTitle.trim().length < 1 || Object.keys(projList).includes(enteredTitle)) ;
    const descriptionNotValid = submitted && enteredDescription.trim().length < 1;
    const duedateNotValid = submitted && enteredDuedate.trim().length < 1;
  


  //  if(titleNotValid|descriptionNotValid|duedateNotValid){
  //    return;
  //  }else{
  //  // save(enteredTitle,enteredDescription,enteredDuedate);
  //  } 

    function resetForm() {
      setEnteredTitle('');
      setEnteredDescription('');
      setEnteredDuedate('');
      setSubmitted(false);
    }
    

    
    return(
    <div>
        <div>
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleRegister}>Save</button>
        </div>    
        <div>
        <Input
            label="TITLE"
            invalid={titleNotValid}
            type="title" 
            // style={{
            //   backgroundColor: titleNotValid ? '#f87171': '#d1d5db'
            // }}
            value={enteredTitle}
            onChange={(event) => handleInputChange('title', event.target.value)}
          />
          <Input 
            label="DESCRIPTION"
            invalid={descriptionNotValid}
            type="description"
            value={enteredDescription}
            onChange={(event) =>
              handleInputChange('description', event.target.value)
            }
          />
          <Input 
            label="DUE DATE"
            invalid={duedateNotValid}
            type="duedate"
            value={enteredDuedate}
            onChange={(event) =>
              handleInputChange('duedate', event.target.value)
            }
          />          
        </div> 
    </div>   
    );
}