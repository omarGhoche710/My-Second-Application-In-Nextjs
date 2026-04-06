import React, { Suspense } from "react";
import Setting from "@/components/Setting";

const page = () => {
  return (
    <section>
      <h1 className="text-3xl font-bold">Our Settings</h1>

      <Suspense fallback={<p>Loading Settings...</p>}>
        <Setting />
      </Suspense>

      <p>There is 4 items</p>
    </section>
  );
};

export default page;
