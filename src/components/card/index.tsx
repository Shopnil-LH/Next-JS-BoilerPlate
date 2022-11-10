import React from 'react';
import { ICard } from '@src/types';

function Card({ link, header, paragraph }: ICard) {
  return (
    <a
      href={link ? link : undefined}
      className="m-4 p-6 text-left no-underline border border-solid border-[#eaeaea] dark:border-[#222] rounded-md text-inherit max-w-xs flex flex-col  transition ease hover:text-[#0070f3] hover:border-[#0070f3] "
    >
      <h2 className="text-2xl mx-0 mt-0 mb-4">{header} &rarr;</h2>
      <p className="text-xl leading-normal m-0">{paragraph}</p>
    </a>
  );
}

export default Card;
