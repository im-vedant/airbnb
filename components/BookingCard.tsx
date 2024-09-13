"use client";
import React, { useEffect, useState } from "react";
import {
  CalendarIcon,
  ChevronUp,
  ChevronDown,
  Minus,
  Plus,
} from "lucide-react";
import { format } from "date-fns";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
const formSchema = z.object({
  checkIn: z.date(),
  checkOut: z.date(),
  guest: z.object({
    adults: z.number().min(1),
    children: z.number().min(0),
    infants: z.number().min(0),
  }),
});
const BookingCard = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      guest: {
        adults: 1,
        children: 0,
        infants: 0,
      },
    },
  });
  const formValues = form.watch();
  const [isGuestOpen, setIsGuestOpen] = useState(false);
  const updateGuestCount = (
    type: keyof typeof formValues.guest,
    increment: boolean
  ) => {
    const currentValue = formValues.guest[type];
    form.setValue(
      `guest.${type}`,
      increment ? currentValue + 1 : currentValue - 1
    );
  };
  const totalGuests = formValues.guest.adults + formValues.guest.children;
  // console.log(totalGuests, formValues,formValues.guest.adults+formValues.guest.children )
  useEffect(()=>{
    if(formValues.checkIn>formValues.checkOut){
      form.setValue('checkOut',formValues.checkIn)
    }
  },[formValues.checkIn])
  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }
  return (
    <div className="text-black md:sticky max-md:my-[40px] top-[40px]   max-w-[400px] w-full border h-fit shadow-xl rounded-2xl p-4">
      <h2 className="text-[22px] mb-3">Add dates for prices</h2>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="border-[1px] border-black rounded-lg overflow-hidden">
              <div className="flex flex-row">
                <FormField
                  name="checkIn"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex flex-1 flex-col p-2 ">
                      <FormLabel>Check-In</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                " pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground "
                              )}
                            >
                              {field.value ? (
                                format(field.value, "dd-MM-yy")
                              ) : (
                                <span>Add a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date(Date.now()-24*60*60*1000)}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="checkOut"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex flex-col flex-1 border-l-[2px] p-2 ">
                      <FormLabel>Check-Out</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              disabled={!formValues.checkIn}
                              variant={"outline"}
                              className={cn(
                                " pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground "
                              )}
                            >
                              {field.value ? (
                                format(field.value, "dd-MM-yy")
                              ) : (
                                <span>Add a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < formValues.checkIn}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <Popover open={isGuestOpen} onOpenChange={setIsGuestOpen}>
                  <PopoverTrigger asChild className="">
                    <Button
                      variant="outline"
                      className="w-full h-fit justify-between rounded-none border-0 border-t shadow-0 text-left"
                    >
                      <div className="">
                        <h1 className="text-[16px] font-medium">Guest</h1>
                        <span>
                          {totalGuests} {totalGuests === 1 ? "guest" : "guests"}
                        </span>
                      </div>
                      {isGuestOpen ? (
                        <ChevronUp className="ml-2 h-4 w-4" />
                      ) : (
                        <ChevronDown className="ml-2 h-4 w-4" />
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className=" p-0 ">
                    <div className="space-y-4 p-4">
                      {Object.entries(formValues.guest).map(
                        ([type, count], index) => (
                          <div
                            key={index}
                            className="flex flex-row items-center justify-between capitalize"
                          >
                            <div>
                              <p className="font-semibold">{type}</p>
                              <p className="text-[14px]">
                                {type === "adults"
                                  ? "Age 13+"
                                  : type === "children"
                                  ? "Ages 2-12"
                                  : "Under 2"}
                              </p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button
                                size={"icon"}
                                type="button"
                                variant={"outline"}
                                className="rounded-full "
                                disabled={
                                  type === "adults" ? count == 1 : count === 0
                                }
                                onClick={() =>
                                  updateGuestCount(
                                    type as keyof typeof formValues.guest,
                                    false
                                  )
                                }
                              >
                                <Minus className="h-4 w-4 " />
                              </Button>
                              <span className="w-8 text-center">{count}</span>
                              <Button
                                size={"icon"}
                                type="button"
                                variant={"outline"}
                                className="rounded-full"
                                onClick={() =>
                                  updateGuestCount(
                                    type as keyof typeof formValues.guest,
                                    true
                                  )
                                }
                              >
                                <Plus className="h-4 w-4 " />
                              </Button>
                            </div>
                          </div>
                        )
                      )}
                      <p className="text-[14px] text-muted-foreground">
                        This place has a maximum of 2 guests, not including
                        infants. Pets aren't allowed.
                      </p>
                      <Button
                        className="w-full"
                        onClick={() => setIsGuestOpen(false)}
                      >
                        Close
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <Button type="submit" className="mt-4 mx-auto">
              Check Availability
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default BookingCard;
