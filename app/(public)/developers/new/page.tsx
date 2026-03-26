import Link from "next/link";
import React from "react";
import { developers } from "@/data/developers";
import DeveloperCard from "@/components/DeveloperCard";

const page = () => {
  const newDevelopers = developers.filter((d) => d.isNew);

  if (!newDevelopers.length) {
    return (
      <section>
        <h1 className="text-3xl font-bold">No New Developers Found</h1>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">New Members</h1>
        <p className="text-gray-600 max-w-2xl">
          Meet the newest developers who recently joined our community. Explore
          their skills, connect with fresh talent, and welcome them to the
          platform.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {newDevelopers.map((d) => (
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
