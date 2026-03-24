import Link from "next/link";
import React from "react";

type DeveloperCardProps = {
  name: string;
  role: string;
  username: string;
};

const DeveloperCard = ({ name, role, username }: DeveloperCardProps) => {
  return (
    <div className="border border-gray-300 p-4 rounded-xl space-y-4">
      <div className="space-y-2">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>

      <div>
        <Link
          href={`/developers/${username}`}
          className="text-(--main-color) hover:underline"
        >
          View profile
        </Link>
      </div>
    </div>
  );
};

export default DeveloperCard;
