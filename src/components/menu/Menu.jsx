import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>        
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Profile</a>
        </li>      
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#experience">Experience</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Project</a>
        </li>
        {/* <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">Works</a>
        </li> */}
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#testimonials">Reviews</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#skill">Skill</a>
        </li>
      </ul>
    </div>
  );
}
