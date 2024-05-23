import CallList from '@/components/CallList';
import React from 'react';

const Upcoming = () => {
  return (
    <section className="flex size-full flex-col gap-10 mt-12 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold">
        Upcoming
      </h1>
      <CallList type="upcoming" />
    </section>
  );
}

export default Upcoming;
