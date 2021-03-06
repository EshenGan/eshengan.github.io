import userData from "@constants/data";
import React from "react";

export default function Education() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Education
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
          {/* Education card */}
          {userData.education.map((edu, idx) => (
            <>
              <EducationCard
                key={idx}
                title={edu.title}
                desc1={edu.desc1}
                desc2={edu.desc2}
                desc3={edu.desc3}
                desc4={edu.desc4}
                year={edu.year}
                company={edu.company}
                companyLink={edu.link}
                imgUrl={edu.imgUrl}
              />
              {idx === userData.education.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-pink-300 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-pink-300 rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-300 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

const EducationCard = ({ title, desc1,desc2,desc3,desc4, year, company, companyLink,imgUrl }) => {
  return (
    <div className="relative education-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-300 font-bold dark:text-gray-800">
        {year}
      </h1>
      <h1 className="font-semibold text-xl">{title}</h1>
      <a href={companyLink} className="text-gray-500">
        {company}
      </a>
      <p className="text-gray-600 dark:text-gray-400 my-2">{desc1}</p>
      <p className="text-gray-600 dark:text-gray-400 my-2">{desc2}</p>
      <p className="text-gray-600 dark:text-gray-400 my-2">{desc3}</p>
      <p className="text-gray-600 dark:text-gray-400 my-2">{desc4}</p>
      <img
            src={imgUrl}
            //alt="image"
            //className="transform hover:scale-75 transition duration-2000 ease-out object-cover h-full w-full"
          />
    </div>
  );
};
