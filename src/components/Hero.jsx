import PropTypes from "prop-types";

const Hero = ({ src, title, subtitle }) => {
  return (
    <div className="relative">
      <img src={src} className="w-full object-cover opacity-40 " alt="" />
      <div
        className="absolute inset-0 grid place-content-center text-white/80 
       bg-black/40"
      >
        <div className="p-8 space-y-4">
          <h2 className="font-bold text-xl  md:text-3xl lg:text-5xl text-center">
            {title}
          </h2>
          <p className="font-semibold md:text-xl text-center">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Hero;
