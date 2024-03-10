function App() {
	return (
		<>
			<div className="bg-lightGrayishCyan flex flex-col justify-center h-screen w-screen gap-10">
				<div className="flex flex-col items-center">
					<img src="src/assets/images/logo.svg" className="h-[40px]" alt="" />
				</div>

				<div className="grid grid-cols-12">
					<div className="col-span-3"></div>
					<div className="col-span-6 rounded-[10px] p-6 bg-white">
						<div className="grid grid-cols-12 gap-12">
							<div className="col-span-6 flex flex-col gap-8">
								<div className="relative flex flex-col gap-2">
									<span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400 text-[20px] mt-[30px]">
										$
									</span>
									<label
										htmlFor="bill"
										className="font-spaceMonoBold text-grayishCyan"
									>
										Bill
									</label>
									<input
										type="text"
										className="w-full px-2 py-2 border-[2px] rounded-[4px] text-right border-strongCyan focus:outline-none focus:ring-1 focus:ring-strongCyan font-spaceMonoBold text-veryDarkCyan text-[24px]"
										placeholder="0"
										id="bill"
									/>
								</div>
								<div className="flex flex-col gap-2">
									<label
										htmlFor="bill"
										className="font-spaceMonoBold text-grayishCyan"
									>
										Select Tip %
									</label>
									<div className="grid grid-cols-3 gap-2">
										<button className="col-span-1 bg-veryDarkCyan text-white py-3 rounded-[5px] hover:bg-lightGrayishCyan hover:text-veryDarkCyan hover:font-spaceMonoBold font-spaceMonoBold text-[24px]">
											5%
										</button>
										<button className="col-span-1 bg-veryDarkCyan text-white py-3 rounded-[5px] hover:bg-lightGrayishCyan hover:text-veryDarkCyan hover:font-spaceMonoBold font-spaceMonoBold text-[24px]">
											10%
										</button>
										<button className="col-span-1 bg-veryDarkCyan text-white py-3 rounded-[5px] hover:bg-lightGrayishCyan hover:text-veryDarkCyan hover:font-spaceMonoBold font-spaceMonoBold text-[24px]">
											15%
										</button>
										<button className="col-span-1 bg-veryDarkCyan text-white py-3 rounded-[5px] hover:bg-lightGrayishCyan hover:text-veryDarkCyan hover:font-spaceMonoBold font-spaceMonoBold text-[24px]">
											25%
										</button>
										<button className="col-span-1 bg-veryDarkCyan text-white py-3 rounded-[5px] hover:bg-lightGrayishCyan hover:text-veryDarkCyan hover:font-spaceMonoBold font-spaceMonoBold text-[24px]">
											50%
										</button>
										<input
											type="text"
											className="w-full rounded-[4px] text-center border-grayishCyan focus:outline-none focus:ring-2 focus:ring-strongCyan font-spaceMonoBold text-veryDarkCyan text-[24px] bg-veryLightGrayishCyan"
											placeholder="Custom"
											id="bill"
										/>
									</div>
								</div>
								<div className="relative flex flex-col gap-2">
									<span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400 text-[20px] mt-[30px]">
										👤
									</span>
									<label
										htmlFor="number-of-people"
										className="font-spaceMonoBold text-grayishCyan"
									>
										Number of People
									</label>
									<input
										type="text"
										className="w-full px-2 py-2 border-[2px] rounded-[4px] text-right border-strongCyan focus:outline-none focus:ring-1 focus:ring-strongCyan font-spaceMonoBold text-veryDarkCyan text-[24px]"
										placeholder="0"
										id="number-of-people"
									/>
								</div>
							</div>
							<div className="col-span-6 bg-veryDarkCyan rounded-[15px] px-7 py-10 flex flex-col gap-8">
								<div className="grid grid-cols-2">
									<div className="">
										<div className=" text-white font-spaceMonoBold">
											Tip Amount
										</div>
										<div className="font-spaceMonoRegular text-grayishCyan">
											/ person
										</div>
									</div>
									<div className="text-right font-spaceMonoBold text-[35px] text-strongCyan">
										$0.00
									</div>
								</div>
								<div className="grid grid-cols-2">
									<div className="">
										<div className=" text-white font-spaceMonoBold">
											Tip Amount
										</div>
										<div className="font-spaceMonoRegular text-grayishCyan">
											/ person
										</div>
									</div>
									<div className="text-right font-spaceMonoBold text-[35px] text-strongCyan">
										$0.00
									</div>
								</div>
								<div className="mt-auto">
									<button className="bg-strongCyan text-veryDarkCyan py-3 rounded-[5px] hover:bg-lightGrayishCyan hover:text-strongCyan hover:font-spaceMonoBold font-spaceMonoBold font-[24px] w-full">
										RESET
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-3"></div>
				</div>
			</div>
		</>
	);
}

export default App;
