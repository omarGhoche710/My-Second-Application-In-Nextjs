import Link from "next/link";

const Navbar = () => {
  // throw new Error("Navbar component is not implemented yet.");
  return (
    <header className="border-b border-(--main-color) backdrop-blur bg-white/80">
      <nav className="max-w-6xl mx-auto py-6 px-4 flex justify-between items-center">
        <Link
          href="/"
          className="
            text-(--main-color)
            text-3xl
            font-bold
            transition-colors
            duration-300
            hover:text-(--secondary-color)
          "
        >
          DevConnect
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/about"
            className="text-gray-700 text-xl font-semibold hover:text-(--main-color) transition-colors duration-300"
          >
            About
          </Link>

          <Link
            href="/communities"
            className="text-gray-700 text-xl font-semibold hover:text-(--main-color) transition-colors duration-300"
          >
            Communities
          </Link>

          <Link
            href="/topics"
            className="text-gray-700 text-xl font-semibold hover:text-(--main-color) transition-colors duration-300"
          >
            Topics
          </Link>

          <Link
            href="/developers"
            className="text-gray-700 text-xl font-semibold hover:text-(--main-color) transition-colors duration-300"
          >
            Developers
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
