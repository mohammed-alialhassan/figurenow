export default function Footer() {
  return (
    <>
      <div className="mx-auto py-4 sm:py-2 bg-green-600 shadow flex-column">
        <div className="mx-auto pb-2 sm:py-2 flex justify-center ">
          <a
            href="/recipes"
            className="px-2 text-xs text-gray-50 hover:text-blue-400 sm:text-sm"
          >
            {" "}
            Recipes{" "}
          </a>
          <a
            href="/exercises"
            className="px-2 text-xs text-gray-50 hover:text-blue-400  sm:text-sm"
          >
            {" "}
            Exercises{" "}
          </a>
          <a
            href="/counter"
            className="px-2 text-xs text-gray-50 hover:text-blue-400  text-center sm:text-sm"
          >
            {" "}
            Calorie Counter
          </a>
          <a
            href="/about"
            className="px-2 text-xs text-gray-50 hover:text-blue-400 sm:text-sm"
          >
            {" "}
            About{" "}
          </a>
          <a
            href="/community"
            className="px-2 text-xs text-gray-50 hover:text-blue-400  text-center sm:text-sm"
          >
            {" "}
            Community Guidelines{" "}
          </a>
          <a
            href="/api"
            className="px-2 text-xs text-gray-50 hover:text-blue-400  sm:text-sm"
          >
            {" "}
            API{" "}
          </a>
          <a
            href="/contact-us"
            className="px-2 text-xs text-center text-gray-50 hover:text-blue-400 sm:text-sm"
          >
            {" "}
            Contact Us{" "}
          </a>
        </div>
        <div className="mx-auto py-2 flex justify-center text-gray-300 text-xs">
          <h2> @2022 Beniyasha Inc.</h2>
        </div>
      </div>
    </>
  );
}
