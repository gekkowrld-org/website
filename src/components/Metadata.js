import { useEffect } from "react";

const Metadata = ({ title, description }) => {
	useEffect(() => {
		document.title = title;
		const metaDesc = document.querySelector("meta[name='description']");
		if (metaDesc) {
			metaDesc.setAttribute = ("content", description);
		}
	}, [title, description]);

	return "";
};

export default Metadata;
