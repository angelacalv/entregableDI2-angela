export default function Card({ title, text, img }) {
  return (
    <article>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}




