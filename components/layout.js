import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <div className="max-w-3xl flex flex-col md:flex-row mx-auto justify-between items-center px-4 py-5 md:py-8 text-gray-900">
        <Link href="/">
          <a className="flex items-center mb-3 md:mb-0">
            <img
              src="/kiteframe-logo.svg"
              alt="KiteFrame Logo"
              className="h-16"
            />
            <span className="font-semibold text-3xl ml-2">KiteFrame</span>
          </a>
        </Link>
        <nav className="flex items-center space-x-10">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/#contact-us">
            <a>Contact Us</a>
          </Link>
          <Link href="/guides">
            <a>Guides</a>
          </Link>
        </nav>
      </div>
      <div>{children}</div>
    </>
  );
}
