const asset = "/assets/tuwatch/";

export default function IncidentCard() {
  return (
    <article className="incident-card">
      <img className="incident-photo" src={asset + "12297.png"} alt="Broken sidewalk near SC3" />
      <div className="incident-details">
        <div className="incident-meta"><img src={asset + "11564.svg"} alt="" /><span className="problem-label">ปัญหา</span><span>·</span><span>2 นาทีที่แล้ว</span></div>
        <h2>เจอทางเท้าชำรุดหน้าตึก SC3</h2>
        <div className="incident-location"><img src={asset + "f98a1.svg"} alt="" /><span>หน้าตึก SC3 · ห่าง 120 ม.</span></div>
      </div>
      <button className="open-report" type="button" aria-label="Open report"><img src={asset + "8abe2.svg"} alt="" /></button>
    </article>
  );
}
