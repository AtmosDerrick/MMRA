import React from "react";

function HelpCenter() {
  return (
    <div
      className="w-full md:text-justify px-2 md:px-0 md:w-3/4 mx-auto h-auto text-sm md:text-lg pt-24 text-left py-4
    ">
      <div>
        <h3 className="text-lg  md:text-xl font-semibold uppercase py-2 text-primary ">
          Welcome to our Help Center!
        </h3>
        <p>
          We understand the importance of data protection, cybersecurity, and
          electronic transaction acts in today’s digital landscape. In this
          section we’ll provide you with a brief overview of the Data Protection
          Acts, Cybersecurity Acts and Electronic Transaction Acts that may
          apply to your use of our application.
        </p>
      </div>

      <div>
        <h3 className="text-lg md:text-xl font-semibold uppercase py-2 text-primary ">
          Data Protection Acts:
        </h3>
        <p>
          Data Protection Laws are designed to safeguard individuals’ personal
          data and ensure its lawful processing. These Laws outline the rights
          and responsibilities of individuals, organizations and governments
          when it comes to handling personal information. Our application
          provides you with the required Laws of the nation that would empower
          your knowledge on Data Protection.
        </p>
      </div>

      <div>
        <h3 className="text-lg md:text-xl font-semibold uppercase py-2 text-primary ">
          Cybersecurity Acts:
        </h3>
        <p>
          Cybersecurity Acts aims to protect computer systems, networks, and
          data from unauthorized access, use, disclosure, disruption, or
          destruction. These laws often require organizations to implement
          appropriate technical and organizational measures to safeguard against
          cyber threats. Our application provides you with the required Laws of
          the nation that would empower your knowledge on Cybersecurity.
        </p>
      </div>

      <div>
        <h3 className="text-lg md:text-xl font-semibold uppercase py-2 text-primary ">
          Electronic Transaction Acts:
        </h3>
        <p>
          Electronic Transaction Acts govern digital transactions, including
          electronic signatures, online contracts, and electronic records. These
          laws ensure the legal validity and enforceability of electronic
          transaction, providing a framework for secure and reliable electronic
          communication. Our application provides you with required Laws of the
          nation that would empower your knowledge on Electronic Transaction
          Acts.
        </p>
      </div>
      <div className="text-sm md:text-lg mt-4 ">
        We are dedicated to helping you empower your knowledge on the various
        Data Protection Laws, Cybersecurity Laws and Electronic Transaction
        Acts, and complying with relevant laws and regulations.{" "}
      </div>
    </div>
  );
}

export default HelpCenter;
