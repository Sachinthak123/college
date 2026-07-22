import heroImage from "../assets/HeroImage.png";
import { HiArrowRight } from "react-icons/hi2";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#08003ab3]"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-4xl text-center text-white">

          <span className="inline-block text-sm md:text-base uppercase tracking-[5px] font-medium border-b border-white pb-2">
            Shaping Futures
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Where Learning <br />
            Meets Excellence
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-8">
            Empowering students with quality education, innovation,
            and real-world experience to shape tomorrow's leaders.
          </p>

          <button className="group mt-10 inline-flex items-center gap-4 bg-white text-[#08003a] px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
            Explore Programs

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#08003a] text-white transition-transform duration-300 group-hover:translate-x-1">
              <HiArrowRight size={20} />
            </span>
          </button>

        </div>
      </div>
    </section>
  );
};

export default Hero;