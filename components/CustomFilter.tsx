"use client";

import { useState, Fragment } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";

import { CustomFilterProps } from "@/types";
import { updateSearchParams } from "@/utils";

const { Button, Options, Option } = Listbox;

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  // Local states
  const [selected, setSelected] = useState(options[0]);

  // Next router
  const router = useRouter();

  const handleUpdateParams = (e: { title: string, value: string }) => {
    const newPath = updateSearchParams(title, e.value.toLowerCase());
    
    router.push(newPath);
  }
  return (
    <div className="w-fit">
      <Listbox 
        value={selected} 
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e);
        }}
      >
        <div className="relative z-10 w-fit">
          <Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image 
              src="/chevron-up-down.svg"
              alt="chevron up down"
              width={20}
              height={20}
              className="object-contain ml-4"
            />
          </Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Options className="custom-filter__options">
              {options.map(option => (
                <Option 
                  key={option.title} 
                  value={option}
                  className={({ active }) => `relative cursor-default select-none py-2 px-4 ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                >
                  {({ selected }) => (
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {option.title}
                    </span>
                  )}
                </Option>
              ))}
            </Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
