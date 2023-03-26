import ServiceCard from "components/ServiceCard";
import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import React from "react";
import { services } from "../../data";

const index = () => {
  return (
    <div className="flex flex-col px-6 pt-1 flex-grow">
      <h5 className="my-3 font-medium">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
        praesentium exercitationem voluptatibus unde magni similique veniam in
        minus libero delectus.Iusto praesentium exercitationem voluptatibus unde
        magni similique veniam in minus libero delectus.
      </h5>
      <div className="p-4 mt-5 bg-gray-400 dark:bg-dark-100 flex-grow"
       style={{marginLeft:'-1.5rem',marginRight:'-1.5rem'}}>
        <h5 className="my-3 text-xl font-bold tracking-wide">What i offer</h5>
        <div className="grid lg:grid-cols-2 gap-6">
          {services?.map((s) => (


            <div key={s.title} className='bg-gray-200 dark:bg-dark-200 rounded-lg lg:col-span-1'>
              <ServiceCard service={s} />
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default index;

export const getServerSideProps = async (
  constex: GetServerSidePropsContext
) => {
  const res = await fetch("http://localhost:3000/api/Services");
  const data = await res.json();
  console.log("Server", services);
  return {
    props: {
      services: data.services,
    },
  };
};

// export const getStaticPropsContext = async(constex: GetStaticPropsContext) => {

//   const res = await fetch('http://localhost:3000/api/Services')
//   const data = await res.json();
//   console.log("Server" , services);
//   return {
//     props:{
//       services: data.services
//     }
//   }
// };
