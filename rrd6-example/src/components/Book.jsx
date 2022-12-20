import { useParams, useOutletContext } from "react-router-dom";

const Book = () => {
  const { id } = useParams();
  const context = useOutletContext();

  return (
    <div>
      <h1 style={{ color: "red" }}>
        Book {id} {context.hello}: {context.copies[3]}
      </h1>
      {/* <br /> */}
      <h2>{context.status[0]}</h2>
    </div>
  );
};

export default Book;
