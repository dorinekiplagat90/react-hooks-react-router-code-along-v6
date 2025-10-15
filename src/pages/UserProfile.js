import { useEffect, the useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function UserProfile() {
  const [user, setUser] = useState({});
  const { id } = useParams(); // <-- pulls :id from URL

  useEffect(() => {
    fetch(`http://localhost:4000/users/${id}`)
      .then((r) => r.json())
      .then(setUser)
      .catch(console.error);
  }, [id]);

  if (!user.name) {
    return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
          <h1>Loading...</h1>
        </main>
      </>
    );
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{user.name}</h1>
        {/* add more user fields here */}
      </main>
    </>
  );
}

export default UserProfile;