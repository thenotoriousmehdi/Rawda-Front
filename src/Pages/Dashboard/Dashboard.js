import NavAfter from "../../Components/NavAfter";
import Notification from "../../Components/NotifRdv";
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
function Dashboard({ nom }) {
  return (
    <>
      <div className="h-full bg-rawdapurple bg-opacity-10 ">
        <NavAfter />

        <div className="flex justify-center items-center flex-col gap-2 mb-10">
          <div className="font-Medium text-xl justify-start items-start text-rawdablack font-Poppins  mt-[30px] ">
            <h1>Bonjour, {nom}</h1>
          </div>

          <div className="flex flex-wrap gap-4">
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
                <div className="bg-rawdawhite rounded-xl h-[150px] w-[170px]">
                  <div className="flex flex-col pt-4  justify-center items-center gap-4">
                    <h1 className="text-rawdablack text-xl font-medium">
                      Parents
                    </h1>

                    <h2 className="text-rawdapurple text-3xl font-bold">
                      2000
                    </h2>
                  </div>
                </div>

                <div className="bg-rawdawhite rounded-xl h-[150px] w-[170px]">
                  <div className="flex flex-col pt-4  justify-center items-center gap-4">
                    <h1 className="text-rawdablack text-xl font-medium">
                      Proprio
                    </h1>
                    <h2 className="text-rawdapurple text-3xl font-bold">400</h2>
                  </div>
                </div>
              </div>
              <div className="mt-[-35px]">
                <Stat
                  line={linepurple}
                  titre="Recherches effectuées"
                  number="2345"
                  pourcentage="12"
                />
              </div>

              <div className="flex items-center justify-center bg-rawdawhite  h-[330px] w-[360px] rounded-xl ">
                <div className="flex flex-col items-center gap-4">
                  <h1 className="text-rawdapurple text-xl font-medium">
                    Les crèches les plus consultées
                  </h1>
                  <div className="flex flex-col gap-4">
                    <h2 className="text-rawdablack text-lg font-bold">
                      1- Creche mehdi
                    </h2>
                    <h2 className="text-rawdablack text-lg font-bold">
                      2- Creche mouloud
                    </h2>
                    <h2 className="text-rawdablack text-lg font-bold">
                      3- Creche Kahina
                    </h2>
                    <h2 className="text-rawdablack text-lg font-bold">
                      4- Creche Simou
                    </h2>
                    <h2 className="text-rawdablack text-lg font-bold">
                      5- Creche Amine
                    </h2>
                  </div>
                </div>
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

              <div>
                <Stat
                  line={lineyellow}
                  titre="Moyenne du temps passee sur l'application"
                  number="15min"
                />
              </div>

              <div className="flex items-center justify-center bg-rawdawhite  h-[330px] w-[360px] mt-[30px] rounded-xl ">
              <div className="flex flex-col items-center gap-4">
                  <h1 className="text-rawdapurple text-xl font-medium">
                    Les Termes les plus recherchés
                  </h1>
                  <div className="flex flex-col gap-4">
                    <h2 className="text-rawdablack text-lg font-bold">
                      1- Creche 
                    </h2>
                    <h2 className="text-rawdablack text-lg font-bold">
                      2- kouba
                    </h2>
                    <h2 className="text-rawdablack text-lg font-bold">
                      3- tizi
                    </h2>
                    <h2 className="text-rawdablack text-lg font-bold">
                      4- Alger
                    </h2>
                    <h2 className="text-rawdablack text-lg font-bold">
                      5- Jardin
                    </h2>
                  </div>
                </div>

              </div>
            </div>

            {/* <Notif type="Demande de rendez-vous" photo={mehdi} nomc="Mehdi MAMOUNI" heuree="2" heure="16:30" date="27/05/2023" num="0560000000" email="km_mamouni@esi.dz"/> */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Dashboard;
