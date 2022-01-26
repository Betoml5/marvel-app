const Hero = ({ hero }) => {
  return (
    <div>
      <p>{hero.name}</p>
      <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="" />
    </div>
  );
};

export default Hero;
