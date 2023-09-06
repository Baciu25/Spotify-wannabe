import { useParams } from "react-router-dom";

export default function Show() {
  let { show_id } = useParams();

  return <div> {show_id} </div>;
}
