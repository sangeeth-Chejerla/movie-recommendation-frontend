import Link from "next/link";

export default function Navbar(){
    return(
        <>
<header className="px-4 lg:px-6 h-14 flex items-center bg-black">
  <h1 className="text-4xl text-white">Cinema DB</h1>
  <nav className="ml-auto flex gap-4 sm:gap-6">
    <Link className="text-sm font-medium hover:underline underline-offset-4 text-white" href="/">
      Home
    </Link>
    <Link className="text-sm font-medium hover:underline underline-offset-4 text-white" href="/movies">
      Movies
    </Link>
  </nav>
</header>
        </>
    )
}
