import React from "react";
import { topics } from "@/data/topics";

const page = () => {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Topics</h1>
        <p className="text-gray-600 max-w-2xl">
          Explore a variety of technical topics, discover new technologies, and
          find discussions that match your interests in the developer community.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {topics.map((topic) => (
          <div key={topic} className="border border-gray-300 rounded-xl p-4">
            <h3 className="text-xl font-semibold">{topic}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
