import { useParams } from "react-router-dom";

export default function Playlist() {
  let { playlist_id } = useParams();

  return <div> {playlist_id} </div>;
}
