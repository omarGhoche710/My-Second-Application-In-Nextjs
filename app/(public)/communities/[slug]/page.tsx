import React from "react";
import { communities } from "@/data/communities";
import Link from "next/link";
import { notFound } from "next/navigation";
import JoinButton from "@/components/JoinButton";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const community = communities.find((c) => c.slug === slug);

  if (!community) {
    notFound();
  }

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{community.name}</h1>
        <p className="text-gray-600">{community.description}</p>
        <p className="text-gray-900">Members: {community.members}</p>
      </div>

      <div>
        <JoinButton />
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
