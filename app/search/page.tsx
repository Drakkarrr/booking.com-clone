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

const SearchPage = (props: Props) => {
  console.log(props);

  return <div>SearchPageee</div>;
};

export default SearchPage;
