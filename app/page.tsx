import Banner from "./components/Banner";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <section className="flex-col items-center justify-center max-w-[1078px] mx-auto mb-10">
      <Hero />
      <Banner />
    </section>
  );
}
