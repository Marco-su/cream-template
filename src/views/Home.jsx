import MainImage from "../assets/images/home-main.jpg";
import MidImage1 from "../assets/images/home-mid1.jpg";
import MidImage2 from "../assets/images/home-mid2.jpg";
import BottomImage from "../assets/images/home-bottom.jpg";
import TabletImage from "../assets/images/home-tablet.jpg";
import CalculatorImage from "../assets/images/home-calculator.jpg";
import DigitalImage from "../assets/images/home-digital.jpg";
import StartupImage from "../assets/images/home-startup.jpg";
import SignImage from "../assets/images/home-sign.png";

import { Link } from "react-router-dom";

const Home = () => {
  const date = new Date();

  return (
    <div>
      {/* SECTION 1 */}
      <div className="presentation">
        <img src={MainImage} alt="Welcome" />

        <div className="welcome-box">
          <h1>Welcome!</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            ducimus ut odit nihil earum consectetur, expedita quia a omnis
            recusandae?
          </p>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="introduction">
        <div className="introduction__left">
          <div className="text-section">
            <div className="vertical-letters cursive">
              We tell you about us.
            </div>

            <div className="about-us">
              <h2>About us</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, nobis architecto? Atque deleniti temporibus aliquid
                error consequuntur nesciunt magni maxime?
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt harum aliquid labore! Eaque error, distinctio nesciunt
                eius suscipit deleniti optio.
              </p>
            </div>
          </div>

          <div className="image-section">
            <img src={MidImage2} alt="Books" />
          </div>
        </div>

        <div className="introduction__right">
          <img src={MidImage1} alt="Work" />
          <div>A GOOD SLOGAN</div>
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="points-section">
        <div className="points-section__image">
          <img src={BottomImage} alt="Desk" />
        </div>

        <div className="points-section__content">
          <div>
            <div className="title-box">
              <h2>Some elements</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                sapiente quis in libero itaque.
              </p>
            </div>

            <div className="elements-box">
              {["01", "02", "03", "04"].map((el, i) => (
                <div key={i}>
                  <p className="el-number">{el}</p>
                  <p>Point Name</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium, aliquam!
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4 */}
      <div className="cards">
        <div className="cursive">Some Featured Articles</div>

        <div className="articles-box">
          {[1, 2, 3].map((el) => (
            <article key={el}>
              <h3>ARTICLE {el}</h3>

              <p>{date.toLocaleDateString()}</p>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
                dolorum ipsa similique voluptatum sed, nulla quasi harum sunt
                reiciendis, reprehenderit, facilis pariatur inventore. Doloribus
                eaque in, explicabo accusamus quasi possimus?
              </p>

              <Link to="#">Read</Link>
            </article>
          ))}
        </div>
      </div>

      {/* SECTION 5 */}
      <div className="resume">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          nihil rem architecto animi accusantium natus quaerat aut? Veritatis,
          quia perferendis illum mollitia officia labore! Commodi, amet
          doloribus sequi sint dignissimos consequatur animi eos impedit cum
          quidem vero magni a iusto omnis, laudantium mollitia voluptate. Aut
          voluptatem excepturi ab rem quod iusto officia minima a voluptates
          aliquid, facilis culpa similique eius laudantium ratione veritatis
          molestias incidunt? Quae a fugiat ut.
        </p>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
          architecto ex fugiat dicta, soluta voluptatibus quos esse repellendus
          error illum ab? Sed harum dolore et accusamus odio voluptate, libero
          inventore.
        </p>
      </div>

      {/* SECTION 6 */}
      <div className="thumb-section">
        <div className="card1">
          <div>
            <img src={TabletImage} alt="Tablet" />
          </div>

          <p>Lorem ipsum dolor sit.</p>
        </div>

        <div className="card2">
          <div>
            <img src={CalculatorImage} alt="Calculator" />
            <img src={DigitalImage} alt="Calculator" />
            <img src={StartupImage} alt="Calculator" />
          </div>

          <p>Lorem ipsum dolor sit.</p>
          <p className="cursive">Lorem, ipsum dolor.</p>
        </div>

        <div className="card3">
          <div>
            <div>
              <img src={SignImage} alt="Sign" />
            </div>

            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
