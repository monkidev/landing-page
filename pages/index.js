import Head from "next/head";
import MyNavbar from "../components/MyNavbar";
import HeaderPage from "../components/HeaderPage";
import { useEffect } from "react";
import ProductsHome from "../components/ProductsHome";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function Home() {
  const effect = () => {
    const q = document.getElementById("q");
    q.style.position = "fixed";
    q.style.zIndex = "1";
    const s = window.screen;
    const w = (q.width = s.width);
    const h = (q.height = s.height);
    const ctx = q.getContext("2d");

    const p = Array(Math.floor(w / 10) + 1).fill(0);

    const random = (items) => items[Math.floor(Math.random() * items.length)];

    const hex = "0123456789ABCDEF".split("");

    setInterval(() => {
      ctx.fillStyle = "rgba(255,255,255,.05)";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "rgba(0,0,0,.2)";
      p.map((v, i) => {
        ctx.fillText(random(hex), i * 10, v);
        p[i] = v >= h || v > 50 + 10000 * Math.random() ? 0 : v + 10;
      });
    }, 1000 / 30);
  };

  useEffect(() => {
    effect();
  }, []);

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
      <canvas id="q" />
      <header>
        <MyNavbar />
        <HeaderPage />
      </header>
      <main>
        <ProductsHome />
        <AboutUs/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
