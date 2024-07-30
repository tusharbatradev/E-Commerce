import User from "./Components/User";
import UserClass from "./Components/UserClass";

function About() {
  return (
    <>
      <h1 className="text-4xl">About Page</h1>
      <User name={"Tushar (function)"} />
      <UserClass name={"Tushar (class)"} location={"Ashta (class)"} />
    </>
  );
}

export default About;
