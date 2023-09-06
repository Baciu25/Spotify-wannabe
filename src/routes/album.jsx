import { useParams } from "react-router-dom";

export default function Album() {
  let { album_id } = useParams();

  return <div> {album_id} </div>;
}
