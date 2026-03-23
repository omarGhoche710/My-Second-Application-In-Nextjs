import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <h1 className="text-4xl text-gray-900 font-bold">
          Welcome to <span className="text-(--main-color)">DevConnect</span>
        </h1>
        <p className="text-gray-600 max-w-2xl">
          Explore communities and topics to connect with developers like you,
          discover new technologies, ask questions, and learn from experienced
          members of the developer community.
        </p>
      </div>

      <div className="space-x-4">
        <Link
          href={"/communities"}
          className="inline-block border border-(--main-color) text-(--main-color) px-4 py-2 rounded-lg hover:text-white hover:bg-(--main-color) transform hover:-translate-y-1 transition duration-300"
        >
          Visit Our Communities
        </Link>
        <Link
          href={"/topics"}
          className="inline-block border border-(--main-color) text-(--main-color) px-4 py-2 rounded-lg  hover:text-white hover:bg-(--main-color) transform hover:-translate-y-1 transition duration-300"
        >
          Explore Topics
        </Link>
      </div>
    </section>
  );
};

export default page;
