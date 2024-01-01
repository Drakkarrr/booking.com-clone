export default function Home() {
  return (
    <main className='bg-[#013B94]'>
      <section className='p-6 mx-auto max-w-7xl'>
        <h2 className='text-5xl font-bold text-white'>Find your Next Stay</h2>
        <h3 className='py-5 text-xl text-white'>
          Search low prices on hotels, homes and much more!
        </h3>
      </section>

      <section className='p-6 mx-auto mt-10 bg-white rounded-t-lg max-w-7xl'>
        <div className='pt-5'>
          <h3 className='text-xl font-bold'>Trending Destinations</h3>
          <p className='font-light'>
            Most popular choices for travellers from around the world
          </p>
        </div>
      </section>
    </main>
  );
}
