import { Link } from "react-router-dom";

export const VirtualAulaSummary = () => {
  return (
    <div className="text-base w-3/4	text-center mt-10 ">
      <p className="">
        A continuación te mostramos las convocatorias de nuestros cursos online.
        En caso de querer formar a un grupo de trabajadores, te recomendamos
        nuestra modalidad{" "}
        <Link className="font-semibold underline underline" to={""}>
          Aula Virtual Personalizada
        </Link>
      </p>
    </div>
  );
};
