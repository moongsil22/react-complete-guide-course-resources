import { useState } from "react";
import Section from "./Section";
import TabButton from "./TabButton";
import Tabs from "./Tabs";
import styles from './Sidebar.module.css';


export default function Sidebar({projList, onMenuClick, onAddClick }){

    console.log(projList);
    
    const [selectedTopic, setSelectedTopic] = useState();
 
    function handleSelect(selectedButton) {
      setSelectedTopic(selectedButton);
      onMenuClick(selectedButton);
    } 

    function handleAdd() {
        setSelectedTopic('');
        onAddClick();
    }
    
    
    return(
    <div className={styles.sidebar}>
        <Section id="projList" title="YOUR PROJECTS" className="projList">
            <button onClick={handleAdd} >+Add Project</button>
            {Object.keys(projList).length !=0 &&
            <Tabs buttons={
            <>
            {Object.keys(projList).map((topic, index) => (
                <TabButton
                key={index}
                isSelected={selectedTopic === topic}
                onClick={() => handleSelect(topic)}
                >
                {projList[topic].title}
                </TabButton>
            ))}
            </>         
            }>
            </Tabs>
            }   
        </Section>
    </div>
    );
}