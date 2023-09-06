import { useParams } from "react-router-dom";

export default function Episode() {
  let { episode_id } = useParams();

  return <div> {episode_id} </div>;
}
