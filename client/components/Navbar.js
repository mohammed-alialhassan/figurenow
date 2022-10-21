import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import image from "../public/logo.png";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from 'next/image';

export default function Navbar() {

  const router = useRouter(); 

  const navigation = [
    { name: "About", href: "/about", current: false },
    { name: "Calorie Counter", href: "/calorie_counter", current: false },
    { name: "Recipes", href: "/recipes", current: false },
    { name: "Contact Us", href: "/contact_us", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    
    <>
      <div className="hidden sm:block mx-auto py-2 sm:px-4 lg:px-32 lg:py xl:py bg-amber-400 shadow flex-row justify-around">
        <div className="flex justify-between">
          <Link href="/home">
            <a>
              <Image src="https://i.imgur.com/0tM7Fb7.png" className="pt-1" alt="" width='64px' height='64px' />
            </a> 
          </Link>
          
          <div className="py-6 flex justify-between">
            <Link href="/calorie_counter">
            <a
              href="/register"
              className="text-green-700 2xl:text-base font-semibold hover:text-white"
            >
              {" "}
              Get Started!
            </a>
            </Link>
            
          </div>
        </div>
      </div>
      <div className="mx-auto py-2 sm:py-3 sm:px-4 lg:px-2 bg-green-600 lg:bg-green-700 shadow">
        <div className="sm:hidden block px-6 flex justify-between">
        <Link href="/home">
            <a>
              <Image src="https://i.imgur.com/ziUFiMO.png" className="pt-1.5" alt="" width='46px' height='44px' />
            </a> 
          </Link>

          <h1 className="text-white pl-2 py-2 text-3xl font-bold">
            {" "}
            Figurenow{" "}
          </h1>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="flex pt-1 items-center rounded-full text-gray-400 hover:text-gray-600 ">
                <Bars3Icon
                  className="w-10 h-10 stroke-gray-300 hover:stroke-amber-300"
                  fill="none"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/about">
                      <a
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        About
                      </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/calorie_counter">
                      <a
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Calorie Counter
                      </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/recipes">
                      <a
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Recipes
                      </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <form method="POST" action="#">
                    <Menu.Item>
                      {({ active }) => (
                        <Link href="/contact_us">
                        <a
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block w-full px-4 py-2 text-left text-sm"
                          )}
                        >
                          Contact Us
                        </a>
                        </Link>
                      )}
                    </Menu.Item>
                  </form>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex justify-center space-x-12 lg:space-x-20 2xl:space-x-32">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white "
                    : "text-white lg:text-base 2xl:text-lg hover:text-white",
                  "px-3 py-2 rounded-md text-sm font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
