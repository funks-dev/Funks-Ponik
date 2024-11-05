const Footer = () => {
  return (
    <>
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-md p-4 flex justify-around items-center rounded-tl-[20px] rounded-tr-[20px]">
        <a href="/" className="text-[#111111] text-base font-medium">
          Home
        </a>
        <a className="text-gray-500 text-base font-medium">Category</a>
        <a className="text-gray-500 text-base font-medium">Community</a>
        <a className="text-gray-500 text-base font-medium">Market</a>
        <a href="/profile" className="text-gray-500 text-base font-medium">
          Profile
        </a>
      </div>
    </>
  );
};
export default Footer;
