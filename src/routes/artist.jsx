import { useParams } from "react-router-dom";

export default function Artist() {
  let { artist_id } = useParams();

  return <div> {artist_id} </div>;
}
