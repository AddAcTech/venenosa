import React from "react";

function About() {
  return (
    <div id="about" className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
      <div className="flex flex-col mx-auto md:items-end md:mx-0 font-bold text-center">
        <div className="w-60 relative flex">
          <img
            src="https://e7.pngegg.com/pngimages/219/400/png-clipart-mug-of-beer-big-cup-beer.png"
            alt=""
          />
        </div>
        <div className="absolute text-accent flex flex-col translate-y-full">
          <h2 className="text-3xl mt-2">Sobre Nosotros</h2>
          <h3 className="text-xl">El mejor bar de la ciudad</h3>
        </div>
      </div>
      <div className="flex flex-col mx-auto md:mx-0 gap-4">
        <div className="flex gap-2">
          <img src="" alt="" className="h-24 w-24 bg-cover" />
          <div className="flex flex-col justify-center gap-2">
            <h2 className="font-bold">Las mejores bebidas</h2>
            <p>Deliciosas bebidas completas</p>
          </div>
        </div>
        <div className="flex gap-2">
          <img src="" alt="" className="h-24 w-24 bg-cover" />
          <div className="flex flex-col justify-center gap-2">
            <h2 className="font-bold">Queremos llevarte diversion</h2>
            <p>El mejor ambiente para pasar el rato</p>
          </div>
        </div>
        <div className="flex gap-2">
          <img src="" alt="" className="h-24 w-24 bg-cover" />
          <div className="flex flex-col justify-center gap-2">
            <h2 className="font-bold">Queremos llevarte diversion</h2>
            <p>El mejor ambiente para pasar el rato</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
