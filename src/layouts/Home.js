import React from 'react';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="p-4 bg-[#F5F5F5] min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-[26px] font-medium">Home</h1>
        <div className="flex space-x-4">
          <button className="relative">
            <img src="/assets/image/group.svg" alt="group" className="w-6 h-6" />
          </button>
          <button className="relative">
            <img src="/assets/image/notiv.svg" alt="notiv" className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="flex space-x-4 mt-4">
        <button className="text-black font-bold border-b-2 border-black">Schedule</button>
        <button className="text-gray-400">Record</button>
        <button className="text-gray-400">Environment</button>
        <button className="text-gray-400">Plant</button>
      </div>

      <div className="mt-6 bg-white p-4 rounded-lg shadow-sm flex items-center">
        <div className="w-1/2">
          <p className="text-xs font-medium text-[#4a5c6d] tracking-tight">Malang</p>
          <p className="text-3xl font-medium text-[#111111] tracking-tight">3°</p>
        </div>
        <div className="w-1/2 justify-items-end">
          <p className="text-gray-500 ml-2">Partly cloudy</p>
          <p className="text-[#999999] text-xs font-medium tracking-tight">
            Up to <span className="text-[#4a5c6d]">23° /</span> down to <span className="text-[#4a5c6d]">15°</span>
          </p>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-medium tracking-tight text-[#111111]">Today's schedule</h2>
          <button className="text-sm text-[#111111] font-medium tracking-tight">Complete them all</button>
        </div>
        <div className="bg-white p-4 mt-4 rounded-lg shadow-sm">
          <p className="text-[#111111] text-base font-medium tracking-tight">Bedroom</p>
          <div className="flex items-center mt-[17px]">
            <img src="/assets/image/monstera.svg" alt="Monstera Albo" className="w-[54px] h-[54px] rounded-[20px]" />
            <div className="ml-3">
              <p className="text-[#111111] font-medium text-base tracking-tight">Monstera Albo</p>
              <p className="text-[#111111] font-medium text-base tracking-tight">Watering</p>
            </div>
            <button className="ml-auto">
              <img src="/assets/image/ceklist.svg" alt="check" className="w-8 h-8" />
            </button>
          </div>
        </div>
        <div className="bg-white p-4 mt-4 rounded-lg shadow-sm">
          <p className="text-[#111111] text-base font-medium tracking-tight">Balcony</p>
          <div className="flex items-center mt-[17px]">
            <img src="/assets/image/monstera.svg" alt="Monstera Albo" className="w-[54px] h-[54px] rounded-[20px]" />
            <div className="ml-3">
              <p className="text-[#111111] font-medium text-base tracking-tight">Monstera Albo</p>
              <p className="text-[#111111] font-medium text-base tracking-tight">Watering</p>
            </div>
            <button className="ml-auto">
              <img src="/assets/image/ceklist.svg" alt="check" className="w-8 h-8" />
            </button>
          </div>
          <div className="flex items-center mt-[11px]">
            <img src="/assets/image/monstera.svg" alt="Monstera Albo" className="w-[54px] h-[54px] rounded-[20px]" />
            <div className="ml-3">
              <p className="text-[#111111] font-medium text-base tracking-tight">Monstera Albo</p>
              <p className="text-[#111111] font-medium text-base tracking-tight">Spray</p>
            </div>
            <button className="ml-auto">
              <img src="/assets/image/ceklist.svg" alt="check" className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 pb-12">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-medium tracking-tight text-[#111111]">Past schedule</h2>
          <button className="text-sm text-[#111111] font-medium tracking-tight">Complete them all</button>
        </div>
        <div className="bg-white p-4 mt-4 rounded-lg shadow-sm">
          <p className="text-[#111111] text-base font-medium tracking-tight">Bedroom</p>
          <div className="flex items-center mt-[17px]">
            <img src="/assets/image/monstera.svg" alt="Monstera Albo" className="w-[54px] h-[54px] rounded-[20px]" />
            <div className="ml-3">
              <p className="text-[#111111] font-medium text-base tracking-tight">Monstera Albo</p>
              <div className="flex gap-2">
                <p className="text-[#111111] font-medium text-base tracking-tight">Pruning</p>
                <div className="bg-[#d35a5a] flex justify-center items-center rounded-full px-2">
                  <p className="text-[#eaeaea] text-[10px] tracking-tight font-medium">1 day late</p>
                </div>
              </div>
            </div>
            <button className="ml-auto">
              <img src="/assets/image/ceklist.svg" alt="check" className="w-8 h-8" />
            </button>
          </div>
          <div className="flex items-center mt-[11px]">
            <img src="/assets/image/monstera.svg" alt="Monstera Albo" className="w-[54px] h-[54px] rounded-[20px]" />
            <div className="ml-3">
              <p className="text-[#111111] font-medium text-base tracking-tight">Monstera Albo</p>
              <div className="flex gap-2">
                <p className="text-[#111111] font-medium text-base tracking-tight">Pruning</p>
                <div className="bg-[#d35a5a] flex justify-center items-center rounded-full px-2">
                  <p className="text-[#eaeaea] text-[10px] tracking-tight font-medium">1 day late</p>
                </div>
              </div>
            </div>
            <button className="ml-auto">
              <img src="/assets/image/ceklist.svg" alt="check" className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
