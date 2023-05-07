import CrecheCard from "./CrechesMN/CrecheCard";
import { Link } from "react-router-dom";

export default function CrechesCardS({ creches }) {
  return (
    <div className=" flex flex-wrap bg-rawdapurple  bg-opacity-10 rounded-2xl    mx-10 my-5 mt-20  justify-center">
      {creches.map((creche) => (
        <div className="mx-20 my-7" key={creche._id}>
          <CrecheCard creche={creche} key={creche._id} />
        </div>
      ))}
    </div>
  );
}
