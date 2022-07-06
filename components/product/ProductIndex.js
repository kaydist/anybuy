import React from "react";
import { useRouter } from "next/router";

function ProductIndex({ title, link, children }) {
  const router = useRouter();

  const routing = () => {
    router.push({
      pathname: `/category/${link}`,
      query: { title: title, link: link },
    });
  };

  return (
    <section className="mt-20 w-full">
      <div className="flex justify-between items-start w-full mb-4">
        <h3 className="font-extrabold text-xl">{title}</h3>
        <h3 className="hover:cursor-pointer" onClick={routing}>
          See All {`>`}
        </h3>
      </div>
      <div className="flex flex-row items-center sm:justify-between gap-8 overflow-x-auto w-full sm:w-full flex-nowrap py-2 pr-8 lg:px-0">
        {children}
      </div>
    </section>
  );
}

export default ProductIndex;
