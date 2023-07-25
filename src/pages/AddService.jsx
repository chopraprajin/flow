import Layout from "../layout";
import React, { useState } from "react";
import GetContract from "../hooks/GetContract";
import SubABI from "../contract/ABIs/PaymentsABI.json";

function AddService() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [freq, setFreq] = useState(0);
  const [freqPeriod, setFreqPeriod] = useState();
  const getFreq = () => {
    let res = freq;
    switch (freqPeriod) {
      case "seconds":
        break;
      case "minutes":
        res = freq * 60;
        break;
      case "hours":
        res = freq * 60 * 60;
        break;
      case "days":
        res = freq * 60 * 60 * 24;
        break;
      case "months":
        res = freq * 60 * 60 * 24 * 20;
        break;
      default:
        break;
    }
    console.log(res);
    return res;
  };
  const contract = GetContract(
    "0x4A93bCef11b377CE6F0b1eC2C16001daeF8807E0",
    SubABI
  );
  const AddSubscription = async () => {
    if (amount > 0 && freq > 0) {
      await contract.createPlan(
        "0x358AA13c52544ECCEF6B0ADD0f801012ADAD5eE3",
        amount,
        getFreq(),
        name
      );
    } else {
      alert("Time Stamp or Amount cannot be null");
    }
  };

  return (
    <Layout>
      <div className="bg-gradient p-1 rounded-md h-fit w-fit mx-auto mt-[20vh] w-[50vw]">
        <div className="bg-zinc-800 flex rounded-md p-10 text-black flex-col gap-5">
          <h1 className="text-gradient text-2xl">Add Service</h1>
          <label
            htmlFor="amount"
            className="block  text-md text-gray-100 font-black mt-[16px]"
          >
            Amount
          </label>
          <input
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
            placeholder="1000"
            required
          />
          <label
            htmlFor="amount"
            className="block  text-md text-gray-100 font-black  mt-[16px]"
          >
            Frequency
          </label>
          <div className="flex">
            {" "}
            <input
              type="number"
              onChange={(e) => setFreq(e.target.value)}
              className="bg-gray-50 mr-3 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="1000"
              required
            />
            <select
              name="freq"
              id="freq"
              onChange={(e) => setFreqPeriod(e.target.value)}
              className="bg-gray-50 text-gray-600 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder=""
              defaultValue={"seconds"}
              required
            >
              <option value="seconds">Seconds</option>
              <option value="minutes">Minutes</option>
              <option value="hours">Hours</option>
              <option value="days">Days</option>
              <option value="months">months</option>
            </select>
          </div>

          <label
            htmlFor="amount"
            className="block  text-md text-gray-100 font-black  mt-[16px]"
          >
            Name
          </label>
          <input
            type="number"
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
            placeholder="1000"
            required
          />

          <button
            className="bg-white bg-gradient text-yellow-600 rounded-lg  mt-[23px] font-black py-3 "
            onClick={() => AddSubscription()}
          >
            Submit this service
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default AddService;
