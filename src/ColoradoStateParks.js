import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import * as RMFunctions from "./parks/RockyMountain";

export default function ColoradoStateParks() {
  return (
    <div>
      <MesaVerde />
    </div>
  );
}

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}

import React from "react";
import MesaVerde from "./parks/MesaVerde";

function ColoradoStateParks() {
  return (
    <div>
      <MesaVerde/>
    </div>
  );
}
export default function ColoradoStateParks() {

}

import { trees, wildlife } from "./parks/RockyMountain";


console.log(trees);
wildlife();

import * as RMFunctions from "./parks/RockyMountain";
console.log(RMFunctions.trees);

RMFunctions.wildlife();
RMFunctions.elevation();

import {
  trees as parkTrees,
  wildlife as parkWildlife,
} from "./parks/RockyMountain";
console.log(parkTrees);
parkWildlife();

