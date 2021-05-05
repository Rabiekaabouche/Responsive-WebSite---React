import React from "react";
import { InfoSection } from "../../components";
import { homeObjOne } from "./Data";
function Home() {
	return (
		<div>
			<InfoSection {...homeObjOne} />
		</div>
	);
}

export default Home;
