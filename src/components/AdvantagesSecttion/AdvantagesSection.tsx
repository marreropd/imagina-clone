import { ReactNode } from "react";
import { IAdvatages } from "../../utils/IAdvantages";
import { hardCodedAdvantages as advantages } from "../../utils/hardCodedAdvatages";
import { Link } from "react-router-dom";
import "./AdvantagesSectionStyles.css";
export const AdvantagesSection = () => {
  return (
    <div className="bg-[#ECEF5]">
      <div className="text-center mt-32 mb-9">
        <h2 className="font-bold text-black text-4xl">
          Ventajas de Nuestros{" "}
          <span className="text-violet-800">Cursos Online</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-3 border rounded-lg shadow h-min rounded">
          <div className="font-normal text-gray-700 dark:text-gray-400">
            {advantages.map((advantages: IAdvatages) => {
              return (
                <span className="flex p-6" key={advantages.title}>
                  <span className="text-start text-violet-800 -mt-2 mr-1">
                    {advantages.icon as ReactNode}
                  </span>
                  <span>
                    <p className="font-bold text-black text-lg">
                      {advantages.title}
                    </p>
                    <span className=" text-black">
                      {advantages.description}
                    </span>
                  </span>
                </span>
              );
            })}
          </div>
        </div>
        <div className="border bg-center rounded-lg shadow h-min[610px] self-center max-w-screen-md bg-cover bg-no-repeat h-[610px] w-[510px] bg-[url('https://imaginaformacion.com/plasmic/imagina_formacion_landing_components/images/onlineVentajaswebp.webp')]	"></div>
      </div>
      <div className="text-center p-14">
        <Link
          to={""}
          className="get-button-effect-blue bg-[#081838] py-3 px-12 rounded-lg font-semibold text-white"
        >
          Solicitar informacion
        </Link>
      </div>
    </div>
  );
};
