const FooterItem = ({ title, children }) => {
  return (
    <div>
      <h3 className="text-xl">{title}</h3>
      {children}
    </div>
  );
};

export default FooterItem;
