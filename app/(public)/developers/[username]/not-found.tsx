import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-gray-600">
        Sorry, the resource you are looking for does not exist.
      </p>

      <div className="flex gap-4">
        <Link
          href="/"
          className="bg-(--main-color) text-white px-4 py-2 rounded-lg shadow-[0_0_5px_0_var(--main-color)] hover:shadow-[0_0_10px_0_var(--main-color)] hover:bg-(--secondary-color) transition"
        >
          Go Back Home
        </Link>

        <Link
          href="/developers"
          className="inline-block text-(--main-color) bg-gray-100 px-4 py-2 rounded-lg shadow-[0_0_5px_0_var(--main-color)] hover:shadow-[0_0_10px_0_var(--main-color)] transition duration-300"
        >
          View All Developers
        </Link>
      </div>
    </section>
  );
}
