import React, { useState } from "react";
import Layout from "../layout";
import Table from "../components/Table";
import GetContract from "../hooks/GetContract";
import SubABI from "../contract/ABIs/PaymentsABI.json";
// import { mockdata } from "../mockdata";

function Streams() {
  const contract = GetContract(
    "0x4A93bCef11b377CE6F0b1eC2C16001daeF8807E0",
    SubABI
  );
  const [lists, setList] = useState([]);

  const getList = async () => {
    var len = await contract.receivePid();
    console.log(len);
    var parseList = len.toString();

    setList([]);
    for (let i = 1; i <= parseList; i++) {
      var list = await contract.subsciptionList(i);
      setList((lists) => [...lists, list]);
    }
  };
  console.log(lists);
  return (
    <Layout>
      <section className="w-[50vw] mx-auto mt-20">
        {/* <Table data={mockdata} /> */}
        <button
          onClick={() => {
            getList();
          }}
        >
          hello
        </button>
      </section>
    </Layout>
  );
}

export default Streams;
