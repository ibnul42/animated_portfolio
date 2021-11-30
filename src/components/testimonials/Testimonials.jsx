import "./testimonials.scss";
import Fade from 'react-reveal/Fade';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Sara",
      title: "Senior Developer",
      img:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      icon: "assets/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Lauren",
      title: "Co-Founder of DELKA",
      img:
        "https://st2.depositphotos.com/4157265/8580/i/600/depositphotos_85800420-stock-photo-everything-is-awesome.jpg",
      icon: "assets/youtube.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis. ",
      featured: true,
    },
    {
      id: 3,
      name: "John",
      title: "CEO of ALBI",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <Fade left>
          <h1>Reviews</h1>
        </Fade>
      <div className="container">
        {data.map((d, index) => (
          <div index={index} className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
      <a href="#intro">
        <DoubleArrowIcon className="backToHome" />
      </a>
    </div>
  );
}
