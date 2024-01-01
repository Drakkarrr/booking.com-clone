import { trending_data } from '@/data/trending';

export default function Home() {
  return (
    <main className='bg-[#013B94]'>
      <section className='p-6 mx-auto max-w-7xl'>
        <h2 className='text-5xl font-bold text-white'>Find your Next Stay</h2>
        <h3 className='py-5 text-xl text-white'>
          Search low prices on hotels, homes and much more
        </h3>
      </section>

      <section className='p-6 mx-auto mt-10 bg-white rounded-t-lg max-w-7xl'>
        <div className='pt-5'>
          <h3 className='text-xl font-bold'>Trending Destinations</h3>
          <p className='font-light'>
            Most popular choices for travellers from around the world
          </p>
        </div>

        <div className='flex py-5 space-x-4 overflow-x-scroll'>
          {trending_data.map((item) => (
            <div key={item.id} className='space-y-1 cursor-pointer shrink-0'>
              <img
                key={item.id}
                className='object-cover pb-2 rounded-lg w-80 h-72'
                src={item.src}
                alt=''
              />

              <p className='font-bold'>{item.title}</p>
              <p className=''>{item.location}</p>
              <p className='text-sm font-light'>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
