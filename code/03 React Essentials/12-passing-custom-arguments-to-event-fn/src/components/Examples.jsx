import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from './Section.jsx'
import Tabs from "./Tabs.jsx";

export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState();
    //selectedTopic = current data snapshot
    //initial value = please click a button
    //setSelectedTopic -> function must be executed again
  
    function handleSelect(selectedButton) {
      // selectedButton => 'components', 'jsx', 'props', 'state'
      setSelectedTopic(selectedButton);
      //tabContent=selectedButton;
      //console.log(selectedTopic);
      //console에 이전단계 선택한 값이 찍힌다. 
      //function이 실행되고 나서야 selectedTopic이 업데이트 되므로 
    }
  
    let tabContent = <p>please select a topic</p>;
  
    if (selectedTopic) {
      tabContent = (<div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>);
    }

    return(        
    <Section id="examples" title="Examples" className="examples">
     {/* buttonsContainer={Section}    */}
    <Tabs buttons={
     <>
     {Object.keys(EXAMPLES).map((topic, index) => (
        <TabButton
          key={index}
          isSelected={selectedTopic === topic}
          onClick={() => handleSelect(topic)}
        >
          {EXAMPLES[topic].title}
        </TabButton>
      ))}
      </>         
    }>
    {tabContent}    
    </Tabs>    

    {/* {EXAMPLES.map((exampleItem) => (<TabButton key={exampleItem.title} isSelected={selectedTopic === exampleItem.title} onSelect={() => handleSelect(exampleItem.title)}>
    {exampleItem.title}</TabButton>))}
     */}


      {/* <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>
        Components
      </TabButton>
      <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
      <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
      <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton> */}

    
    {/* {!selectedTopic ? (<p>please select a topic</p>) : (<div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
        {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>)} */}
    {/* {!selectedTopic &&<p>false</p>}
{selectedTopic && <p>true</p>} */}

  </Section>
  );
}