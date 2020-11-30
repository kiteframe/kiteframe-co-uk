import Link from "next/link";

export default function Layout({children}) {
    return (
        <>
            <div className="max-w-3xl mx-auto flex justify-between items-center px-4 py-8 text-gray-900">
                <div className="flex items-center">
                    <img src="/kiteframe-logo.png" alt="KiteFrame Logo" className="h-16"/>
                    <span className="font-semibold text-3xl ml-2">KiteFrame</span>
                </div>
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
            <div>
                {children}
            </div>
        </>
    );
}