import React from "react";
import {
	Navbar,
	Collapse,
	Typography,
	IconButton
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
	return (
		<ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			<Typography
				as="li"
				variant="small"
				className="p-1 font-medium"
			>
				<a
					href="/about"
					className="flex items-center"
				>
					About
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				className="p-1 font-medium"
			>
				<a
					href="/team"
					className="flex items-center"
				>
					Team
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				className="p-1 font-medium"
			>
				<a
					href="/resources"
					className="flex items-center"
				>
					Resources
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				className="p-1 font-medium"
			>
				<a
					href="/repositories"
					className="flex items-center"
				>
					Repositories
				</a>
			</Typography>
		</ul>
	);
}

export default function Header() {
	const [openNav, setOpenNav] = React.useState(false);

	const handleWindowResize = () =>
		window.innerWidth >= 960 && setOpenNav(false);

	React.useEffect(() => {
		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	return (
		<Navbar className="mx-auto max-w-screen-xl px-6 py-3">
			<div className="flex items-center justify-between">
				<Typography
					as="a"
					href="/"
					variant="h6"
					className="mr-4 cursor-pointer py-1.5"
				>
					WiCode
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
						<XMarkIcon className="h-6 w-6" strokeWidth={2} />
					) : (
						<Bars3Icon className="h-6 w-6" strokeWidth={2} />
					)}
				</IconButton>
			</div>
			<Collapse open={openNav}>
				<NavList />
			</Collapse>
		</Navbar>
	);
}
