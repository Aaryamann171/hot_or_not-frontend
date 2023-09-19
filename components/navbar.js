import Link from "next/link"

const Navbar = () => {
    return (
        <div className="py-2 text-2xl font-bold flex justify-between border-black border-b-4 px-10">
            <Link href="/">Home</Link>
            <Link href="/leaderboard">Leaderboard</Link>
        </div>
    ) 
}

export default Navbar;