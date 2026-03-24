export type Community = {
  id: number;
  name: string;
  slug: string;
  description: string;
  members: number;
};

export const communities: Community[] = [
  {
    id: 1,
    name: "Web Development",
    slug: "web-development",
    description: "Learn HTML, CSS, JavaScript, and modern web frameworks.",
    members: 1200,
  },
  {
    id: 2,
    name: "Mobile Development",
    slug: "mobile-development",
    description: "Build mobile apps using Flutter, React Native, and Swift.",
    members: 850,
  },
  {
    id: 3,
    name: "UI/UX Design",
    slug: "ui-ux",
    description:
      "Design beautiful and user-friendly interfaces and experiences.",
    members: 640,
  },
];
