export type Post = {
  id: number;
  title: string;
  content: string;
  username: string;
};

export const posts: Post[] = [
  {
    id: 1,
    title: "How to Learn React",
    content: "Start with components, props, and state.",
    username: "omar",
  },
  {
    id: 2,
    title: "Node.js Tips",
    content: "Use middleware to organize your code.",
    username: "ahmad",
  },
  {
    id: 3,
    title: "UI Design Basics",
    content: "Focus on spacing, typography, and colors.",
    username: "sara",
  },
];
