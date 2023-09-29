import { NavBar } from "../NavBar/NavBar";
import { SlideTracker } from "../other/slideTracker/SlideTracker";
import { AdvantagesSection } from "../AdvantagesSecttion/AdvantagesSection";
import { VirtualAulaSummary } from "../other/VirtualAulaSummary/VirtualAulaSummary";
import { CoursesSection } from "../CoursesSection/CoursesSection";
import { CollapseFAQ } from "../CollapseFAQ/CollapseFAQ";
import { faqs } from "../../utils/hardCodedFAQ";

export const Landing = () => {
  return (
    <>
      <NavBar />
      <section className="background-image h-[28rem] flex place-items-center justify-center bg-bottom bg-[url('https://imaginaformacion.com/plasmic/imagina_formacion_landing_components/images/backgroundHero05.webp')] ">
        <div className="text-6xl text-white place-items-center flex flex-col justify-center">
          <h1 className="font-bold">Próximas Convocatorias</h1>
          <div
            className="text-center mt-2 inset-y-1/2 left-1/2 right-2/4 py-[10px] px-[50px] bg-no-repeat bg-cover
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

      <section className="grid place-items-center px-24 bg-[#ECEFF5]">
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

      <section className="grid place-items-center px-24 bg-[#ECEFF5]">
        <AdvantagesSection
          generalColor={"text-[#27ceb0]"}
          imageUrl={
            "https://imaginaformacion.com/plasmic/imagina_formacion_landing_components/images/onlineVentajaswebp.webp"
          }
          buttonText="¡Me interesa!"
        />
      </section>

      <section className="px-16 py-10">
        <div className="text-center py-10 text-4xl font-semibold">
          <h3>FAQS - Preguntas Frecuentes</h3>
        </div>
        {faqs.map((faq) => {
          return <CollapseFAQ title={faq.title} content={faq.content} />;
        })}
      </section>
    </>
  );
};
