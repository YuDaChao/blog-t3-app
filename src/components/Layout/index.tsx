import {type PropsWithChildren} from "react";
import Header from "~/components/Layout/Header";

const Layout = ({children}: PropsWithChildren) => {
	return <div>
		<Header/>
		{children}
	</div>
}

export default Layout