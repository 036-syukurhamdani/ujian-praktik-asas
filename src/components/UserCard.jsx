import { useState } from "react";

export default function UserCard({ user }) {
  const [like, setLike] = useState(0);
  const [follow, setFollow] = useState(false);

  return (
    <div className="card">
      <h3>⭐ Popular Creator</h3>
      <h2>{user.name}</h2>
      <p>@{user.username}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
      <p>{user.company.name}</p>
      <p>{user.address.city}</p>

      <div className="button-group">
        <button onClick={() => setLike(like + 1)}>
          ❤️ Like {like}
        </button>

        <button onClick={() => setFollow(!follow)}>
          {follow ? "Following" : "Follow"}
        </button>
      </div>
    </div>
  );
}