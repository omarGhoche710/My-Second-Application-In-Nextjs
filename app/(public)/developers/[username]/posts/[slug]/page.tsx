import React from "react";
import { developers } from "@/data/developers";
import { posts } from "@/data/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    username: string;
    slug: string;
  }>;
};

const page = async ({ params }: PageProps) => {
  const { username, slug } = await params;
  const developer = developers.find((d) => d.username === username);

  if (!developer) {
    notFound();
  }

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{developer.name}</h1>
        <p className="text-gray-600">{developer.role}</p>
      </div>

      <div className="border border-gray-300 rounded-xl p-4 w-fit space-y-2">
        <h3 className="text-xl font-semibold">{post.title}</h3>
        <p className="text-gray-600 max-w-2xl">{post.content}</p>
      </div>

      <Link
        href={`/developers/${username}`}
        className="text-(--main-color) hover:underline"
      >
        ← Back to {developer.name} profile
      </Link>
    </section>
  );
};

export default page;
