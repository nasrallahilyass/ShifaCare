/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";

const NewAppointment = async ({ params }: SearchParamProps) => {
  const { userId } = await params;
  const patient = await getPatient(userId);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <div className="flex items-center gap-x-2 mb-12">
            {/* Logo image on the left */}
            <Image
              src="/assets/icons/logo-icon.svg"
              height={1000}
              width={1000}
              alt="Shifacare logo"
              className="h-10 w-fit"
            />
            {/* Shifacare text on the right  */}
            <span className="text-2xl font-bold text-white">ShifaCare</span>
          </div>

          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient.$id}
          />

          <p className="copyright  py-12">© 2024 ShifaCare</p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1000}
        width={1000}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
};

export default NewAppointment;
