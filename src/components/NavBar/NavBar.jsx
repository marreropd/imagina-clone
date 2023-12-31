import { GrSearch } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./NavBarStyles.css";

export const NavBar = () => {
  return (
    <div className="px-14 bg-white h-20 flex items-center navbar sticky top-0 w-full z-50 max-sm:hidden">
      {/*  nav first section */}
      <div className="flex items-center flex-row  space-x-9">
        <div className="logo">
          {" "}
          <div className="w-[110px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 110 20"
              className="plasmic-default__svg plasmic_imagina_formacion_landing_components_all__fiRTt PlasmicImaginaLogo_svg__az64T"
              role="img"
            >
              <path
                d="M18.716 14.452l3.27.032c.942 0 1.877-.184 2.748-.543a7.188 7.188 0 002.33-1.546 7.127 7.127 0 001.558-2.313 7.083 7.083 0 00.547-2.729V.286A.285.285 0 0028.88 0h-8.208c-.956 0-1.903.186-2.787.549a7.283 7.283 0 00-2.362 1.566 7.222 7.222 0 00-1.58 2.344 7.18 7.18 0 00-.554 2.766v10.307a.284.284 0 00.213.277.29.29 0 00.325-.134c.732-1.294 2.252-3.228 4.788-3.228"
                fill="url(#FZorY8hVsa)"
              ></path>
              <path
                d="M7.3 15.766l-2.283.023a5.036 5.036 0 01-3.548-1.458A4.96 4.96 0 010 10.81V5.96a.285.285 0 01.288-.285h5.647A5.116 5.116 0 019.53 7.152a5.015 5.015 0 011.49 3.568v6.884a.285.285 0 01-.207.275.291.291 0 01-.324-.119c-.557-.882-1.584-1.997-3.19-1.997"
                fill="url(#FZorY8hVsb)"
              ></path>
              <path
                d="M94.063 5.883c1.149 0 2.074.345 2.775 1.034.713.69 1.07 1.712 1.07 3.068v5.31h-2.69v-4.896c0-.735-.162-1.281-.483-1.637-.322-.368-.787-.552-1.397-.552-.678 0-1.218.213-1.62.638-.402.413-.604 1.034-.604 1.861v4.586h-2.69V6.02h2.57v1.086c.356-.391.799-.69 1.327-.897a4.517 4.517 0 011.742-.327zm-10.973.162h2.86v9.249h-2.86v-9.25zm.413-1.762c.275.282.632.423 1.07.423.437 0 .794-.141 1.069-.423.275-.293.412-.659.412-1.098 0-.406-.138-.744-.413-1.015-.274-.27-.63-.405-1.069-.405-.438 0-.794.14-1.069.422a1.441 1.441 0 00-.412 1.048c0 .417.137.767.412 1.048zM35.947 2.118h3.072v13.177h-3.072V2.118zm44.774 3.916v8.455c0 1.863-.46 3.247-1.38 4.153-.92.905-2.265 1.358-4.034 1.358a9.61 9.61 0 01-2.653-.358c-.837-.24-1.53-.585-2.08-1.038l1.111-2.114c.407.352.92.63 1.542.83a5.694 5.694 0 001.865.321c.968 0 1.68-.232 2.133-.698.466-.453.7-1.145.7-2.076v-.434c-.73.843-1.746 1.264-3.048 1.264a5.023 5.023 0 01-2.438-.604 4.63 4.63 0 01-1.74-1.736c-.43-.742-.645-1.598-.645-2.567 0-.969.215-1.824.645-2.567a4.492 4.492 0 011.74-1.717 4.901 4.901 0 012.438-.623c1.398 0 2.462.484 3.191 1.453V6.034h2.653zm-5.288 7.247c.74 0 1.344-.226 1.81-.68.478-.465.717-1.069.717-1.811s-.239-1.34-.717-1.793c-.466-.466-1.07-.698-1.81-.698-.742 0-1.351.232-1.83.698-.478.453-.716 1.05-.716 1.793 0 .742.238 1.346.717 1.812.478.453 1.087.68 1.829.68zm-19.014-2.973v5.08h-2.64v-5.002c0-1.449-.759-2.064-1.678-2.064-1.12-.02-1.84.774-1.84 2.502v4.564h-2.62v-4.961c0-1.469-.758-2.103-1.638-2.103-.94 0-1.9.516-1.9 2.182v4.882h-2.619V6.121h2.62v1.806c.2-1.37 1.58-2.044 2.638-2.044 1.38 0 2.439.654 3 1.826.679-1.35 2.139-1.826 3.118-1.826 2.34 0 3.559 1.647 3.559 4.425zm9.238-4.19h2.618v9.267h-2.618v-1.33c-.62.953-1.82 1.568-3.08 1.568-2.578 0-4.498-1.984-4.498-4.859s1.88-4.881 4.559-4.881c1.2 0 2.399.516 3.019 1.468V6.118zm-.08 4.645a2.435 2.435 0 00-1.5-2.267 2.477 2.477 0 00-.94-.194c-1.36 0-2.376 1.112-2.376 2.46 0 1.29 1.02 2.442 2.4 2.442 1.316-.002 2.416-1.113 2.416-2.443v.002zm41.565-4.645h2.618v9.267h-2.618v-1.33c-.62.953-1.819 1.568-3.079 1.568-2.579 0-4.499-1.984-4.499-4.859s1.88-4.881 4.559-4.881c1.2 0 2.399.516 3.019 1.468V6.118zm-.08 4.645a2.427 2.427 0 00-.706-1.732 2.455 2.455 0 00-1.733-.729c-1.36 0-2.376 1.112-2.376 2.46 0 1.29 1.02 2.442 2.399 2.442 1.316-.002 2.416-1.113 2.416-2.443v.002z"
                fill="#26314A"
              ></path>
              <defs>
                <linearGradient
                  id="FZorY8hVsa"
                  x1="-1.036"
                  y1="22.947"
                  x2="36.442"
                  y2="-3.787"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#20BEFD"></stop>
                  <stop offset="1" stopColor="#238DFB"></stop>
                </linearGradient>
                <linearGradient
                  id="FZorY8hVsb"
                  x1="-694.511"
                  y1="7204.55"
                  x2="5452.79"
                  y2="3278.62"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#20BEFD"></stop>
                  <stop offset="1" stopColor="#238DFB"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="input flex text-base 	items-center space-x-2 w-52 flex-1">
          <GrSearch />
          <input
            className="text-base w-2/3"
            title="input"
            placeholder="Buscar cursos"
          ></input>
        </div>
      </div>
      {/*  nav second section */}
      <div className="flex items-center justify-evenly text-sm font-semibold w-full">
        <Link
          to={""}
          type="button"
          className="get-catalog-button-effect kreep  bg-[#FCFF58] py-px px-1 rounded font-bold 
          "
        >
          CATÁLOGO 2023
        </Link>
        <Link to={""} className="hover-underline-animation">
          ¡Últimas plazas!
        </Link>
        <Link to={""} className="hover-underline-animation">
          Cursos
        </Link>
        <Link to={""} className="hover-underline-animation">
          Servicios
        </Link>
        <Link to={""} className="hover-underline-animation">
          FUNDAE
        </Link>
        <Link
          to={""}
          className="get-button-effect-green bg-[#0fddab] py-3 px-12 rounded-lg font-semibold text-white"
        >
          Solicitar informacion
        </Link>
      </div>
    </div>
  );
};
