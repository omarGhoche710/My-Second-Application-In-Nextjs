export type Developer = {
  id: number;
  username: string;
  name: string;
  role: string;
  bio: string;
};

export const developers: Developer[] = [
  {
    id: 1,
    username: "mohamed",
    name: "Mohamed Ghoch",
    role: "Frontend Developer",
    bio: "Passionate about React and building modern UI.",
  },
  {
    id: 2,
    username: "ahmad",
    name: "Ahmad M3oush",
    role: "Backend Developer",
    bio: "Specialized in Node.js and database design.",
  },
  {
    id: 3,
    username: "nabil",
    name: "Nabil ka3kour",
    role: "UI Designer",
    bio: "Loves creating clean and simple user interfaces.",
  },
];
