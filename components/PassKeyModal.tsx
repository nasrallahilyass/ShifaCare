"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { decryptKey, encryptKey } from "@/lib/utils";

const PassKeyModale = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [passKey, setPassKey] = useState("");
  const [passKeyError, setPassKeyError] = useState("");
  const router = useRouter();
  const path = usePathname();

  const closeModale = () => {
    setIsOpen(false);
    router.push("/");
  };

  const encryptedPassKey =
    typeof window !== "undefined" ? localStorage.getItem("accessKey") : null;

  // Check if the passkey is already stored in the local storage
  useEffect(() => {
    const accessKey = encryptedPassKey && decryptKey(encryptedPassKey);
    if (path) {
      if (accessKey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY) {
        setIsOpen(false);
        router.push("/admin");
      } else {
        setIsOpen(true);
      }
    }
  }, [encryptedPassKey]);

  // Validate the passkey
  const validatePassKey = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (passKey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY) {
      const encryptedPassKey = encryptKey(passKey);
      localStorage.setItem("accessKey", encryptedPassKey);
      setIsOpen(false);
    } else {
      setPassKeyError("Invalid passkey.Please try again.");
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="shad-alert-dialog">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-start justify-between">
            Access Verification
            <Image
              src="/assets/icons/close.svg"
              height={20}
              width={20}
              alt="close"
              onClick={() => closeModale()}
              className="cursor-pointer"
            />
          </AlertDialogTitle>
          <AlertDialogDescription>
            To access the admin page, please enter the passkey.....
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div>
          <InputOTP
            maxLength={6}
            value={passKey}
            onChange={(value) => {
              setPassKey(value);
            }}
          >
            <InputOTPGroup className="shad-otp">
              <InputOTPSlot className="shad-otp-slot" index={0} />
              <InputOTPSlot className="shad-otp-slot" index={1} />
              <InputOTPSlot className="shad-otp-slot" index={2} />
              <InputOTPSlot className="shad-otp-slot" index={3} />
              <InputOTPSlot className="shad-otp-slot" index={4} />
              <InputOTPSlot className="shad-otp-slot" index={5} />
            </InputOTPGroup>
          </InputOTP>
          {passKeyError && (
            <p className="shad-error text-14-regular mt-4 flex justify-center">
              {passKeyError}
            </p>
          )}
        </div>
        <AlertDialogFooter>
          <AlertDialogAction
            className="shad-primary-btn w-full"
            onClick={(e) => {
              validatePassKey(e);
            }}
          >
            Enter admin panel
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PassKeyModale;
