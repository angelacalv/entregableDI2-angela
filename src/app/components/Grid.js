import Card from "./Card";

export default function Grid({ data = [] }) {
  return (
    <section className="mt-8 flex flex-wrap justify-center gap-6 px-4">
      {data.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          text={item.text}
          img={item.img}
        />
      ))}
    </section>
  );
}






