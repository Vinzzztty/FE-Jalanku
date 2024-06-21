import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
  Avatar,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
function NavList() {
  const { data: session } = useSession();
  return (
    <>
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        {session && (
          <>
            <Menu>
              <MenuHandler>
                <Avatar
                  variant="circular"
                  alt="user image"
                  className="cursor-pointer"
                  src={session.user.image}
                />
              </MenuHandler>
              <MenuList>
                <a href="/profile" className="outline-none">
                <MenuItem className="flex items-center gap-5 ">
                    <Typography variant="small" className="font-medium">
                      Profile
                    </Typography>
                </MenuItem>
                </a>
                <a href="/api/auth/signout" className="outline-none">
                  <MenuItem className="flex items-center gap-5 ">
                    <Typography variant="small" className="font-medium">
                      Sign Out
                    </Typography>
                  </MenuItem>
                </a>
              </MenuList>
            </Menu>
            <h1 className="font-bold">{session.user.name} </h1>
          </>
        )}
        {!session && (
          <>
            <a href="/api/auth/signin">
              <Button size="lg" className="flex items-center gap-3 bg-black">
                <img
                  src="https://docs.material-tailwind.com/icons/google.svg"
                  alt="metamask"
                  className="h-6 w-6"
                />
                <h1 className="text-white">Continue with Google</h1>
              </Button>
            </a>
          </>
        )}
        <Typography as="li" variant="h5" className="p-1 font-bold">
          <a
            href="/about"
            className="flex items-center text-[#ffffff] hover:text-[#6CEFBF]"
          >
            Tentang
          </a>
        </Typography>
      </ul>
    </>
  );
}

export function NavbarCustom() {
  const [openNav, setOpenNav] = useState(false);
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <>
      <Navbar fullWidth="true" className="bg-[#1EB47D] px-6 py-3">
        <div className="flex items-center justify-between text-[#ffffff]">
          <Typography
            as="a"
            href="/"
            variant="h1"
            className="font-extrabold cursor-pointer py-1.5"
          >
            Jalanku.
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-10 w-10 mr-5" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-20 w-10 mr-5" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </>
  );
}
export default NavbarCustom;
