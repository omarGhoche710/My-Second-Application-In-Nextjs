import React from "react";
import { developers } from "@/data/developers";
import Link from "next/link";
import DeveloperCard from "@/components/DeveloperCard";

const page = () => {
  const topRatedDevelopers = developers.filter((d) => d.rating >= 4.5);

  if (!topRatedDevelopers.length) {
    return (
      <section>
        <h1 className="text-3xl font-bold">No Top Rated Found</h1>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Top Rated</h1>
        <p className="text-gray-600 max-w-2xl">
          Discover the highest-rated developers in our community, known for
          their expertise, reliability, and outstanding contributions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {topRatedDevelopers.map((d) => (
          <DeveloperCard
            key={d.id}
            name={d.name}
            role={d.role}
            username={d.username}
            rating={d.rating}
          />
        ))}
      </div>

      <div>
        <Link
          href={"/developers"}
          className="text-(--main-color) hover:underline"
        >
          ← Back to Developers
        </Link>
      </div>
    </section>
  );
};

export default page;
