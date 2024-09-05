import Menu from "@/components/Menu";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="h-screen flex">
      <div className="w-[14%] md:w-[10%] lg: w-[14%] xl:w-[14%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">School App</span>
        </Link>
        <Menu />
      </div>

      <div className="w-[86%] md:w-[90%] lg:w-[86%] xl:w-[86%] bg-gray-200 overflow-scroll flex flex-col">
        <NavBar />
        {children}
      </div>
    </div>
  );
}