import Link from "next/link";

export default function Layout({children}) {
    return (
        <>
            <div className="max-w-3xl mx-auto flex justify-between items-center px-4 py-8 text-gray-900">
                <div className="flex items-center">
                    <img src="/kiteframe-logo.png" alt="KiteFrame Logo"/>
                    <span className="font-semibold text-4xl pb-3">KiteFrame</span>
                </div>
                <nav className="space-x-10">
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
            <div className="py-12">
                {children}
            </div>
        </>
    );
}