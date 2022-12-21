import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
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

//   <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
//   <div className="item">
//       <img src={meter1} alt="Image" />
//       <h5>HTML</h5>
//   </div>
//   <div className="item">
//       <img src={meter1} alt="Image" />
//       <h5>CSS</h5>
//   </div>
//   <div className="item">
//       <img src={meter1} alt="Image" />
//       <h5>React</h5>
//   </div>
//   <div className="item">
//       <img src={meter2} alt="Image" />
//       <h5>Javascript</h5>
//   </div>
//   <div className="item">
//       <img src={meter3} alt="Image" />
//       <h5>Typescript</h5>
//   </div>
//   <div className="item">
//       <img src={meter1} alt="Image" />
//       <h5>Styled Components</h5>
//   </div>
// </Carousel>

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione at officia veniam provident, reprehenderit quaerat fugiat, blanditiis magni obcaecati eius voluptatem ut dolorem molestias, repudiandae minus hic. Neque, non vel?<br></br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi accusantium inventore, molestias ut perferendis et nihil laboriosam quae minus. Minus ex nihil provident commodi culpa ipsum, velit nemo accusamus pariatur.</p>
                        <div className='skill-items'>
                        <div className="item">
                                 <img src={meter1} alt="Image" />
                                 <h5>HTML</h5>
                             </div>
                             <div className="item">
                                 <img src={meter1} alt="Image" />
                                 <h5>CSS</h5>
                             </div>
                             <div className="item">
                                 <img src={meter1} alt="Image" />
                                 <h5>React</h5>
                             </div>
                             <div className="item">
                                 <img src={meter2} alt="Image" />
                                 <h5>Javascript</h5>
                             </div>
                             <div className="item">
                                 <img src={meter3} alt="Image" />
                                 <h5>Typescript</h5>
                             </div>
                             <div className="item">
                                 <img src={meter1} alt="Image" />
                                 <h5>Styled Components</h5>
                             </div>
                             </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}