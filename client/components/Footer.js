import { useRouter } from "next/router";
import Link from "next/link";

export default function Footer() {
  const router = useRouter();

  return (
    <>
      <div className="mx-auto py-4 sm:py-2 bg-green-600 lg:bg-green-700 shadow flex-column">
        <div className="mx-auto pb-2 sm:py-2 flex justify-center ">
          <Link href="/recipes">
            <a className="px-2 text-xs text-gray-50 hover:text-blue-400 sm:text-sm">
              {" "}
              Recipes{" "}
            </a>
          </Link>
          <Link href="/home">
            <a
              href="/exercises"
              className="px-2 text-xs text-gray-50 hover:text-blue-400  sm:text-sm"
            >
              {" "}
              Exercises{" "}
            </a>
          </Link>
          <a
            href="/calorie_counter"
            className="px-2 text-xs text-gray-50 hover:text-blue-400  text-center sm:text-sm"
          >
            {" "}
            Calorie Counter
          </a>
          <Link href="/about">
            <a className="px-2 text-xs text-gray-50 hover:text-blue-400 sm:text-sm">
              {" "}
              About{" "}
            </a>
          </Link>
          <Link href="/home">
            <a className="px-2 text-xs text-gray-50 hover:text-blue-400  text-center sm:text-sm">
              {" "}
              Community Guidelines{" "}
            </a>
          </Link>
          <Link href="/home">
            <a className="px-2 text-xs text-gray-50 hover:text-blue-400  sm:text-sm">
              {" "}
              API{" "}
            </a>
          </Link>
          <Link href="/contact_us">
            <a className="px-2 text-xs text-center text-gray-50 hover:text-blue-400 sm:text-sm">
              {" "}
              Contact Us{" "}
            </a>
          </Link>
        </div>
        <div className="mx-auto py-2 flex justify-center text-gray-300 text-xs">
          <h2> @2022 Beniyasha Inc.</h2>
        </div>
      </div>
    </>
  );
}
