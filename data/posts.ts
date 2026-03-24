export type Post = {
  id: number;
  title: string;
  slug: string;
  content: string;
  username: string;
};

export const posts: Post[] = [
  {
    id: 1,
    title: "How to Learn React",
    slug: "how-to-learn-react",
    content: "Start with components, props, and state.",
    username: "mohamed",
  },
  {
    id: 2,
    title: "React Best Practices",
    slug: "react-best-practices",
    content: "Keep components small and reusable.",
    username: "mohamed",
  },
  {
    id: 3,
    title: "Node.js Tips",
    slug: "nodejs-tips",
    content: "Use middleware to organize your code.",
    username: "ahmad",
  },
  {
    id: 4,
    title: "UI Design Basics",
    slug: "ui-design-basics",
    content: "Focus on spacing, typography, and colors.",
    username: "sara",
  },
];
