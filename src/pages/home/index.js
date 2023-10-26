import React,{useState,useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  const images = ['/MicrosoftTeams-image.png', '/MicrosoftTeams-image1.png','/MicrosoftTeams-imag2.png','/MicrosoftTeams-image3.png','/MicrosoftTeams-image4.png','/MicrosoftTeams-image6.png','/MicrosoftTeams-image7.png']; 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  useEffect(() => {
    const timer = setInterval(goToNextImage, 2000); // 2000ms = 2 seconds

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, [currentImageIndex]);
  const viewPdf = '/YogeshCV.pdf';
  const handleDownload = () => {
   const pdfUrl = '/path-to-your-pdf-file.pdf'; // Replace with the correct path or URL
   const link = document.createElement('a');
   link.href = pdfUrl;
   link.download = 'downloaded-file-name.pdf'; // Specify the desired file name
   link.click();
 };

  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center " >
            <div
              className="h_bg-image order-1 order-lg-2 h-100 "
              style={{ backgroundImage: `url(${images[currentImageIndex]})`,
              transition: 'background-image 0.5s ease-in-out', }}
            >
               <button className="arrow-button left-arrow" onClick={goToPreviousImage}>
        <FontAwesomeIcon icon={faCircleArrowLeft}  />
      </button>
      <button className="arrow-button right-arrow" onClick={goToNextImage}>
        <FontAwesomeIcon icon={faArrowAltCircleRight} />
      </button>
            </div>
           
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        // introdata.animated.second,
                        // introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                <Link to="/portfolio">
                    <div id="button_h" className="ac_btn btn">
                      Docs
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/about">
                    <div id="button_h" className="ac_btn btn">
                      About Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
