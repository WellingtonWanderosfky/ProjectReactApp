import "./TopBar.scss";

const TopBar = () => {
  return (
    <header className="TopBarConteiner">
        <span>0 xp</span>
        <div className="ProgressBar">
          <div className="ProgressSucess" style={{ width : "20%"}}></div>
        </div>
        <span>600 xp</span>
    </header>
  )
}

export default TopBar;