import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";
import Fade from 'react-reveal/Fade';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';


export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);


  return (
    <div className="portfolio" id="portfolio">
      <Fade left>
        <h1>Project</h1>
      </Fade>
      <ul>
        {list.map((item, index) => (
          <PortfolioList
            key={index}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d, index) => (
          <a href={d.link} target="_blank" key={index} className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </a>
        ))}
      </div>

      <a href="#intro" className="backToTop">
        <DoubleArrowIcon className="backToHome" />
      </a>
    </div>
  );
}
