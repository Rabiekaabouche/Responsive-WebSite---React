import React from "react";
import { InfoSection, Pricing } from "../../components";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";
function Home() {
	return (
		<>
			<InfoSection {...homeObjOne} />
			<InfoSection {...homeObjTwo} />
			<Pricing />
			<InfoSection {...homeObjThree} />
		</>
	);
}

export default Home;
