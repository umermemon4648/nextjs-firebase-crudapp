import React from "react";

const Page = ({ userData }) => {
  return (
    <div>
      <h1>This is hello/index router</h1>

      {userData ? (
        <p>Name: {userData.name}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Page;

export async function getStaticProps() {
  const response = await fetch("/api/user/umer");
  const data = await response.json();

  return {
    props: {
      userData: data,
    },
  };
}
