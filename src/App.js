import "./App.css";
import backgroundGradinet from "./assets/images/backgroundGradient.png";
import Google from "./assets/images/Google.png";

import { IoEyeOutline } from "react-icons/io5";

function App() {
	return (
		<div className="grid grid-cols-2">
			<div className=" h-lvh w-full bg-slate-900 -z-50 flex justify-end items-center">
				<div
					style={{
						backgroundImage: `url(${backgroundGradinet})`,
						backgroundRepeat: "no-repeat",
					}}
					className="w-3/4 py-10 px-16 h-3/4">
					<h1 className="text-white italic text-xl font-bold">
						BALA <span className="font-bold text-blue-700">.</span>
					</h1>
					<h1 className="text-7xl font-bold italic mt-64 text-gray-200">
						Login page
					</h1>
					<h3 className="mt-8 text-4xl italic pr-32 text-gray-300">
						Start your journey now with us
					</h3>
				</div>
			</div>
			<div className="flex justify-center items-center">
				<div className="grid grid-cols-2 w-full">
					{/* Create account card */}
					<div className="bg-white py-8 px-10 w-5/6  shadow-[rgba(0,0,15,0.1)_10px_0px_10px_0px] -translate-x-20">
						<h1 className="text-2xl font-medium mb-6">Create an account</h1>
						<label className=" text-gray-400">Email</label>
						<input
							placeholder="Enter your email"
							className=" w-full block mt-1 mb-4 p-2 placeholder:text-sm bg-gray-50 border border-gray-300 extended outline-none focus:ring-blue-500 focus:ring-1 rounded-md"
							type="text"
						/>
						<label className=" text-gray-400">Password</label>
						<div>
							<input
								placeholder="Enter your password"
								className=" relative w-full block mt-1 p-2 placeholder:text-sm bg-gray-50 border border-gray-300 extended outline-none focus:ring-blue-500 focus:ring-1 rounded-md"
								type="text"
							/>
							<svg
								className=" absolute  right-14 -translate-y-7 h-5 w-5 text-gray-400"
								fill="none"
								stroke="currentColor">
								<IoEyeOutline className="text-xl" />
							</svg>
						</div>

						<button className="text-center mt-8 text-white bg-blue-500 rounded-md py-2 w-full">
							Create an account
						</button>
						<button className="text-center mt-6 text-blue-500 font-medium bg-cyan-50 rounded-md py-2 w-full flex items-center justify-center">
							<img src={Google} className="h-5 w-5 mr-1" /> Continue with google
						</button>
						<p className="text-gray-300 mt-4 text-center">
							{" "}
							Already have an account?{" "}
							<span className="text-blue-400">Log in</span>
						</p>
					</div>
					{/* Login account card */}
					<div className="bg-white py-8 px-10 w-5/6  shadow-[rgba(0,0,15,0.1)_10px_0px_10px_0px] -translate-x-20 mt-10">
						<h1 className="text-2xl font-medium mb-6">
							Log in to your account
						</h1>
						<label className=" text-gray-400">Email</label>
						<input
							placeholder="Enter your email"
							className=" w-full block mt-1 mb-4 p-2 placeholder:text-sm bg-gray-50 border border-gray-300 extended outline-none focus:ring-blue-500 focus:ring-1 rounded-md"
							type="text"
						/>
						<div className="flex justify-between">
							<label className=" text-gray-400">Password</label>
							<p className="text-blue-400">Forgot?</p>
						</div>
						<div>
							<input
								placeholder="Enter your password"
								className="realtive w-full block mt-1 p-2 placeholder:text-sm bg-gray-50 border border-gray-300 extended outline-none focus:ring-blue-500 focus:ring-1 rounded-md"
								type="text"
							/>
							<svg
								className=" absolute  right-14 -translate-y-7 h-5 w-5 text-gray-400"
								fill="none"
								stroke="currentColor">
								<IoEyeOutline className="text-xl" />
							</svg>
						</div>

						<button className="text-center mt-8 text-white bg-blue-500 rounded-md py-2 w-full">
							Login now
						</button>

						<p className="text-gray-300 mt-4 text-center">
							{" "}
							Don't have an account?{" "}
							<span className="text-blue-400">Sign up</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
