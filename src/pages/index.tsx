import {AiOutlineMenu} from "react-icons/ai";
import {BiBell, BiChevronDown, BiSearch} from "react-icons/bi"
import Layout from "~/components/Layout";

const App = () => {
	return <Layout>
		<section className={"grid grid-cols-12 w-full"}>
			<main className={"col-span-8 px-16 py-8"}>
				<div className={"pb-4 border-b border-gray-300 space-y-6 px-4"}>
					<div className={"flex items-center justify-between"}>
						<div className={"relative"}>
							<BiSearch className={"absolute top-[9px] left-2 text-lg text-gray-500"}/>
							<input
								className={"h-9 border border-gray-300 rounded-3xl outline-0 px-8 placeholder:text-sm focus:border-gray-500"}
								placeholder={"搜索..."}/>
						</div>
						<div className={"flex items-center"}>
							<span className={"mr-3 text-sm text-gray-600"}>标签:</span>
							<div className={"grid grid-cols-3 gap-2"}>
								<span className={"text-sm bg-gray-200 px-3 py-0.5 rounded-full text-gray-600"}>前端</span>
								<span className={"text-sm bg-gray-200 px-3 py-0.5 rounded-full text-gray-600"}>后段</span>
								<span className={"text-sm bg-gray-200 px-3 py-0.5 rounded-full text-gray-600"}>运维</span>
							</div>
						</div>
					</div>
					<div className={"flex justify-between items-center"}>
						<div className={"text-base text-gray-500"}>文章</div>
						<button
							className={"flex items-center text-base text-gray-500 border border-gray-300 rounded-full px-3 py-0.5"}>
							<span className={"text-sm"}>关注</span>
							<BiChevronDown className={"text-xl"}/>
						</button>
					</div>
				</div>
				<div className={"space-y-4 border-b border-gray-300 pb-4 my-5"}>
					<div className={"flex items-center gap-3"}>
						<div className={"w-8 h-8 bg-gray-300 rounded-full"}></div>
						<div>
							<div className={"text-sm text-gray-600"}>张三 2023-07-26</div>
							<div className={"text-sm text-gray-600"}>架构师 zs@gmail.com</div>
						</div>
					</div>
					<div className={"grid grid-cols-12 gap-2"}>
						<div className={"col-span-8 space-y-2"}>
							<div className={"text-gray-900"}>这是一篇很棒的文章</div>
							<div
								className={"text-gray-400 text-sm"}>这是一篇很棒的文章这是一篇很棒的文章这是一篇很棒的文章这是一篇很棒的文章这是一篇很棒的文章这是一篇很棒的文章这是一篇很棒的文章这是一篇很棒的文章
							</div>
						</div>
						<div className={"col-span-4"}>
							<div className={"w-full h-24 bg-gray-400 rounded-md"}></div>
						</div>
					</div>
				</div>
			</main>
			<aside className={"col-span-4 p-4"}>
				<div className={"flex flex-col space-y-4"}>
					<div className={"space-y-4"}>
						<h3 className={"text-lg font-semibold"}>你可能感兴趣的人</h3>
						<div className={"flex items-center justify-between"}>
							<div className={"flex items-center gap-3"}>
								<div className={"w-8 h-8 rounded-full bg-gray-300"}></div>
								<div className={"flex flex-col"}>
									<div className={"text-sm text-gray-700 font-bold"}>赵三</div>
									<div className={"text-sm text-gray-400"}>这是一段描述。。。。。</div>
								</div>
							</div>
							<button
								className={"border border-gray-300 rounded-md text-sm text-gray-600 px-2 py-1 hover:border-gray-600"}>关注
							</button>
						</div>
					</div>
					<div className={"space-y-4"}>
						<h3 className={"text-lg font-semibold"}>我读过的</h3>
						<div className={"flex flex-col space-y-4"}>
							<div className={"flex items-center gap-3"}>
								<div className={"h-full w-2/5 rounded-2xl bg-gray-300"}></div>
								<div className={"flex w-3/5 flex-col space-y-2"}>
									<div>这是一个标题</div>
									<div>这是一个内容</div>
								</div>
							</div>
							<div className={"flex items-center gap-3"}>
								<div className={"h-full w-2/5 rounded-2xl bg-gray-300"}></div>
								<div className={"flex w-3/5 flex-col space-y-2"}>
									<div>这是一个标题</div>
									<div>这是一个内容</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</aside>
		</section>
	</Layout>
}

export default App
