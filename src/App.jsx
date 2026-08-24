import FaultyTerminal from "./assets/components/FaultyTerminal.jsx";
import WarpText from "./assets/components/WarpText.jsx"

function BigButton(){
  function handleClick(){
    alert("Oi");
  }
  return(
    <button onClick={handleClick}><Title/></button>
  )
}

function Title(){
  return(
<WarpText
  text="Testing testing"
  color="#ffffff"
  warpStrength={0.08}
  warpScale={1.7}
  speed={0.55}
  pointerInfluence={0.24}
  pointerStrength={0.17}
  refraction={0.1}
  ripple
  fontSize={116}
  fontWeight={800}
  style={{ height: '32px' }}
  fontFamily="inherit"
  letterSpacing={-0.06}
  lineHeight={0.9}
/>
  )
}


function Background(){

  return(
<div style={{ width: '100%', zIndex:-1 ,height: '600px', position: 'absolute', }}>
  {/*inset: 0;
  z-index: 0; */}

  <FaultyTerminal
    scale={1.5}
    gridMul={[2, 1]}
    digitSize={1.1}
    timeScale={1.1}
    pause={false}
    scanlineIntensity={0.5}
    glitchAmount={1}
    flickerAmount={1}
    noiseAmp={1}
    chromaticAberration={0}
    dither={0}
    curvature={0.1}
    tint="#EAB308"
    mouseReact={false}
    mouseStrength={0.5}
    pageLoadAnimation
    brightness={0.4}
  

  />
  
</div>)


}

export default function MyApp(){
  return(
    <>
    <Background/>
    {/* <BigButton/> */}
    <Title/>
    <p>So basically yeah, I got this to work</p>
    <p>I'm using a new framework so it's taking long<br /> but yay, I have a new domain.</p>
    </>
  );
}