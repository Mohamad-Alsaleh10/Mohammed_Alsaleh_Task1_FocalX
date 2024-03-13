import "./HeroStyle.css";
const Hero = ({page}) => {
  return (
    <div className="page-heading header-text">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <span className="breadcrumb">
              <a href="#">Home</a> / {page}
            </span>
            <h3>{page}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
