"use client";
import { useRouter } from "next/navigation";
import OutletForm from "../../../../components/OutletForm";
import { createOutlet } from "../../../../services/outletService";
import { Outlet } from "../../../../types";

export default function AddOutletPage() {
  const router = useRouter();

  const handleSubmit = async (outletData: Outlet) => {
    console.log(outletData)
    await createOutlet(outletData);
    router.push("/outlets");
  };

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add Outlet</h1>
      <OutletForm onSubmit={handleSubmit} />
    </main>
  );
}