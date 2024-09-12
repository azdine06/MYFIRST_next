import Link from "next/link";

export default function Headers() {

  return (
    <div className="h-24 flex items-center justify-between px-10 bg-gray-200 relative">
      <Link
        className="cursor-pointer bg-blue-500 text-white rounded-lg py-1.5 px-2.5 text-lg font-semibold flex items-center hover:bg-blue-700"
        href="/login"
      >
        Login
      </Link>
      <Link
        className="cursor-pointer bg-blue-500 text-white rounded-lg py-1.5 px-2.5 text-lg font-semibold flex items-center hover:bg-blue-700"
        href="/register"  
      >
        Register
      </Link>
    </div>
  );
};
