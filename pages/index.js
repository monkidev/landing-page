import Head from "next/head";
import MyNavbar from "../components/MyNavbar";
import HeaderPage from "../components/HeaderPage";

export default function Home() {

  return (
    <div>
      <Head>
        <title>Monki Dev</title>
        <meta
          name="description"
          content="Startup focada em soluções, para educação e comércio."
        />
        <link rel="icon" href="/monkidev.png" />
      </Head>
      <header>
        <MyNavbar />
        <HeaderPage/>
      </header>
    </div>
  );
}
