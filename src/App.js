import Album from "./Album";
import { data } from "./data";
export default function App() {
  return (
    <div className="bg-dark" style={{height: '100vh'}}>
      <div className="container">
        <div className="row pt-2">
          {data.map((item) => (
            <Album
              key={item.album + item.artist}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
