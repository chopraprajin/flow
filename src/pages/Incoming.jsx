import React from "react";
import Layout from "../layout";
import Table from "../components/Table";
import { mockdata } from "../mockdata";
function Incoming() {
  return (
    <Layout>
      <section className="w-[50vw] mx-auto mt-20">
        <Table data={mockdata} />
      </section>
    </Layout>
  );
}

export default Incoming;
