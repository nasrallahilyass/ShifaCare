"use client";

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PatientForm } from "@/components/forms/PatientForm";
import PassKeyModal from "@/components/PassKeyModal";

const Content = () => {
  const searchParams = useSearchParams();
  const admin = searchParams?.get("admin");
  const isAdmin = admin === "true";

  return (
    <>
      {/* OTP verification */}
      {isAdmin && <PassKeyModal />}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <div className="flex items-center gap-x-2 mb-12">
            {/* Logo image on the left */}
            <Image
              src="/assets/icons/logo-icon.svg"
              height={1000}
              width={1000}
              alt="Shifacare logo"
              className="h-10 w-fit"
            />
            {/* Shifacare text on the right */}
            <span className="text-2xl font-bold text-white">ShifaCare</span>
          </div>

          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 ShifaCare
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex h-screen max-h-screen">
        <Content />
        <Image
          src="/assets/images/onboarding-img.png"
          height={1000}
          width={1000}
          alt="patient"
          className="side-img max-w-[50%]"
        />
      </div>
    </Suspense>
  );
};

export default Home;
