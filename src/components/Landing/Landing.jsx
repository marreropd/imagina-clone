import { NavBar } from "../NavBar/NavBar";

export const Landing = () => {
  return (
    <>
      <NavBar />

      <div className="w-screen background-image h-[28rem] flex place-items-center justify-center bg-center bg-bottom bg-[url('https://imaginaformacion.com/plasmic/imagina_formacion_landing_components/images/backgroundHero05.webp')]">
        <div className="text-6xl text-white place-items-center flex flex-col justify-center">
          <h1 className="font-bold">Próximas convocatorias</h1>
          <h2 className="font-bold">Modalidad Online</h2>{" "}
          <div className="text-sm w-3/4	text-center mt-10">
            <p>
              A continuación te mostramos las convocatorias de nuestros cursos
              online. En caso de querer formar a un grupo de trabajadores, te
              recomendamos nuestra modalidad Aula Virtual Personalizada
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
