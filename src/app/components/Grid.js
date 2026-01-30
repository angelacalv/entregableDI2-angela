import Card from "./Card";

export default function Grid({ data = [] }) {
  return (
    <section>
      {data.map((item) => (
        <Card key={item.id} title={item.title} text={item.text} img={item.img} />
      ))}
    </section>
  );
}




