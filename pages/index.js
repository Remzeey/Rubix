import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Maximum rubix home page</title>
      </Head>
      <div className="text-2xl mt-0 text-center h-96 font-extrabold text-blue-900 bg-cyan-600 ">
        MAXIMUM RUBIX
      </div>

      <div className=" mx-auto flex flex-wrap w-3/12 gap-7 mt-16 justify-around">
        <div>School LunchBox</div>
        <div>Party Bag Sourvenir</div>
        <div>Handbags</div>
        <div>Shoes</div>
        <div>Bags</div>
        <div>Purses</div>
      </div>
    </div>
  );
}

// export async function getServerSideProps() {}
