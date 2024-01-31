import React from 'react';
import Link from 'next/link'

export const Sidebar = ({ sidebar }) => {
  return (
    <ul>
      {sidebar.map((item) => (
        <li key="aaa">
          <Link href={item[1]}>
            {item[0]}
          </Link>
        </li>
      ))}
    </ul>
  );
};