import React from 'react';

type Props = {
  searchParams: SearchParams;
};

export type SearchParams = {
  url: URL;
  group_adults: string;
  group_children: string;
  no_rooms: string;
  checkin: string;
  checkout: string;
};

const SearchPage = ({ searchParams }: Props) => {
  console.log(searchParams);

  return (
    <div>
      SearchPageee
      <p>{searchParams.group_adults}</p>
      <p>{searchParams.group_children}</p>
      <p>{searchParams.no_rooms}</p>
      <p>{searchParams.checkin}</p>
      <p>{searchParams.checkout}</p>
    </div>
  );
};

export default SearchPage;
