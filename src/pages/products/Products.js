import React from "react";
import { InfoSection, Pricing } from "../../components";
import { homeObjTwo, homeObjThree } from "./Data";
function Products() {
	return (
		<>
			<InfoSection {...homeObjTwo} />
			<Pricing />
			<InfoSection {...homeObjThree} />
		</>
	);
}

export default Products;
