import { TiTick } from 'react-icons/ti';

const WebHostingPlan = () => {
  return (
    <div className="flex flex-col m-4 rounded-lg items-center justify-center w-3/4 p-6 bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-lg mb-7 md:w-2/4 lg:w-1/4">
      {/* Plan Name */}
      <h3 className="text-4xl font-extrabold text-yellow-400">Premium</h3>

      {/* Price */}
      <strong className="text-4xl font-bold text-white my-4">
        $4.99<span className="text-lg font-medium text-gray-400">/mo</span>
      </strong>

      {/* Discount Badge */}
      <span className="bg-yellow-500 text-black rounded-full px-3 py-1 font-semibold text-sm">
        10% OFF
      </span>

      {/* Features Section */}
      <div className="mt-6 w-full">
        <h5 className="text-2xl mb-2 font-semibold text-yellow-400 text-center">
          Top Features
        </h5>

        {/* Features List */}
        <div className="flex items-center text-green-400 mb-2 ps-3">
          <TiTick className="text-xl" /> 100 Website
        </div>
        <div className="flex items-center text-green-400 mb-2 ps-3">
          <TiTick className="text-xl" /> 100 GB SSD Storage
        </div>
        <div className="flex items-center text-green-400 mb-2 ps-3">
          <TiTick className="text-xl" /> Weekly Backups
        </div>
        <div className="flex items-center text-green-400 mb-2 ps-3">
          <TiTick className="text-xl" /> Unlimited Bandwidth
        </div>
        <div className="flex items-center text-green-400 mb-2 ps-3">
          <TiTick className="text-xl" /> Free SSL
        </div>
        <div className="flex items-center text-green-400 mb-2 ps-3">
          <TiTick className="text-xl" /> Free Email
        </div>
      </div>

      {/* Buy Now Button */}
      <button className="mt-6 w-full bg-yellow-400 text-black text-2xl font-bold py-2 rounded-full hover:bg-yellow-300 hover:shadow-md transition-transform transform hover:scale-105">
        BUY NOW
      </button>
    </div>
  );
};

export default WebHostingPlan;
