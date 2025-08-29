import React from "react";
import CR1 from "../../assets/SGTcrt/CR1.jpg";

const Certificates = () => {
  const certificate = {
    id: 1,
    title: "Certificate of Incorporation",
    image: CR1,
  };

  return (
    <section className="bg-gray-100 py-12 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6">
          Legal Certificate of Silicon Global Tech
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          <strong>Silicon Global Tech (SMC-Private) Limited</strong> is
          officially registered under the Securities and Exchange Commission of
          Pakistan (SECP). Below is our{" "}
          <span className="font-semibold">Certificate of Incorporation</span>,
          which validates our legal status as a registered entity.
        </p>

        {/* Certificate Card */}
        <div className="flex justify-center">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition max-w-md">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-auto object-contain bg-gray-50"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {certificate.title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
