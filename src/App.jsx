import { useEffect, useRef, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UserCard from "./components/UserCard";
import SearchBar from "./components/SearchBar";

import UserContext from "./context/UserContext";

export default function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const searchRef = useRef(null);

  // FETCH API
  useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      setUsers(data);
      setFilteredUsers(data);
    });
}, []);

  // SEARCH USER
  function cariUser() {
    const keyword = searchRef.current.value.toLowerCase();

    const hasil = users.filter((user) =>
      user.name.toLowerCase().includes(keyword)
    );

    setFilteredUsers(hasil);
  }

  return (
    <UserContext.Provider value={users}>
      <div className="container">
        <Navbar />

        <SearchBar
          searchRef={searchRef}
          cariUser={cariUser}
        />

        <div className="stats">
          <div className="stat-box">
            <h2>{users.length}</h2>
            <p>Total Users</p>
          </div>

          <div className="stat-box">
            <h2>{filteredUsers.length}</h2>
            <p>Search Result</p>
          </div>
        </div>

        <div className="card-container">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>

        <Footer />
      </div>
    </UserContext.Provider>
  );
}