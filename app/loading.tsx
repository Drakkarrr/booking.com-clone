import { Skeleton } from '@/components/ui/skeleton';

function Loading() {
  return (
    <section>
      <div className='mx-auto max-w-7xl'>
        <p className='text-center animate-pulse font-bold text-[#013B94] pt-10'>
          Please wait as were just scanning the market for the best deals!
        </p>
      </div>

      <div className='flex justify-center py-10'>
        <div className='w-10 h-10 bg-[#013B94] rounded-full animate-bounce'></div>
      </div>

      <div className='p-5 space-y-2'>
        {[...Array(10)].map((_, i) => (
          <div key={i} className='flex mx-auto space-x-2 max-w-7xl'>
            <Skeleton className='w-20 h-20 rounded-lg md:h-44 md:w-44' />
            <Skeleton className='w-full rounded-lg h-44' />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Loading;
