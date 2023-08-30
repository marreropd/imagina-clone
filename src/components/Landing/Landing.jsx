import { NavBar } from "../NavBar/NavBar";
import { SlideTracker } from "../other/slideTracker/SlideTracker";

export const Landing = () => {
  return (
    <>
      <NavBar />
      <section className="w-screen background-image h-[28rem] flex place-items-center justify-center bg-center bg-bottom bg-[url('https://imaginaformacion.com/plasmic/imagina_formacion_landing_components/images/backgroundHero05.webp')]">
        <div className="text-6xl text-white place-items-center flex flex-col justify-center">
          <h1 className="font-bold">Próximas convocatorias</h1>
          <div
            className="text-center mt-2 inset-y-1/2 left-1/2 right-2/4 py-[10px] px-[50px] bg-repeat-y
          bg-[url('https://imaginaformacion.com/plasmic/imagina_formacion_landing_components/images/strokePruebaOnlinewebp.webp')]"
          >
            <h2 className="font-semibold">Modalidad Online</h2>
          </div>

          <div className="text-sm w-3/4	text-center mt-10">
            <p>
              A continuación te mostramos las convocatorias de nuestros cursos
              online. En caso de querer formar a un grupo de trabajadores, te
              recomendamos nuestra modalidad Aula Virtual Personalizada
            </p>
          </div>
        </div>
      </section>

      <section>
        <SlideTracker />
      </section>
    </>
  );
};
