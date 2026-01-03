const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-8 border-t border-[#EFF3F4] dark:border-[#2F3336] bg-[#F7F9F9] dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-[#536471] dark:text-[#6E767D] text-sm">
          Design & Developed by Uvaish Nasir © {new Date().getFullYear()}. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
