import { VirtualAulaSummary } from "../other/VirtualAulaSummary/VirtualAulaSummary";

export const CoursesSection = () => {
  return (
    <div className="bg-[#081838] h-[25rem] py-3">
      <div className="text-center mt-20  ">
        <h2 className="font-bold text-black text-4xl text-white">
          Últimas plazas{" "}
          <span
            className="
          text-center bg-contain mt-2 inset-y-1/2 left-1/2 right-2/4 py-[2px] px-[30px] bg-no-repeat
          bg-[url('https://imaginaformacion.com/plasmic/imagina_formacion_landing_components/images/strokePruebaOnlinewebp.webp')]"
          >
            Cursos Online
          </span>
        </h2>
      </div>
      <div className="flex place-content-center text-white">
        <VirtualAulaSummary />
      </div>
    </div>
  );
};
