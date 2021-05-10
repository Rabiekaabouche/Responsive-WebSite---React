import React from "react";
import { InfoSection, Pricing } from "../../components";
import { homeObjThree } from "./Data";
function Services() {
	return (
		<>
			<Pricing />
			<InfoSection {...homeObjThree} />
		</>
	);
}

export default Services;
