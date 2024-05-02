import { useState } from 'react';

export default function Player({initialName, symbol, isActive, onChangeName}) {

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    console.log('Player:'+ playerName);
    
    function editingHandler(){
        
        //setIsEditing(!isEditing);
        //setIsEditing(!isEditing);
        //둘다 현재상태 isEditing 상태를 가져오기 떄문에 2번실행 한다고 해서 true->false로 변경되지않음.

        setIsEditing((editing)=>!editing);

        if(isEditing){
            onChangeName(symbol,playerName);
        }
     //   setIsEditing((editing)=>!editing);
        //업데이트 되고나서의 최신상태를 가져오기 때문에 true->false로 변경됨
        //setIsEditing((editing)=>!editing);
    }
    
    function handleChange(event) {
        console.log(event.target.value);
        setPlayerName(event.target.value);

    }

    return (
        <li className={isActive ? 'active' : undefined}>
        <span className="player">
         {!isEditing &&
          <span className="player-name">{playerName}</span>}
         {isEditing &&
          <input type="text" required value={playerName} onChange={handleChange}></input>}             
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={() => editingHandler()}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
    );
}