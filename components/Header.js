import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={headerStyles.description}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
        quia sint voluptatum quis laboriosam ab nesciunt? Repudiandae aliquid
        praesentium officiis unde voluptatem sed, reiciendis voluptate, esse
        obcaecati sequi libero quasi.
      </p>
    </div>
  );
};

export default Header;
