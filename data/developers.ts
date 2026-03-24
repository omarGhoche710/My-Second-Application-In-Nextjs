export type Developer = {
  id: number;
  username: string;
  role: string;
  bio: string;
};

export const developers: Developer[] = [
  {
    id: 1,
    username: "omar",
    role: "Frontend Developer",
    bio: "Passionate about React and building modern UI.",
  },
  {
    id: 2,
    username: "ahmad",
    role: "Backend Developer",
    bio: "Specialized in Node.js and database design.",
  },
  {
    id: 3,
    username: "sara",
    role: "UI Designer",
    bio: "Loves creating clean and simple user interfaces.",
  },
];
