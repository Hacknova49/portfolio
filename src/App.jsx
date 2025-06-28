import React from 'react'
import TextPressure from './TextPressure/TextPressure'
import ScrollReveal from './TextPressure/ScrollReveal';
import GlitchText from './GlitchText/GlitchText';
import MagnetLines from './MagnetLines/MagnetLines';
import Beams from './Beams/Beams';
import TiltedCard from './TiltedCard/TiltedCard';
import FlowingMenu from './FlowingMenu/FlowingMenu'


const demoItems = [
  { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
  { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
  { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
  { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
];

function App() {

  return (
    <>
      {/* Beams background for the entire page */}
      <div style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}>
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>
      {/* Main content */}
      <div className='bg-black/75 relative z-10 min-h-screen'>
        <div style={{ height: '600px', alignContent: 'left', background: 'none' }}>
          <TextPressure
            text="HACKNOVA"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="white"
            strokeColor="#ff0000"
            minFontSize={60}
          />
        </div>
        <div className='grid grid-cols-4 gap-x-8 gap-y-8 justify-items-center'>
          <div>
            <TiltedCard
              imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="Kendrick Lamar - GNX"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
            />
          </div>
          <div>
            <TiltedCard
              imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="Kendrick Lamar - GNX"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
            />
          </div>
          <div>
            <TiltedCard
              imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="Kendrick Lamar - GNX"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
            />
          </div>
          <div>
            <TiltedCard
              imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="Kendrick Lamar - GNX"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
            />
          </div>
        </div>

        <div style={{ height: '600px', position: 'relative', marginTop: '80px' }} >
          <FlowingMenu items={demoItems} />
        </div>

        <div className='margin-top-10px'>
          <GlitchText
            speed={0.1}
            enableShadows={false}
            enableOnHover={true}
            className='custom-class'
          >
            DISCOVER ME
          </GlitchText>
        </div>
        <div>
          <MagnetLines
            rows={9}
            columns={9}
            containerSize="60vmin"
            lineColor="white"
            lineWidth="0.8vmin"
            lineHeight="5vmin"
            baseAngle={0}
            style={{ margin: "2rem auto" }}
          />
        </div>
        <div className='grid grid-cols-4 gap-4'>
          <div>
            <button>HELLO</button>
          </div>
          <div>
            <button>HELLO</button>
          </div>
          <div>
            <button>HELLO</button>
          </div>
          <div>
            <button>HELLO</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
