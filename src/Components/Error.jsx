import { useRouteError } from "react-router-dom";

function Error() {

  let err = useRouteError();
  console.log('Error',err);

  return (
    <>
      <h1 className="text-4xl text-center">Oops Something went Wrong🫥</h1>
      <h2 className="text-4xl text-center">{err.status} not found </h2>
      <h2 className="text-4xl text-center">{err.data}</h2>
    </>
  );
}

export default Error;
