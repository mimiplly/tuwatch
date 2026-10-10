import IncidentCard from "../home/IncidentCard";
import IncidentMarker from "./IncidentMarker";
import MapControls from "./MapControls";

const asset = "/assets/tuwatch/";
const trees = [
  [18,90,0],[35,119,1],[14,181,1],[58,207,0],[35,250,1],[22,319,1],
  [58,346,0],[117,287,1],[139,305,1],[159,286,0],[226,83,1],[241,65,1],
  [272,-14,0],[273,172,1],[288,151,1],[383,97,0],[403,129,1],[384,218,1],
  [397,239,0],[319,361,1],[299,383,1],[17,386,0],[206,368,1],[225,387,1],
  [164,170,0],[153,153,1],[173,195,1],[376,372,0]
];
const buildings = [
  {x:120,y:65,w:80,h:41,label:"ตึกโดม"},
  {x:319,y:47,w:55,h:28,label:"หอพัก"},
  {x:325,y:98,w:62,h:26},
  {x:195,y:201,w:76,h:48,label:"SC3"},
  {x:215,y:276,w:49,h:27},
  {x:46,y:263,w:52,h:28,label:"หอสมุด"},
  {x:114,y:164,w:49,h:26},
  {x:337,y:208,w:36,h:28}
];

export default function CampusMap() {
  return (
    <section className="campus-map" aria-label="Rangsit campus map">
      <div className="campus-label"><strong>มธ. รังสิต</strong><small>CAMPUS EXPLORER</small></div>
      <MapControls />
      <div className="map-art">
        <div className="land park" /><div className="land courtyard" /><div className="land sports" />
        <div className="land lake"><span /><i /></div>
        <img className="road road-border" src={asset + "a2493.svg"} alt="" />
        <img className="road road-network" src={asset + "13a74.svg"} alt="" />
        <img className="road-markings" src={asset + "edbcb.png"} alt="" />
        {trees.map(([x,y,variant], i) => <img key={i} className="map-tree" style={{left:x,top:y}} src={asset + (variant ? "0bcb3.svg" : "83111.svg")} alt="" />)}
        {buildings.map((building,i) => <div key={i} className="map-building" style={{left:building.x,top:building.y,width:building.w,height:building.h}}>
          <span className="building-shadow" /><span className="building-roof" /><span className="building-ridge" />
          {building.label && <span className="building-label">{building.label}</span>}
        </div>)}
        <img className="dome-landmark" src={asset + "c3ce9.svg"} alt="" />
        <span className="map-text activities-label">ลานกิจกรรม</span>
        <span className="map-text lake-label">สระน้ำ</span>
        <span className="map-text road-label">ถนนป๋วย อึ๊งภากรณ์</span>
        <IncidentMarker x={119} y={112} color="#9271dd" icon="a4ecb.svg" tip="95b23.svg" label="Announcement" />
        <IncidentMarker x={258} y={99} color="#f1666b" icon="dd771.svg" tip="14a7d.svg" label="Power issue" />
        <IncidentMarker x={331} y={165} color="#e77fb4" icon="0c021.svg" tip="9e128.svg" label="Interesting place" />
        <IncidentMarker x={112} y={260} color="#42b88b" icon="64dc5.svg" tip="fd570.svg" label="Activity" />
        <IncidentMarker x={207} y={229} color="#f59a52" icon="0a23f.svg" tip="08fd0.svg" label="Broken sidewalk" selected />
        <img className="location-accuracy" src={asset + "2e113.svg"} alt="" />
        <img className="current-location" src={asset + "83422.svg"} alt="" />
        <IncidentCard />
      </div>
    </section>
  );
}
