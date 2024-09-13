import BookingCard from "@/components/BookingCard";
import HotelDetails from "@/components/HotelDetails";
import RoomPhotos from "@/components/RoomPhotos";
import React from "react";

const page = () => {
  return (
    <div className="md:container  mx-auto mt-[50px]">
      <RoomPhotos />
      <section className="flex md:flex-row max-md:px-5 flex-col justify-between gap-x-10 relative w-full">
        <HotelDetails />
        <BookingCard />
      </section>
    </div>
  );
};

export default page;
