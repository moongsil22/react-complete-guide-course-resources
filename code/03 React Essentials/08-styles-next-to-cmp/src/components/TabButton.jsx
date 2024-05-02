export default function TabButton({ children, onSelect }) {
    //vanlia.js
    //document.querySelector('button').addEventListener('click', () => {} )
    // function handleClick(){
    //     console.log('Hello world');
    // }
    
    return (
        <li><button onClick={onSelect}>{children}</button></li>
    );
}
 