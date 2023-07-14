import "./Top Tracks.css";
import { Link } from "react-router-dom";


export default function TopTracks() {
  return (
    <div className="container">
      <p>Top Tracks</p>
      <section className="sectio">
        <ul>
          <li>
            <Link path=''>All Times</Link>
          </li>
          <li>Last 6 Months</li>
          <li>Last 4 weeks</li>
        </ul>
      </section>
    </div>
  );
}
