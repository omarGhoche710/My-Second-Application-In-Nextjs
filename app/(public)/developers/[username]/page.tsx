import Link from "next/link";
import React from "react";
import { developers } from "@/data/developers";
import { posts } from "@/data/posts";

const page = async ({ params }: { params: Promise<{ username: string }> }) => {
  const { username } = await params;
  const developer = developers.find((d) => d.username === username);

  if (!developer) {
    return (
      <section>
        <h1 className="text-3xl font-bold">Developer not found</h1>
      </section>
    );
  }

  const developerPosts = posts.filter((p) => p.username === username);

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{developer.name}</h1>
        <p className="text-gray-800 font-semibold">{developer.role}</p>
        <p className="text-gray-600">{developer.bio}</p>
      </div>

      {developerPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {developerPosts.map((p) => (
            <div
              key={p.id}
              className="border border-gray-300 rounded-xl p-4 space-y-4"
            >
              <h3 className="text-xl font-bold">{p.title}</h3>

              <Link
                href={`/developers/${username}/posts/${p.slug}`}
                className="text-(--main-color) hover:underline"
              >
                View details
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h3 className="text-xl font-bold">No posts available</h3>
        </div>
      )}

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
