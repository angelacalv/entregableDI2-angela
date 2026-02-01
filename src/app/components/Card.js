export default function Card({ title, text, img }) {
  return (
    <article className="w-[220px] overflow-hidden rounded-xl bg-white/90 shadow-md border border-black/5">
      <img
        src={img}
        alt={title}
        className="h-28 w-full object-cover"
      />
      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-800">
          {title}
        </h3>
        <p className="mt-1 text-xs leading-snug text-gray-600">
          {text}
        </p>
      </div>
    </article>
  );
}






