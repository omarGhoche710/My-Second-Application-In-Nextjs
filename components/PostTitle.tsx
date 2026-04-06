import React from "react";

export default async function PostTitle() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();

  return <p className="text-gray-600 max-w-2xl">{data.title}</p>;
}
