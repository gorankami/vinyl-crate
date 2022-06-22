import Album from "./Album";
import { data } from "./data";
import { fisherYatesShuffle } from "./shuffleArray";

export default function App() {
  const shuffledData = fisherYatesShuffle(data);
  return (
    <div className="container pt-4 bg-dark">
      <div className="row ">
        {shuffledData.map((item, i) => (
          <Album key={i} item={item} />
        ))}
      </div>
    </div>
  );
}
