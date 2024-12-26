import React from "react";
import Image from "next/image";
import { StatCard } from "@/components/StatCard";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
import { DataTable } from "@/components/tables/DataTable";
import { columns } from "@/components/tables/columns";


const Admin = async () => {
  const appointments = await getRecentAppointmentList();
    console.log(appointments);
  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      {/* Header section */}
      <header className="admin-header">
        <div className="flex items-center gap-x-2">
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
        <p className="text-16-semibold">Admin Dashboard</p>
      </header>

      {/* Main section */}
      <main className="admin-main">
        {/* Welcome message */}
        <section className="w-full space-y-4">
          <h1 className="header">Welcom, Admin 👋</h1>
          <p className="text-dark-700">
            Start your day with managing some appointments.
          </p>
        </section>

        {/* Cards section */}
        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Total number of  scheduled appointments"
            icon="/assets/icons/appointments.svg"
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Total number of pending appointments"
            icon="/assets/icons/pending.svg"
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Total number of cancelled  appointments"
            icon="/assets/icons/cancelled.svg"
          />
        </section>
      </main>

      {/* Data Table */}
      <DataTable columns={columns} data={appointments.documents} />
    </div>
  );
};

export default Admin;
