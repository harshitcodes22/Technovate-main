import React from 'react'
import Herobanner from '../Components/Herobanner'
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import { herobanner } from '../Utils/Backgroundtype';
import HackInfo from './HackInfo';
import Theme from './Theme';
import EligibilityCriteria from './EligibilityCriteria';
import Mission from './Mission';
import JoinExpect from './JoinExpect';
import StayTuned from './StayTuned';

function Landingpage() {

  const [init, setInit] = useState(false);
  const [particle, setParticle] = useState(false)

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() =>{
    if(setInit){
      setTimeout(() => {
        setParticle(true);
      }, 2000);
    }

  },[])

  const herobanneroption = useMemo(
    () => (
      herobanner
    ),
    []
  );

  return (

      <>
      <div className="relative w-screen h-screen">
        {
          particle && (
            <Particles id="tsparticles" options={herobanneroption} className="absolute bg-black inset-0">
        </Particles>
          )

        }
        <div className={`absolute w-screen h-auto flex flex-col items-center justify-center  ${particle? "" : "bg-black"}`}>
        <Herobanner />
        <HackInfo />
        <Theme />
        <EligibilityCriteria />
        <Mission />
      <JoinExpect />
      <StayTuned />
        </div>
      </div>
      
      </>

  )
}

export default Landingpage