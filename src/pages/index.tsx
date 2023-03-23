
import ServiceCard from "components/ServiceCard";
import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import React from "react";
import { services } from "../../data";

const index = () => {
 
  return (
    <div>
      <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto praesentium exercitationem voluptatibus unde magni similique veniam in minus libero delectus.

      </h5>
      <div>
        <h5>What i offer</h5>
        <div>
          {
             services?.map(s=> <ServiceCard 
              key={s.title}
              service={s}/> )
          }
        </div>
      </div>
    </div>
  );
};

export default index;

export const getServerSideProps = async(constex: GetServerSidePropsContext) => {

  const res = await fetch('http://localhost:3000/api/Services')
  const data = await res.json();
  console.log("Server" , services);
  return {
    props:{
      services: data.services
    }
  }
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
