import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <section className="min-h-[60vh] flex flex-col gap-4 justify-center items-center">
      <h1 className="text-4xl font-bold">404 - Page not found</h1>

      <p className="text-gray-600">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="
          inline-block
          bg-(--main-color)
          text-white
          px-4
          py-2
          rounded-lg
          transition
          transform
          hover:shadow-[0_0_10px_0_var(--main-color)]
          duration-300
        "
      >
        Go Back Home
      </Link>
    </section>
  );
};

export default notFound;
