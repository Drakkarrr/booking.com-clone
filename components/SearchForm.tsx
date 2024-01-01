'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

export const formSchema = z.object({
  location: z.string().min(2).max(50),
  dates: z.object({
    from: z.date(),
    to: z.date(),
  }),
  adults: z
    .string()
    .min(1, {
      message: 'Please select at least 1 adult',
    })
    .max(12, { message: 'Max 12 adults Occupancy' }),
  children: z.string().min(0).max(12, {
    message: 'Max 12 children Occupancy',
  }),
  rooms: z.string().min(1, {
    message: 'Please select at least 1 room',
  }),
});

const SearchForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: '',
      dates: {
        from: undefined,
        to: undefined,
      },
      adults: '1',
      children: '0',
      rooms: '1',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    const checkin_monthday = values.dates.from.getDate().toString();
    const checkin_month = (values.dates.from.getMonth() + 1).toString();
    const checkin_year = values.dates.from.getFullYear().toString();
    const checkout_monthday = values.dates.to.getDate().toString();
    const checkout_month = (values.dates.to.getMonth() + 1).toString();
    const checkout_year = values.dates.to.getFullYear().toString();

    const checkin = `${checkin_year}-${checkin_month}-${checkin_monthday}`;
    const checkout = `${checkout_year}-${checkout_month}-${checkout_monthday}`;

    const url = new URL('https://www.booking.com/searchresults.html');
    url.searchParams.set('ss', values.location);
    url.searchParams.set('group_adults', values.adults);
    url.searchParams.set('group_children', values.children);
    url.searchParams.set('no_rooms', values.rooms);
    url.searchParams.set('checkin', checkin);
    url.searchParams.set('checkout', checkout);

    router.push(`/search?url=${url.href}`);
  }

  return <div>SearchForm</div>;
};

export default SearchForm;
