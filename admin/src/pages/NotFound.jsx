import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { DoctorContext } from "../context/DoctorContext";
import { Link } from "react-router-dom";

export default function NotFound() {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  const target = aToken
    ? "/admin-dashboard"
    : dToken
    ? "/doctor-dashboard"
    : "/login";

  return (
    <div className="w-full min-h-[6-vh] flex flex-col items-center justify-center p-8 text-gray-700">
      <h1 className="text-2xl font-semibold mb-2 text-center">
        Page not found
      </h1>
      <p className="mb-4">The page you requested doesn&apos;t exist.</p>
      <Link
        to={target}
        className="inline-block bg-primary text-white px-4 py-2 rounded-md"
      >
        Go to dashboard
      </Link>
    </div>
  );
}
