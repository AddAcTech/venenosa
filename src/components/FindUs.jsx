import React from "react";
import { FaPhoneAlt, FaLocationArrow, FaClock } from "react-icons/fa";
function FindUs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-[#131416]">
      <div>
        <img
          src="https://scontent.fmex2-2.fna.fbcdn.net/v/t39.30808-6/359845185_3651843368435628_7317856996571209362_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEIizGGbyFSDsMeSvknDvo0e3Gp-NRaMuF7can41Foy4fq8LtHYW-DQzo50KkljkgPodnJSL3N1jJVI6w5Bswfo&_nc_ohc=xnjwGHGZ9XwAX-sSKrO&_nc_ht=scontent.fmex2-2.fna&oh=00_AfCfzKtR-ass-6YvJKJLRYVekhMkIAhuT5z_iFpfm6ojKA&oe=65652662"
          alt="La venenosa Logo"
        />
      </div>
      <div className="md:justify-center my-2 px-4 flex flex-col gap-1">
        <p className="font-bold text-xl text-center md:text-start">
          Visitanos:
        </p>
        <div className="flex flex-col md:flex-row gap-2 items-center">
          <FaLocationArrow />
          <p className="text-center md:text-start">
            Av.Chimaluacan y Av. Vicente Riva palacio. Frente a la estacion del
            mexibus.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <FaClock />
          <p>Horarios:</p>
          <div>
            <p>Lunes - Jueves: 5pm a 10pm</p>
            <p>Viernes y Sabados: 5pm a 1am</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 items-center">
          <FaPhoneAlt />
          <p>Telefono: 12123123</p>
        </div>
      </div>
    </div>
  );
}

export default FindUs;
