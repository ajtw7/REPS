import { useSearchParams } from "react-router-dom";

export default function SearchExample() {
  const [numberParams, setNumberParams] = useSearchParams({
    n: 0,
  });
  const [firstNameParams, setFirstNameParams] = useSearchParams({
    firstName: null,
  });
  const [lastNameParams, setLastNameParams] = useSearchParams({
    lastName: null,
  });
  const number = numberParams.get("n");
  const firstName = firstNameParams.get("firstname");
  const lastName = lastNameParams.get("lastname");

  return (
    <div>
      <h1>{number}</h1>
      <div
        style={{
          display: "flex",
          width: "25vw",
          justifyContent: "space-evenly",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        {firstName && <p>First name: {firstName}.</p>}{" "}
        {lastName && <p>Last name: {lastName}. </p>}
        <input
          type="number"
          value={number}
          onChange={(e) => setNumberParams({ n: e.target.value })}
        />
        <input
          type="text"
          placeholder={"Enter your name!"}
          onChange={(e) => setFirstNameParams({ firstname: e.target.value })}
        />
      </div>
    </div>
  );
}
