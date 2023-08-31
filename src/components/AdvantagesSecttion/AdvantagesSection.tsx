import { ReactNode } from "react";
import { IAdvatages } from "../../utils/IAdvantages";
import { hardCodedAdvantages as advantages } from "../../utils/hardCodedAdvatages";

export const AdvantagesSection = () => {
  return (
    <div>
      <div className="text-center p-9">
        <h1>Ventajas de Nuestros Cursos Online</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-3 border rounded-lg shadow h-min rounded">
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {advantages.map((advantages: IAdvatages) => {
              return (
                <div className="flex p-6">
                  <div className="text-start text-violet-800 -mt-3 mr-1">
                    {advantages.icon as ReactNode}
                  </div>
                  <div>
                    <h1 className="font-bold text-black">{advantages.title}</h1>
                    <div className=" text-black">{advantages.description}</div>
                  </div>
                </div>
              );
            })}
          </p>
        </div>
        <div className="border bg-center rounded-lg shadow h-min[610px] self-center max-w-screen-md bg-cover bg-no-repeat h-[610px] w-[510px] bg-[url('https://imaginaformacion.com/plasmic/imagina_formacion_landing_components/images/onlineVentajaswebp.webp')]	"></div>
      </div>
    </div>
  );
};
