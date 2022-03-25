import LaptopImage from "../assets/images/dev-laptop.jpg";

const Info = () => {
  return (
    <div className="dev-info">
      <img src={LaptopImage} alt="Laptop" />

      <div className="content-box">
        <div className="content">
          <h1>Development information</h1>

          <div className="tech-box">
            <h2>Technologies used</h2>

            <h3>ReactJS</h3>
            <p>Used as a base for the construction of this template.</p>

            <h3>Sass</h3>
            <p>Used to modify the appearance of the site.</p>
          </div>

          <div className="focus-box">
            <h2>Development focus</h2>
            <p>
              This project is focused on creating an attractive look in neutral
              colors.
            </p>
          </div>

          <div className="git-repo-box">
            <a
              href="https://github.com/Marco-su/cream-template"
              rel="noreferrer"
            >
              <i className="fab fa-git-alt"></i>
              GitHub repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
