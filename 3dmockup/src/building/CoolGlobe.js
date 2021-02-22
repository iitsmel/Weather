import React,  { useEffect, useState } from 'react';
import Globe from 'react-globe.gl';

const CoolGlobe = () => {
    const [countries, setCountries] = useState({ features: []});
    const [hoverD, setHoverD] = useState();

    useEffect(() => {
      fetch('./ne_110m_admin_0_countries.geojson').then(res => res.json()).then(setCountries);
    }, []);

    return <Globe
      globeImageUrl="//raw.githubusercontent.com/iitsmel/weather/develop/3dmockup/src/building/pic/earth.jpg"

      polygonsData={countries.features.filter(d => d.properties.ISO_A2 !== 'AQ')}
      polygonAltitude={d => d === hoverD ? 0.12 : 0.06}
      polygonSideColor={() => 'rgba(0, 100, 0, 0.15)'}
      polygonStrokeColor={() => '#111'}
      polygonLabel={({ properties: d }) => `
        <b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
        GDP: <i>${d.GDP_MD_EST}</i> M$<br/>
        Population: <i>${d.POP_EST}</i>
      `}
      onPolygonHover={setHoverD}
      polygonsTransitionDuration={300}
    />;
};

export default CoolGlobe;
