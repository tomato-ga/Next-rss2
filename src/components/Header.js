import Link from "next/link";

const Header = () => {
    return (
        <>
        <header className="border-b flex items-center h-16 px-8">
            <Link href='/'>
                エロコメスト
            </Link>
        </header>
        </>
    )
}

export default Header;