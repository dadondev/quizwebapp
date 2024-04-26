import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <main className="w-full h-full bg-white flex items-center  justify-center">
      <Image src={"/loading.gif"} alt="loading" width={400} height={400} />
    </main>
  );
};

export default Loading;
