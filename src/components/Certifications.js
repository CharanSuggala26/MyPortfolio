import React from "react";
import aws from "../assets/aws-2.jpeg";
import stanford from "../assets/stanford.jpg";
import orcale from "../assets/oracle_dev.png";
import dev from "../assets/dev_gym.jpg";
import coursera from "../assets/coursera.jpg";


const Certifications = () => {
  const certs = [
    {
      id: 1,
      title: "Database for Developers",
      organization: "Oracle",
      date: "2024",
      badge: orcale,
      certificateLink:dev,
    },
    {
      id: 2,
      title: "Machine Learning",
      organization: "Coursera",
      date: "2024",
      badge: stanford,
      certificateLink: coursera,
    },
    {
      id: 3,
      title: "AWS Solutions Architect",
      organization: "Amazon Web Services",
      date: "2025",
      badge: aws,
      certificateLink: "https://aws.amazon.com/certificate-link3",
    },
    {
      id: 4,
      title: "Database for Developers",
      organization: "Oracle",
      date: "2024",
      badge: orcale,
      certificateLink: "https://www.oracle.com/certificate-link1",
    },
    {
      id: 5,
      title: "Machine Learning",
      organization: "Coursera",
      date: "2024",
      badge: stanford,
      certificateLink: "https://www.coursera.org/certificate-link2",
    },
    {
      id: 6,
      title: "AWS Solutions Architect",
      organization: "Amazon Web Services",
      date: "2025",
      badge: aws,
      certificateLink: "https://aws.amazon.com/certificate-link3",
    },
  ];

  return (
    <div
      name="certifications"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pb-12"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Certifications</p>
          <p className="py-6">My Professional Certifications</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {certs.map(({ id, title, organization, date, badge, certificateLink }) => (
            <div
              key={id}
              className="group shadow-md shadow-gray-600 rounded-lg p-6 hover:scale-105 duration-500 relative"
            >
              {/* Badge Image */}
              <img
                src={badge}
                alt={`${title} badge`}
                className="rounded-full w-32 h-32 mx-auto mb-4 group-hover:opacity-0 transition-opacity duration-300"
              />

              {/* Certificate Image, hidden by default */}
              <img
                src={certificateLink}
                alt={`${title} certificate`}
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
              />

              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-400">{organization}</p>
              <p className="text-sm text-gray-500">{date}</p>

              {/* Link to certificate */}
              <a
                href={certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mt-4 block text-center"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
