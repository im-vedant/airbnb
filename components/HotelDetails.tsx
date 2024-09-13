import React from "react";
import LeftLeaf from "@/public/images/LeftLeaf.svg";
import RightLeaf from "@/public/images/RightLeaf.svg";
import {
  Star,
  ChevronRight,
  Sofa,
  ShowerHead,
  RockingChair,
  House,
} from "lucide-react";
const HotelDetails = () => {
  const facilites = [
    {
      icon: <House />,
      title: "Room in a apartment",
      description: "Your own room in a home, plus access to shared spaces.",
    },
    {
      icon: <Sofa />,
      title: "Shared common spaces",
      description: "You’ll share parts of the home with the Host.",
    },
    {
      icon: <ShowerHead />,
      title: "Private attached bathroom",
      description: "This place has a bathroom that’s connected to your room.",
    },
    {
      icon: <RockingChair />,
      title: "Dedicated workspace",
      description: "A room with wifi that’s well suited for working.",
    },
  ];
  return (
    <div className="text-black w-full">
      <div>
        <h1 className="text-[20px] font-medium">
          Room in Greater London, United Kingdom
        </h1>
        <p className="flex flex-row text-[16px]  space-x-2 items-center">
          <span>1 double bed</span>
          <span className="w-[3px] rounded-full bg-slate-500 h-[3px]"></span>
          <span>Shared bathroom</span>
        </p>
      </div>
      <div className="border-[2px] flex my-5 flex-row items-center justify-between cursor-pointer border-gray-500 border-opacity-10 rounded-lg p-4">
        <div className="flex flex-row space-x-2">
          <img src={LeftLeaf.src} />
          <p className="text-medium text-center text-[14px] leading-4 ">
            Guest
            <br />
            favourite
          </p>
          <img src={RightLeaf.src} />
        </div>
        <Separator />
        <div className="font-medium text-center">
          <p>4.86</p>
          <div className="flex flex-row gap-x-[2px]">
            {[1, 2, 3, 4, 5].map((item) => (
              <Star size={12} fill="black" key={item} />
            ))}
          </div>
        </div>
        <Separator />
        <div className="font-medium text-center">
          <p>166</p>
          <p className="underline text-xs">Reviews</p>
        </div>
      </div>

      <div className="py-4 flex gap-x-4 flex-row">
        <div>
          <img
            src="https://a0.muscache.com/im/pictures/user/69fd4c5c-0393-49ac-9827-c95b71f3c162.jpg?im_w=240"
            className="rounded-full w-[40px]"
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <p className="text-[14px] font-medium">Stay with Sara</p>
          <p className="text-gray-500 text-[14px] ">
            Superhost • 11 years hosting
          </p>
        </div>
      </div>
      <div className="gap-y-4 flex flex-col p-5 border-y  border-gray-500 border-opacity-20">
        {facilites.map((facility, index) => (
          <div key={index} className="flex flex-row gap-x-5">
            <div>{facility.icon}</div>
            <div>
              <p className=" font-medium">{facility.title}</p>
              <p className="text-gray-500  ">{facility.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-b p-8 border-gray-500 border-opacity-20">
        <p className="">
          Some info has been automatically translated.{" "}
          <span className="underline cursor-pointer font-medium">
            Show orignal.
          </span>
        </p>
        <div>
          <h2 className="text-[22px] mt-4 font-medium">About this place</h2>
          <p className="my-4">
            An ensuite double bedroom in a spacious, comfortable flat,
            conveniently located on a quiet square by Dalston Junction station.
            Just behind a high street with restaurants, bars, cafes and
            transport links. I live here with my standard poodle, Rei. We love
            guests who make themselves at home and are more than happy to share
            the living room and kitchen. You'll have your own private bedroom
            and bathroom with shower. Fresh sheets and towels provided. An
            additional shared toilet is downstairs....
          </p>
          <span className="font-medium  cursor-pointer underline">
            Show more
            <ChevronRight className="inline" size={16} />
          </span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

function Separator() {
  return (
    <div className="border-l border-opacity-40 w-[1px] h-[30px] border-gray-500"></div>
  );
}

export default HotelDetails;
