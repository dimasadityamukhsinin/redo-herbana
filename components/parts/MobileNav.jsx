const MobileNav = () => {
  return (
    <div>
      <div className={styles.languange}></div>
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <a href="/">Story</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a href="/">Cart (0)</a>
          </li>
          <li>
            <a href="/">Account</a>
          </li>
          <li>
            <a href="/">
              <img src="" alt="" />
              0821 2310 0111
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
