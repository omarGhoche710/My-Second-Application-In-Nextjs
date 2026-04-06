"use client";
import { title } from "process";
import { useEffect, useState } from "react";

const Page = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    // setUsers(null);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  if (!users) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 onClick={() => setUsers(null)}>Users</h1>
      {users?.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default Page;
