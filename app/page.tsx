"use client";

import Image from 'next/image';
import avatar from 'app/wes.png'; // Ensure this path is correct

export default function Page() {
  return (
    <section className="p-8">
      <h1 className="text-2xl font-medium">Welcome to My Home Page!</h1>
      <p className="mt-4">This is a simple home page without any API integrations.</p>
      <div className="mt-8">
        <Image
          src={avatar}
          alt="Avatar"
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
    </section>
  );
}