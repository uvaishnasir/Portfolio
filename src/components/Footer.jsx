const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-gray-500 text-sm">
          Design & Developed by Uvaish Nasir © {new Date().getFullYear()}. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
