export default function Album({ item }) {
  const title = `${item.album} by ${item.artist}`;
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      alt={title}
      className="text-center col-6 col-md-4 col-xl-3 text-decoration-none"
    >
      <img className="m-auto d-block w-100" src={item.image} />
      <p className="text-light">{title}</p>
    </a>
  );
}
