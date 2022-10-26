import { useRouter } from "next/router";
import Link from "next/link";

export default function ContactUs() {

  const router = useRouter();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-6">
        <div className="divide-y-2 divide-gray-200">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
              Get in touch
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Toronto
                </h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>figurnowTO@gmail.com</dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (905) 391-4567</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Winnipeg
                </h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>figurenowWIN@gmail.com</dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (204) 391-4567</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Vancouver
                </h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>figurenowVAN@gmail.com</dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (604) 391-4567</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  New York
                </h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>figurenowNYC@gmail.com</dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (646) 391-5067</dd>
                  </div>
                </dl>
              </div>
              <Link href="/contact_us">
                <a className="text-base text-center lg:text-left text-gray-500">
                Have some feedback for us? Click here to send us your thoughts!
                </a>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
