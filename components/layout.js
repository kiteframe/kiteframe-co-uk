import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between px-4 py-5 text-gray-900 md:flex-row md:py-8">
        <Link href="/" className="mb-3 flex items-center md:mb-0">
          <img
            src="/kiteframe-logo.svg"
            alt="KiteFrame Logo"
            className="h-16"
          />
          <span className="ml-2 text-3xl font-semibold">KiteFrame</span>
        </Link>
        <nav className="flex items-center space-x-10">
          <Link href="/">Home</Link>
          <Link href="/#contact-us">Contact Us</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </div>
      <div>{children}</div>
    </>
  );
}
