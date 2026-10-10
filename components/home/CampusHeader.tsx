import Link from "next/link";

const asset = "/assets/tuwatch/";

export default function CampusHeader() {
  return (
    <>
      <div className="status-bar" aria-label="Phone status">
        <span>9:41</span>
        <div className="status-icons">
          <img src={asset + "ba993.svg"} alt="" />
          <img src={asset + "62d55.svg"} alt="" />
          <img className="battery" src={asset + "4750d.svg"} alt="" />
        </div>
      </div>
      <header className="campus-header">
        <div className="brand"><strong>TU</strong><span> Watch</span><img src={asset + "a53e2.svg"} alt="" /></div>
        <div className="header-actions">
          <Link className="header-icon notifications" href="/alerts" aria-label="Alerts"><img src={asset + "a16c6.svg"} alt="" /></Link>
          <Link className="header-icon profile" href="/profile" aria-label="Profile"><img src={asset + "77f8f.svg"} alt="" /></Link>
        </div>
      </header>
    </>
  );
}
