import Album from "./Album";
import { data } from "./data";
export default function App() {
  return (
    <div className="container pt-4 bg-dark">
      <div className="row ">
        {data.map((item, i) => (
          <Album key={i} item={item} />
        ))}
      </div>
    </div>
  );
}
