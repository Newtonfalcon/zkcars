import Link from 'next/link'

export default function AboutZK() {
  return (
    <div className="absolute top-0 left-0 h-screen w-full flex flex-col justify-center items-start px-6 md:px-24 lg:px-48 z-20">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white font-titanium drop-shadow-xl mb-4">
        Welcome to ZK Cars
      </h1>
      <p className="text-white/90 text-lg md:text-2xl max-w-xl mb-6 drop-shadow-lg">
        ZK Cars is redefining the automotive experience. We combine luxury, technology,
        and sustainability to deliver cars that are not just vehicles but experiences.
      </p>
      <Link
        href="/inventory"
        className="rounded-full bg-indigo-500 px-6 py-3 font-semibold text-white hover:bg-indigo-600 transition-all drop-shadow-lg"
      >
        Explore Our Collection
      </Link>
    </div>
  )
}
