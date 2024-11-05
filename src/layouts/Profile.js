import React from 'react';
import Footer from '../components/Footer';

const Profile = () => {
  return (
    <div className="p-4 bg-[#F5F5F5] min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl text-[#111111] font-medium">My</h1>
        <img src="/assets/image/settings.svg" alt="setting" />
      </div>

      <div className="flex items-center mt-4 gap-5">
        <img src="/assets/image/demo-profile.svg" alt="Profile" />
        <div>
          <h2 className="text-2xl text-[#111111] font-medium">Nadya</h2>
          <div className="flex space-x-4 text-gray-500 text-sm">
            <div>
              <p className="text-[#333333] text-base font-medium">Plant</p>
              <p className="text-center text-[#111111] text-base font-medium">8</p>
            </div>
            <div>
              <p className="text-[#333333] text-base font-medium">Followers</p>
              <p className="text-center text-[#111111] text-base font-medium">64</p>
            </div>
            <div>
              <p className="text-[#333333] text-base font-medium">Following</p>
              <p className="text-center text-[#111111] text-base font-medium">42</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-around mt-4 text-gray-500">
        <span className="text-[#111111] text-[22px] font-medium border-b-2 border-[#111111] pb-1">My Post</span>
        <span className="text-[22px] font-medium">Plant</span>
        <span className="text-[22px] font-medium">Transaction</span>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        {Array(4)
          .fill()
          .map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md ">
              <img src="/assets/image/tanaman-demo.svg" alt="Plant" className="w-full object-cover" />
              <div className="p-2">
                <p className="mt-2 text-sm font-medium text-[#111111]">I'm proud of my cute Pepe!</p>
                <div className="flex text-gray-500 text-sm mt-1 gap-2">
                  <div className="flex items-center space-x-1">
                    <img src="/assets/image/heart-fill.svg" alt="heart" />
                    <span className="text-sm font-medium text-[#777777]">12</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img src="/assets/image/message-3-fill.svg" alt="heart" />
                    <span className="text-sm font-medium text-[#777777]">12</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
