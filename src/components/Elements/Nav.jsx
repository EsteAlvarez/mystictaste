const Nav = ({ title }) => {
  return (
    <nav className="min-h-[10vh]">
      <ul className="flex justify-center p-5 items-center">
        <li className="mystic-title text-[#e59205] text-3xl">{title}</li>
      </ul>
    </nav>
  );
};

export default Nav;
