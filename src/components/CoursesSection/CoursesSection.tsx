import { useEffect, useState } from "react";
import { hardCodedCourses } from "../../utils/hardCodedCourses";
import { VirtualAulaSummary } from "../other/VirtualAulaSummary/VirtualAulaSummary";
import _ from "lodash";
import * as dayjs from "dayjs";

export const CoursesSection = () => {
  /*   const [courses, setCourses] = useState<object | undefined>(undefined);
  useEffect(() => {
    const groupedByDate = _.mapValues(
      _.groupBy(hardCodedCourses, ({ nextStartDate }) => nextStartDate)
    );
  }, []); */

  const formatDateToShow = (date: Date | undefined) => {
    const month = dayjs(date, "es").format("MMMM");
    const day = dayjs(date, "es").format("DD");
    const firstThreeLettersMonth = month.slice(0, 4).toUpperCase();

    return `${day} ${firstThreeLettersMonth}`;
  };

  return (
    <div className="bg-[#081838] h-full py-3">
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

      <div className="mx-24 py-10">
        {hardCodedCourses.map((element) => {
          return (
            <>
              <div className="flex items-center py-2">
                <div className="bg-[#5c59e3] text-xl text-white round-left rounded-s-lg p-1 px-2 font-bold">
                  {formatDateToShow(element.nextStartDate)}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMinYMin slice"
                  viewBox="0 0.4 16 30"
                  height="2.2em"
                  width="1.4em"
                  className="plasmic-default__svg plasmic_imagina_formacion_landing_components_all__fiRTt PlasmicConvocatoriasItemFecha_arrowShape__n0Zyr"
                  style={{ fill: "#5c59e3" }}
                >
                  <path d="M13.348 12.013L0 0v27l13.348-12.013a2 2 0 000-2.974z"></path>
                </svg>
              </div>
              <div className="flex sm:flex-row bg-white rounded-md flex-col py-3 mb-3">
                {/* COL1 */}
                <div className="basis-[12%] flex items-center justify-center">
                  <img
                    src={element.courseImage}
                    alt="course-image"
                    width={70}
                  />
                </div>
                {/* COL 2 */}
                <div className="basis-[85%] flex flex-col sm:text-start text-center">
                  <div className="font-semibold pt-4 text-lg">
                    {element.title}
                  </div>

                  <div className="flex sm:flex-row bg-white rounded-md flex-col items-center  py-4 pe-5">
                    <div className="bg-[#081838] text-sm py-2.5 rounded-md font-medium text-white w-[12rem] text-center">
                      % {element.duration} horas lectivas
                    </div>
                    <div className="bg-[#081838] text-sm ms-[1rem] py-2.5 rounded-md font-medium text-white w-[12rem] text-center">
                      %{" "}
                      {element.isLimitedPlaces
                        ? "Plazas ilimitadas"
                        : element.placesAvaiables + " Plazas"}
                    </div>
                    <div className="bg-[#081838] text-sm ms-[1rem] py-2.5 rounded-md font-medium text-white w-[12rem] text-center">
                      % Hasta {element.bonus} bonificable
                    </div>
                    <div className="bg-[#ddff0f] text-xs ms-[1rem] py-2.5 rounded-md font-semibold w-[8rem] text-center ">
                      {(element.placesAvaiables as number) < 10
                        ? "¡ÚLTIMAS PLAZAS!"
                        : element.placesAvaiables + " Plazas Disponibles"}
                    </div>
                  </div>
                </div>
                {/* COL 3 */}
                <div className="basis-1/6 flex items-center justify-center p-5">
                  <div className="get-button-effect-blue bg-[#5c59e3] py-4 rounded-md font-semibold w-[10rem] text-center text-white">
                    ¡Me interesa!
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
