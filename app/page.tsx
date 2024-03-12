
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Search from "@/components/search"

export default function Component() {
  return (
    <section className="w-full h-screen py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Search Your Favorite Movies
              </h1>
              <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                Find your favorite movies and TV shows with ease. Search by
                title.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2 mx-auto">
             <Search/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

