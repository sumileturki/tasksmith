import Image from "next/image";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-muted flex min-h-svh flex-col justify-center items-center gap-6 p-6 md:p-10">

      {/* Header / Logo */}
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-medium"
        >
          <Image src="/logo.svg" width={20} height={20} alt="logo" />
          TaskSmith
        </Link>
      </div>

      <div className="w-full max-w-sm">
        {children}
      </div>

    </div>
  );
};

export default Layout;
