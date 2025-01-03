/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";

import { Button } from "./ui/button";

interface ButtonProps {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const SubmitButton = ({
  isLoading,
  className,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={className ?? "shad-primary-btn w-full"}
      onClick={(e) => {
        console.log("Submit button clicked");
        if (onClick) onClick();
      }}
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            src="/assets/icons/loader.svg"
            alt="loader"
            width={24}
            height={24}
            className="animate-spin"
          />
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
