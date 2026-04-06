import "./globals.css";

const GlobalNotFound = () => {
  return (
    <html>
      <body>
        <main className="flex justify-center items-center min-h-screen">
          <section className="space-y-6 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900">
                404 - Page Not Found
              </h1>
              <p className="text-gray-600 max-w-2xl">
                The page you are looking for does not exist. It might have been
                removed, renamed, or is temporarily unavailable.
              </p>
            </div>

            <a
              href="/"
              className="bg-(--main-color) text-white px-4 py-2 rounded-lg shadow-[0_0_5px_0_var(--main-color)] hover:shadow-[0_0_10px_0_var(--main-color)] hover:bg-(--secondary-color) transition"
            >
              Go Back Home
            </a>
          </section>
        </main>
      </body>
    </html>
  );
};

export default GlobalNotFound;
