import Link from "next/link";
import React from "react";

type CommunityCardProps = {
  name: string;
  description: string;
  slug: string;
};

const CommunityCard = ({ name, description, slug }: CommunityCardProps) => {
  return (
    <div className="border border-gray-300 p-4 rounded-xl space-y-4">
      <div className="space-y-2">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>

      <div>
        <Link
          href={`/communities/${slug}`}
          className="text-(--main-color) hover:underline"
        >
          View details
        </Link>
      </div>
    </div>
  );
};

export default CommunityCard;
