const Footer = () => {
  return (
    <div className="h-[5%] bg-slate-200 flex justify-center items-center">
      <p className="text-slate-800 text-sm md:text-base">
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="http://www.rimasum.com"
          className="text-purple-800 hover:underline"
        >
          The Word Analyzer
        </a>
        . All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
