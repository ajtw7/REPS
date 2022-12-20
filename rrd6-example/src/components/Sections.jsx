import { useParams } from "react-router-dom";

function Sections() {
  const { section } = useParams();

  return (
    <div>
      <p>{section}</p>
    </div>
  );
}

export default Sections;
