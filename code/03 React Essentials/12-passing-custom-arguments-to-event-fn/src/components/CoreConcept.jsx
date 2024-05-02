export default function CoreConcept({ image, title, description }) {
  console.log('CoreConcept COMPONENT EXCUTING');
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}