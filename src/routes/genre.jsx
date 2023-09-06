import { useParams } from "react-router-dom";

export default function Genre() {
  let { genre_id } = useParams();

  return <div> {genre_id} </div>;
}
