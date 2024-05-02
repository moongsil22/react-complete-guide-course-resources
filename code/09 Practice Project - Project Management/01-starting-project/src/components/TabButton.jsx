export default function TabButton({ children, isSelected, ...props}) {
  console.log('TAbButton COMPONENT EXCUTING');
  return (
    <ul>
      <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
    </ul>
  );
}
