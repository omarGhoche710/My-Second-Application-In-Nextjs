import React from "react";

type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  return res.json();
}

const page = async () => {
  const users: UserType[] = await getUsers();

  if (users.length === 0) {
    return (
      <section>
        <h1 className="text-3xl font-bold">No users available</h1>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-600">Welcome to your dashboard!</p>
      </div>

      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Our users</h2>

        <div className="grid grid-cols-4 gap-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="border border-gray-300 p-4 rounded-xl space-y-4"
            >
              <h1>{user.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
