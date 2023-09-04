import { Link } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import { SlideTracker } from "../other/slideTracker/SlideTracker";
import { AdvantagesSection } from "../AdvantagesSecttion/AdvantagesSection";
import { VirtualAulaSummary } from "../other/VirtualAulaSummary/VirtualAulaSummary";
import { CoursesSection } from "../CoursesSection/CoursesSection";

export const Landing = () => {
  return (
    <>
      <NavBar />
      <section className="background-image h-[28rem] flex place-items-center justify-center bg-center bg-bottom bg-[url('https://imaginaformacion.com/plasmic/imagina_formacion_landing_components/images/backgroundHero05.webp')] ">
        <div className="text-6xl text-white place-items-center flex flex-col justify-center">
          <h1 className="font-bold">Próximas Convocatorias</h1>
          <div
            className="text-center mt-2 inset-y-1/2 left-1/2 right-2/4 py-[10px] px-[50px] bg-repeat-y
          bg-[url('https://imaginaformacion.com/plasmic/imagina_formacion_landing_components/images/strokePruebaOnlinewebp.webp')]"
          >
            <h2 className="font-semibold">Modalidad Online</h2>
          </div>
          <VirtualAulaSummary />
        </div>
      </section>

      <section>
        <SlideTracker />
      </section>

      <section className="grid place-items-center  px-24">
        <AdvantagesSection
          generalColor={"text-violet-800"}
          imageUrl={
            "https://imaginaformacion.com/plasmic/imagina_formacion_landing_components/images/onlineVentajaswebp.webp"
          }
          buttonText="Solicitar información"
        />
      </section>

      <section>
        <CoursesSection />
      </section>

      <section className="grid place-items-center px-24">
        <AdvantagesSection
          generalColor={"text-[#27ceb0]"}
          imageUrl={
            "https://imaginaformacion.com/plasmic/imagina_formacion_landing_components/images/onlineVentajaswebp.webp"
          }
          buttonText="¡Me interesa!"
        />
      </section>
    </>
  );
};
