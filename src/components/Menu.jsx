import React from "react";
import prom from "../assets/promo.jpg";

function Menu() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <div className="flex gap-2 odd:bg-secondary p-2 rounded-md">
        <img src={prom} className="h-28 w-28 my-auto rounded-md" />
        <div>
          <h1 className="font-bold text-xl">Azulito</h1>
          <p>
            Vodka con refresco sabor mora azul, escarchado con tamarindo azul y
            miguelito de mora
          </p>
          <span className="font-bold text-accent">$60</span>
        </div>
      </div>
      <div className="flex gap-2 odd:bg-secondary p-2 rounded-md">
        <img src={prom} className="h-28 w-28 my-auto rounded-md" />
        <div>
          <h1 className="font-bold text-xl">Azulito</h1>
          <p>
            Vodka con refresco sabor mora azul, escarchado con tamarindo azul y
            miguelito de mora
          </p>
          <span className="font-bold text-accent">$60</span>
        </div>
      </div>
      <div className="flex gap-2 odd:bg-secondary p-2 rounded-md">
        <img src={prom} className="h-28 w-28 my-auto rounded-md" />
        <div>
          <h1 className="font-bold text-xl">Azulito</h1>
          <p>
            Vodka con refresco sabor mora azul, escarchado con tamarindo azul y
            miguelito de mora
          </p>
          <span className="font-bold text-accent">$60</span>
        </div>
      </div>
    </div>
  );
}

export default Menu;
