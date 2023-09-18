import React from "react";
import RootLayout from "../../components/Layouts/RootLayout";
import Image from "next/image";
import Head from "next/head";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Next App Home</title>
        <meta name="Home page" description="This is description of next app" />
      </Head>
      <h1>This is home page...</h1>
      <Image
        src="https://images.pexels.com/photos/9638689/pexels-photo-9638689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="image"
        width={500}
        height={500}
        layout="responsive"
      />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
