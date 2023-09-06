import { useParams } from "react-router-dom";

export default function Track() {
  let { track_id } = useParams();

  return <div> {track_id} </div>;
}
