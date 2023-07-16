import {signIn, useSession} from "next-auth/react";
import {AiOutlineMenu} from "react-icons/ai";
import {BiBell} from "react-icons/bi";

const Header = () => {
	const {data, status} = useSession()
	console.log(data, status)
	const handleSignIn = async () => {
		try {
			const resp = await signIn()
			console.log(resp)
		} catch (e) {
			console.log(e)
		}
	}
	return <header className={"w-full h-16 shadow"}>
		<div className={"flex justify-around items-center h-full"}>
			<AiOutlineMenu className={"text-2xl text-gray-500"}/>
			<div className={"text-2xl font-bold"}>BLOG</div>
			{
				status === "authenticated" ? <div className={"flex items-center space-x-4"}>
					<BiBell className={"text-2xl text-gray-500"}/>
					<div className={"w-6 h-6 rounded-full bg-gray-200"}></div>
					<button
						className={"border border-gray-300 rounded px-2.5 py-1 text-sm text-gray-500 hover:border-gray-400 hover:text-gray-600"}>
						写博客
					</button>
				</div> : <button
					onClick={handleSignIn}
					className={"border border-gray-300 rounded px-2.5 py-1 text-sm text-gray-500 hover:border-gray-400 hover:text-gray-600"}>
					登录
				</button>
			}

		</div>
	</header>
}

export default Header