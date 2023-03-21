import meter1 from "../../assets/img/html.png";
import meter2 from "../../assets/img/css.png";
import meter3 from "../../assets/img/js.png";
import meter4 from "../../assets/img/react.png";
import meter5 from "../../assets/img/sql.png";
import meter6 from "../../assets/img/typescript.png";
import meter7 from "../../assets/img/firebase.png";
import meter8 from "../../assets/img/mongo.png";
import meter9 from "../../assets/img/nodejs.png";
import meter10 from "../../assets/img/postman.webp";
import meter11 from "../../assets/img/vercel.png";
import meter12 from "../../assets/img/bootstrap.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../../assets/img/arrow1.svg";
import arrow2 from "../../assets/img/arrow2.svg";
import colorSharp from "../../assets/img/color-sharp.png"

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>About Skills</h2>
                            <p>I have learned different programming languages ​​so far and as far as my skills are concerned<br></br></p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={meter3} alt="" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={meter4} alt="" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={meter5} alt="" />
                                    <h5>SQL</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={meter6} alt="" />
                                    <h5>TypeScript</h5>
                                </div>
                                <div className="item">
                                    <img src={meter7} alt="" />
                                    <h5>Firebase</h5>
                                </div>
                                <div className="item">
                                    <img src={meter8} alt="" />
                                    <h5>MongoDB</h5>
                                </div>
                                <div className="item">
                                    <img src={meter9} alt="" />
                                    <h5>NodeJS</h5>
                                </div>
                                <div className="item">
                                    <img src={meter10} alt="" />
                                    <h5>Postman</h5>
                                </div>
                                <div className="item">
                                    <img src={meter11} alt="" />
                                    <h5>Vercel</h5>
                                </div>
                                <div className="item">
                                    <img src={meter12} alt="" />
                                    <h5>Bootstrap</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills