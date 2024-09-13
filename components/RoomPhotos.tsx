import React from "react";
import { Share, Heart, Grip, ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
const RoomPhotos = () => {
  const images = [
    "https://a0.muscache.com/im/pictures/miso/Hosting-43121446/original/069aff65-469c-4724-84ab-08730fc3b87d.jpeg?im_w=1200",
    "https://a0.muscache.com/im/pictures/miso/Hosting-43121446/original/b9e6f647-80c7-4cbd-b4d2-576a915e3bef.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-43121446/original/c5a3a688-d9ef-4b81-86c2-239f8b8c4560.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-43121446/original/9f3044b3-f9c6-4222-aa47-1b1adef97e3a.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-43121446/original/bb4d433c-86ff-400c-9475-4b4459ef3e65.jpeg?im_w=720",
  ];
  return (
    <div className="text-black flex max-md:flex-col-reverse flex-col">
      <div className="flex flex-row  justify-between">
        <h1 className="text-[26px] max-md:px-5 font-medium">
          Stylish ensuite double bedroom in trendy Dalston
        </h1>
        <div className="flex max-md:hidden flex-row text-[14px] gap-x-5 font-medium">
          <div className="flex hover:bg-gray-100 px-4 py-2 transition-colors duration-500 rounded-md cursor-pointer gap-x-2 items-center flex-row">
            <Share size={16} />
            <span className="underline ">Share</span>
          </div>
          <div className="flex gap-x-2 hover:bg-gray-100 px-4 py-2 transition-colors duration-500 cursor-pointer rounded-md items-center flex-row">
            <Heart size={16} />
            <span className="underline ">Like</span>
          </div>
        </div>
      </div>
      <div className="md:rounded-2xl relative my-4 md:overflow-hidden grid gap-2 md:grid-cols-2">
        <Image src={images[0]} width={"full"} />
        <div className="grid max-md:hidden grid-cols-2 grid-rows-2 gap-2">
          {images.splice(1).map((image, index) => (
            <Image key={index} src={image} width={"full"} />
          ))}
        </div>
        <Button
          type="button"
          variant={"outline"}
          className="absolute md:hidden bg-slate-200 top-2 left-2 rounded-full"
          size={"icon"}
        >
          <ChevronLeft size={15} />
        </Button>
        <Button
          type="button"
          variant={"outline"}
          className="absolute md:hidden bg-slate-200 top-2 right-16 rounded-full"
          size={"icon"}
        >
          <Share size={15} />
        </Button>
        <Button
          type="button"
          variant={"outline"}
          className="absolute md:hidden bg-slate-200 top-2 right-2 rounded-full"
          size={"icon"}
        >
          <Heart size={15} />
        </Button>
        <div className="absolute cursor-pointer px-4 py-2 gap-2 flex items-center flex-row bg-white rounded-lg border border-black bottom-5 right-5">
          <Grip size={15} />
          <span className="text-sm text-gray-700 font-medium ">
            Show all photos
          </span>
        </div>
      </div>
    </div>
  );
};

export default RoomPhotos;

function Image({ src, width }: { src: string; width: string }) {
  return (
    <div className="relative group cursor-pointer">
      <img className=" " src={src} width={width} alt="" />
      <div className="inset-0 absolute bg-black opacity-0 group-hover:opacity-20 transition-all duration-300 "></div>
    </div>
  );
}
