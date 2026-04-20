import DeveloperCard from "@/components/DeveloperCard";
import { developers } from "@/data/developers";
import Link from "next/link";
import React from "react";

const page = async () => {

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Developers</h1>
        <p className="text-gray-600 max-w-2xl">
          Explore developer profiles, discover their skills and expertise, and
          connect with talented members of the community.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {developers.map((d) => (
          <DeveloperCard
            key={d.id}
            name={d.name}
            role={d.role}
            username={d.username}
            rating={d.rating}
          />
        ))}
      </div>

      <div className="space-x-4">
        <Link
          href={"/developers/top-rated"}
          className="inline-block text-white bg-(--main-color) px-4 py-2 rounded-lg shadow-[0_0_5px_0_var(--main-color)] hover:shadow-[0_0_10px_0_var(--main-color)] transition duration-300"
        >
          View Top Rated Developers
        </Link>
        <Link
          href={"/developers/new"}
          className="inline-block text-white bg-(--main-color) px-4 py-2 rounded-lg shadow-[0_0_5px_0_var(--main-color)] hover:shadow-[0_0_10px_0_var(--main-color)] transition duration-300"
        >
          View New Members
        </Link>
      </div>
    </section>
  );
};

export default page;
