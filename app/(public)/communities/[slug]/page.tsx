import React from "react";
import { communities } from "@/data/communities";
import Link from "next/link";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const community = communities.find((c) => c.slug === slug);

  if (!community) {
    return (
      <section>
        <h1 className="text-3xl font-bold">Community not found</h1>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{community.name}</h1>
        <p className="text-gray-600">{community.description}</p>
        <p className="text-gray-900">Members: {community.members}</p>
      </div>

      <div>
        <button className="inline-block text-white bg-(--main-color) px-4 py-2 rounded-lg hover:bg-(--secondary-color) transform hover:scale-110 transition duration-300 cursor-pointer">
          Join
        </button>
      </div>

      <div>
        <Link
          href={"/communities"}
          className="text-(--main-color) hover:underline"
        >
          ← Back to Communities
        </Link>
      </div>
    </section>
  );
};

export default page;
