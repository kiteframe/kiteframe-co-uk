import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <div className="max-w-3xl flex flex-col md:flex-row mx-auto justify-between items-center px-4 py-5 md:py-8 text-gray-900">
        <Link href="/" className="flex items-center mb-3 md:mb-0">
          <img
            src="/kiteframe-logo.svg"
            alt="KiteFrame Logo"
            className="h-16"
          />
          <span className="font-semibold text-3xl ml-2">KiteFrame</span>
        </Link>
        <nav className="flex items-center space-x-10">
          <Link href="/">Home</Link>
          <Link href="/#contact-us">Contact Us</Link>
          <Link href="/guides">Guides</Link>
        </nav>
      </div>
      <div>{children}</div>
    </>
  );
}
