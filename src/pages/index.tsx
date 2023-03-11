import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import React from "react";
import { services } from "../../data";

const index = ({services}) => {
  console.log("Clint", services);
  return (
    <div>
      <h1>my name is ali</h1>
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
