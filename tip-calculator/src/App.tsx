import { useState } from "react";
import { FaDollarSign, FaUser } from "react-icons/fa";

function App() {
	const [bill, setBill] = useState(0);
	const [tip, setTip] = useState(0);
	const [people, setPeople] = useState(0);

	// calculate the tip using the total bill, tip percentage and number of people also calculate the tip per person and total tip
	const totalTip = () => {
		return (bill * (tip / 100)).toFixed(2);
	};
	const tipPerPerson = () => {
		return people ? (parseFloat(totalTip()) / people).toFixed(2) : "0.00";
	};

	function handleTotalBill(totalBill: number) {
		setBill(totalBill);
		totalTip();
		tipPerPerson();
	}

	function handlePeople(totalPeople: number) {
		setPeople(totalPeople);
		totalTip();
		tipPerPerson();
	}

	function handleTipBtn(tip: number) {
		setTip(tip);
		totalTip();
		tipPerPerson();
	}

	function handleResetButton() {
		setBill(0);
		setTip(0);
		setPeople(0);
	}

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
										<FaDollarSign />
									</span>
									<label
										htmlFor="bill"
										className="font-spaceMonoBold text-grayishCyan"
									>
										Bill
									</label>
									<input
										type="number"
										className="w-full px-2 py-2 border-[2px] rounded-[4px] text-right border-strongCyan focus:outline-none focus:ring-1 focus:ring-strongCyan font-spaceMonoBold text-veryDarkCyan text-[24px]"
										placeholder={parseFloat(bill.toString()).toFixed(0)}
										id="bill"
										min={0}
										max={100000}
										value={bill > 0 ? bill : ""}
										onChange={(e) => handleTotalBill(+e.target.value)}
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
										<button
											className={`col-span-1 py-3 rounded-[5px] hover:bg-lightGrayishCyan hover:text-veryDarkCyan hover:font-spaceMonoBold font-spaceMonoBold text-[24px] ${
												tip === 5
													? "bg-lightGrayishCyan text-veryDarkCyan"
													: "bg-veryDarkCyan text-white"
											}`}
											onClick={() => handleTipBtn(5)}
										>
											5%
										</button>

										<button
											className={`col-span-1 py-3 rounded-[5px] hover:bg-lightGrayishCyan hover:text-veryDarkCyan hover:font-spaceMonoBold font-spaceMonoBold text-[24px] ${
												tip === 10
													? "bg-lightGrayishCyan text-veryDarkCyan"
													: "bg-veryDarkCyan text-white"
											}`}
											onClick={() => handleTipBtn(10)}
										>
											10%
										</button>
										<button
											className={`col-span-1 py-3 rounded-[5px] hover:bg-lightGrayishCyan hover:text-veryDarkCyan hover:font-spaceMonoBold font-spaceMonoBold text-[24px] ${
												tip === 15
													? "bg-lightGrayishCyan text-veryDarkCyan"
													: "bg-veryDarkCyan text-white"
											}`}
											onClick={() => handleTipBtn(15)}
										>
											15%
										</button>
										<button
											className={`col-span-1 py-3 rounded-[5px] hover:bg-lightGrayishCyan hover:text-veryDarkCyan hover:font-spaceMonoBold font-spaceMonoBold text-[24px] ${
												tip === 25
													? "bg-lightGrayishCyan text-veryDarkCyan"
													: "bg-veryDarkCyan text-white"
											}`}
											onClick={() => handleTipBtn(25)}
										>
											25%
										</button>
										<button
											className={`col-span-1 py-3 rounded-[5px] hover:bg-lightGrayishCyan hover:text-veryDarkCyan hover:font-spaceMonoBold font-spaceMonoBold text-[24px] ${
												tip === 50
													? "bg-lightGrayishCyan text-veryDarkCyan"
													: "bg-veryDarkCyan text-white"
											}`}
											onClick={() => handleTipBtn(50)}
										>
											50%
										</button>
										<input
											type="text"
											className="w-full rounded-[4px] text-center border-grayishCyan focus:outline-none focus:ring-2 focus:ring-strongCyan font-spaceMonoBold text-veryDarkCyan text-[24px] bg-veryLightGrayishCyan active:bg-veryLightGrayishCyan "
											placeholder="Custom"
											id="bill"
											onChange={(e) => handleTipBtn(+e.target.value)}
										/>
									</div>
								</div>
								<div className="relative flex flex-col gap-2">
									<span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400 text-[20px] mt-[30px]">
										<FaUser />
									</span>
									<label
										htmlFor="number-of-people"
										className="font-spaceMonoBold text-grayishCyan"
									>
										Number of People
									</label>
									<input
										type="number"
										className="w-full px-2 py-2 border-[2px] rounded-[4px] text-right border-strongCyan focus:outline-none focus:ring-1 focus:ring-strongCyan font-spaceMonoBold text-veryDarkCyan text-[24px]"
										placeholder={parseInt(people.toString()).toFixed(0)}
										id="number-of-people"
										onChange={(e) => handlePeople(+e.target.value)}
										min={0}
										max={1000}
										value={people > 0 ? people : ""}
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
										${tipPerPerson()}
									</div>
								</div>
								<div className="grid grid-cols-2">
									<div className="">
										<div className=" text-white font-spaceMonoBold">Total</div>
										<div className="font-spaceMonoRegular text-grayishCyan">
											/ person
										</div>
									</div>
									<div className="text-right font-spaceMonoBold text-[35px] text-strongCyan">
										${totalTip()}
									</div>
								</div>
								<div className="mt-auto">
									<button
										className="bg-strongCyan text-veryDarkCyan py-3 rounded-[5px] hover:bg-lightGrayishCyan hover:text-veryDarkCyan hover:font-spaceMonoBold font-spaceMonoBold font-[24px] w-full"
										onClick={handleResetButton}
									>
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
