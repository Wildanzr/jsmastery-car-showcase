"use client";

import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";

import { ShowMoreProps } from "@/types";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ isNext, pageNumber }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathname = updateSearchParams("limit", newLimit.toString());

    router.push(newPathname);
  };
  return (
    <div className="w-full gap-5 mt-10 flex-center">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
