import NavAfter from "../../Components/NavAfter";
import Notification from "../../Components/Notification";
import { Stat } from "./Stat";
import Notif from "./Notif";
import Footer from "../../Components/Footer";
import mehdi from "../../assets/mehdi.jpeg";
import linepurple from "../../assets/linepurple.svg";
import lineyellow from "../../assets/lineyellow.svg";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const data = {
  labels: ["Respos", "Parents", "Non-inscrits"],

  datasets: [
    {
      label: "pourcentages des utilisateurs",
      data: [30, 50, 20],
      backgroundColor: ["#ACAA56", "#6938EF", "1E1E1E"],
      hoverOffset: 4,
    },
  ],
};
function Dashboard ({ nom }) {
  return (
    <>
      <div className="h-full bg-rawdapurple bg-opacity-10 ">
        <NavAfter />

        <div className="flex justify-center items-center flex-col gap-2 mb-10">
          <div className="font-Medium text-xl justify-start items-start text-rawdablack font-Poppins  mt-[30px] ">
            <h1>Bonjour, {nom}</h1>
          </div>

          <div className="flex  flex-wrap gap-4">

            <div className="flex flex-col gap-8">

              <div className="flex flex-col gap-0">
                <Stat
                  line={linepurple}
                  titre="Creches ajoutees"
                  number="2500"
                  pourcentage="4.5"
                />
                <Stat
                  line={lineyellow}
                  titre="Enfants inscris"
                  number="6000"
                  pourcentage="8"
                />
 </div>
                <div className="flex gap-5">
                  <div className="bg-rawdawhite rounded-xl h-[150px] w-[170px]"></div>

                  <div className="bg-rawdawhite rounded-xl h-[150px] w-[170px]"></div>
                </div>
             

            </div>

            <div className="flex flex-col justify-center items-center gap-0">
              <div className="flex items-center justify-center bg-rawdawhite  h-[330px] w-[360px] mt-[30px] rounded-xl ">
                <div className="justify-center h-[300px] w-[300px]">
                  <Doughnut data={data} />
                </div>
              </div>

              <div className="flex justify-center  items-center">
                <Stat
                  line={linepurple}
                  titre="Revenus"
                  number="200000da"
                  pourcentage="9.5"
                />
              </div>
            </div>

            {/* <Notif type="Demande de rendez-vous" photo={mehdi} nomc="Mehdi MAMOUNI" heuree="2" heure="16:30" date="27/05/2023" num="0560000000" email="km_mamouni@esi.dz"/> */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Dashboard;