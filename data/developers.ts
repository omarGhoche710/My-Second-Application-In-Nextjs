export type Developer = {
  id: number;
  username: string;
  name: string;
  role: string;
  bio: string;
  rating: number;
  isNew: boolean;
};

export const developers: Developer[] = [
  {
    id: 1,
    username: "mohamed",
    name: "Mohamed Ghoch",
    role: "Frontend Developer",
    bio: "Passionate about React and building modern UI.",
    rating: 4.8,
    isNew: false,
  },
  {
    id: 2,
    username: "ahmad",
    name: "Ahmad M3oush",
    role: "Backend Developer",
    bio: "Specialized in Node.js and database design.",
    rating: 4.5,
    isNew: true,
  },
  {
    id: 3,
    username: "nabil",
    name: "Nabil Ka3kour",
    role: "UI Designer",
    bio: "Loves creating clean and simple user interfaces.",
    rating: 4.2,
    isNew: true,
  },
];
