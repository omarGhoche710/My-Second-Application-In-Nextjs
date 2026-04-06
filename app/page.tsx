import PostTitle from "@/components/PostTitle";
import Link from "next/link";
import React, { Suspense } from "react";

const page = () => {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <h1 className="text-4xl text-gray-900 font-bold">
          Welcome to <span className="text-(--main-color)">DevConnect</span>
        </h1>
      </div>
      <Suspense
        fallback={
          <p className="text-gray-600 max-w-2xl">⌛ Loading post title...</p>
        }
      >
        <PostTitle />
      </Suspense>
      <div className="space-x-4">
        <Link
          href={"/communities"}
          className="inline-block text-white bg-(--main-color) px-4 py-2 rounded-lg shadow-[0_0_5px_0_var(--main-color)] hover:shadow-[0_0_10px_0_var(--main-color)] transition duration-300"
        >
          Visit Our Communities
        </Link>
        <Link
          href={"/topics"}
          className="inline-block text-(--main-color) bg-gray-100 px-4 py-2 rounded-lg shadow-[0_0_5px_0_var(--main-color)] hover:shadow-[0_0_10px_0_var(--main-color)] transition duration-300"
        >
          Explore Topics
        </Link>
      </div>
    </section>
  );
};

export default page;
