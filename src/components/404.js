import React from "react";
import Metadata from "./Metadata";

const PageNotFound = () => {
	return (
		<div className="not_found_page">
			{Metadata({
				title: "404 - Page Not Found",
				description: "The page you are looking for does not exist."
			})}

			<div className="flex flex-col justify-center items-center not_found_card w-fit mx-auto my-10 p-10 rounded-xl shadow-xl">
				<h1 className="text-4xl font-bold text-center mt-10">
					404 - Page Not Found
				</h1>
				<p className="text-center mt-5">
					The page you are looking for does not exist.
				</p>
				<p className="text-xs url_404">
					{document.referrer
						? `${new URL(document.referrer).pathname}`
						: "?"}{" "}
					&rarr;{" "}
					{document.location.href
						? `${new URL(document.location.href).pathname}`
						: "?"}
				</p>
			</div>
		</div>
	);
};

export default PageNotFound;
