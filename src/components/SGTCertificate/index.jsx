import React from "react";

// apne assets folder se images import karo
import CR1 from "../../assets/SGTcrt/CR1.jpg";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Certificate of Incorporation",
      image: CR1,
    },
  ];

  return (
    <section className=" bg-gray-100 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-8">
          Legal Certificates of Silicon Global Tech
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          We are officially registered under the Securities and Exchange
          Commission of Pakistan (SECP). Below are our certificates of
          incorporation and certified true copy, which validate the legal status
          of <strong>Silicon Global Tech (SMC-Private) Limited</strong>.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-96 object-contain bg-gray-50"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {cert.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
