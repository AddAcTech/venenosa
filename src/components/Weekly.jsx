import React from "react";
import prom from "../assets/promo.jpg";

function Weekly() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="max-w-xs flex flex-col items-center p-4 bg-secondary mx-auto rounded-md">
        <img src={prom} className=" rounded-md" />
        <div className="py-2 w-full">
          <h1 className="font-bold">Azulito</h1>
          <p>Escarchado con miguelito de mora y tamarindo azul</p>
          <p className="font-bold">77$</p>
        </div>
      </div>
      <div className="max-w-xs flex flex-col items-center p-4 bg-secondary  mx-auto rounded-md">
        <img src={prom} className=" rounded-md" />
        <div className="py-2 w-full">
          <h1 className="font-bold">Azulito</h1>
          <p>Escarchado con miguelito de mora y tamarindo azul</p>
          <p className="font-bold">77$</p>
        </div>
      </div>
      <div className="max-w-xs flex flex-col items-center p-4 bg-secondary  mx-auto rounded-md">
        <img src={prom} className=" rounded-md" />
        <div className="py-2 w-full">
          <h1 className="font-bold">Azulito</h1>
          <p>Escarchado con miguelito de mora y tamarindo azul</p>
          <p className="font-bold">77$</p>
        </div>
      </div>
      <div className="max-w-xs flex flex-col items-center p-4 bg-secondary  mx-auto rounded-md">
        <img src={prom} className=" rounded-md" />
        <div className="py-2 w-full">
          <h1 className="font-bold">Azulito</h1>
          <p>Escarchado con miguelito de mora y tamarindo azul</p>
          <p className="font-bold">77$</p>
        </div>
      </div>
    </div>
  );
}

export default Weekly;
