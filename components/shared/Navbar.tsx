import Link from "next/link";
import Button, { buttonVariants } from "../ui/Button";
// import { buttonVariants } from "../ui/Button";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex h-20 items-center border-b border-grey bg-white/80 backdrop-blur-lg">
      <div className="wrapper grid grid-cols-3 items-center gap-20">
        {/* LEFT NAV */}
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link href="/#packages" className="link-item">
                Packages
              </Link>
            </li>
            <li>
              <Link href="/" className="link-item">
                Link 2
              </Link>
            </li>
            <li>
              <Link href="/" className="link-item">
                Link 3
              </Link>
            </li>
          </ul>
        </nav>

        {/* MID NAV */}
        <nav>
          <ul className="flex justify-center">
            <li>
              <Link href="/" className="text-4xl font-bold lowercase text-pink">
                Mimosa.
              </Link>
            </li>
          </ul>
        </nav>

        {/* RIGHT NAV */}
        <nav>
          <ul className="flex  justify-end gap-5 items-center">
            <li>
              <Link href="/" className="link-item">
                Link 4
              </Link>
            </li>
            <li>
              <Link href="/" className="link-item">
                Link 5
              </Link>
            </li>
            <li>
              <Link
                href="/user/sign-in"
                className={buttonVariants({ variant: "ocean" })}
              >
                Sign in
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
