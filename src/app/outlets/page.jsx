"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getOutlets, deleteOutlet } from "../../../services/outletService";

export default function OutletPage() {
  const [outlets, setOutlets] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchOutlets() {
      const data = await getOutlets();
      setOutlets(data);
    }
    fetchOutlets();
  }, []);

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this outlet?")) {
      await deleteOutlet(id);
      setOutlets(outlets.filter((outlet) => outlet._id !== id));
    }
  };

  return (
    <main className="bg-light min-h-screen p-6">
      <h1 className="text-3xl font-bold text-primary mb-4">Outlets</h1>
      <button
        className="bg-primary text-light py-2 px-4 rounded hover:bg-secondary"
        onClick={() => router.push("/outlets/add")}
      >
        Add Outlet
      </button>
      <ul className="mt-6 space-y-4">
        {outlets &&
          outlets.map((outlet) => (
            <li
              key={outlet._id}
              className="bg-white shadow p-4 rounded border border-light"
            >
              <h2 className="text-xl font-semibold text-primary">{outlet.name}</h2>
              <p className="text-secondary">{outlet.address}</p>
              <p className="text-secondary">{outlet.city}</p>
              <p className="text-secondary">{outlet.state}</p>
              <p className="text-secondary">{outlet.pin}</p>
              <p className="text-secondary">{outlet.contact}</p>
              <div className="flex gap-2 mt-4">
                <button
                  className="bg-primary text-white py-2 px-4 rounded hover:bg-secondary"
                  onClick={() => router.push(`/outlets/${outlet._id}`)}
                >
                  Edit
                </button>
                <button
                  className="bg-primary text-white py-2 px-4 rounded hover:bg-secondary"
                  onClick={() => handleDelete(outlet._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
      </ul>
    </main>
  );
}
