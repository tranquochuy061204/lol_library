import { Link } from 'react-router-dom'; // nếu dùng react-router
// hoặc dùng <a href="/"> nếu không dùng router

const StickyBar = () => {
  return (
    <div className="sticky font-lol bottom-0 left-0 w-full bg-near-black backdrop-blur-md z-50 p-3 flex justify-center">
      <Link to="/" className="text-white text-5xl transition px-6 py-2 rounded-xl md:text-base font-bold">
        Lol Library
      </Link>
    </div>
  );
};

export default StickyBar;
