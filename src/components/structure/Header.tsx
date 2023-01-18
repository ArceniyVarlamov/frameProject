import { Link } from "react-router-dom";

//! main - изменение цвета "Главная" или нет
//! plofile - изменение цвета "Профиль" или нет
export default function Header({ profile = false }: { profile?: boolean }) {
  const prof = profile ? "dark" : "white";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80px",
      }}
    >
      <div className="header">
        <Link to="/">
          <div className="header__logo"></div>
        </Link>
        <div className="header__create">Create</div>
        <input type="text" placeholder="Search" />
        <div className="header__notifications"></div>
        <div className="header__messages"></div>
        <div className="header__account"></div>
        <div className="header__accounts"></div>
      </div>
    </div>
  );
}
