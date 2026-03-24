import React from "react";
import { communities } from "@/data/communities";
import CommunityCard from "@/components/CommunityCard";

const page = () => {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Communties</h1>
        <p className="text-gray-600">
          Discover communities and connect with developers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {communities.map((c) => (
          <CommunityCard
            key={c.id}
            name={c.name}
            description={c.description}
            slug={c.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default page;
