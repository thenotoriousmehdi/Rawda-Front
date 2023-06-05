import NavAfter from "../../Components/NavAfter";
import Notification from "../../Components/NotifRdv";
import { Stat } from "./Stat";
import Notif from "./Notif";
import Footer from "../../Components/Footer";
import mehdi from "../../assets/mehdi.jpeg";
import linepurple from "../../assets/linepurple.svg";
import lineyellow from "../../assets/lineyellow.svg";
import { Doughnut, Bar } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { useEffect , useState  } from "react";
import Nav from "../../Components/Nav";
import axios from "axios";
Chart.register(ArcElement);


const don = {
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
  const [infos, setinfos] = useState([]);
  const [termes, settermes] = useState([]);
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:8000/dash",
          config
        );
       
        settermes(response.data.termes)
        setinfos(response.data.infos);
      } catch (error) {
        console.log(error);
      }
    }
  
    fetchData();
  }, []);
  
  const [creche, setcreche] = useState([]);
  useEffect(() => {
    async function fetchCreche() {
      try {
        const response = await axios.get('http://localhost:8000/stats',config);
        setcreche(response.data); 
      
      } catch (error) {
        console.log(error);
      }
    }
  
    fetchCreche();
  }, []);
  return (
    <>
      <div className="h-full bg-rawdapurple bg-opacity-10 ">
        <Nav />

        <div className="flex justify-center items-center flex-col gap-2 mb-10">
          <div className="font-Medium text-xl justify-start items-start text-rawdablack font-Poppins  mt-[30px] ">
            <h1>Bonjour, {nom}</h1>
          </div>
<div className="flex flex-col gap-8">   
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-0">
                <Stat
                  line={linepurple}
                  titre="Creches ajoutees"
                  number= {infos.nbcreche}
                  pourcentage="4.5"
                />
                <Stat
                  line={lineyellow}
                  titre="Enfants inscris"
                  number={infos.nbenfant}
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
                      {infos.nbparent}
                    </h2>
                  </div>
                </div>

                <div className="bg-rawdawhite rounded-xl h-[150px] w-[170px]">
                  <div className="flex flex-col pt-4  justify-center items-center gap-4">
                    <h1 className="text-rawdablack text-xl font-medium">
                      Proprio
                    </h1>
                    <h2 className="text-rawdapurple text-3xl font-bold">{infos.nbprop}</h2>
                  </div>
                </div>
              </div>
              <div className="mt-[-35px]">
                <Stat
                  line={linepurple}
                  titre="Recherches effectuées"
                  number={infos.nbrecherche + 180}
                  pourcentage="12"
                />
              </div>

              <div className="flex items-center justify-center bg-rawdawhite  h-[330px] w-[360px] rounded-xl ">
                <div className="flex flex-col items-center gap-4">
                  <h1 className="text-rawdapurple text-xl font-medium">
                    Les crèches les plus consultées
                  </h1>
                  <div className="flex flex-col gap-4">

                    {creche.map((crechemn , index) => (
                      <h2 className="text-rawdablack text-lg font-bold">
                        {index+1} - 
                          {crechemn.nom}
                    </h2>
                    ))}
                  { /* <h2 className="text-rawdablack text-lg font-bold">
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
                    </h2> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-0">
              <div className="flex items-center justify-center bg-rawdawhite  h-[330px] w-[360px] mt-[30px] rounded-xl ">
                <div className="justify-center h-[300px] w-[300px]">
                  <Doughnut data={don} />
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
                  titre="Moyenne du temps passee "
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
                      1- Rawdas
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
          <div className="flex items-center justify-center bg-rawdawhite  h-[330px] w-[738px] rounded-xl ">
          <div className="justify-center h-[300px] w-[300px]">
                  {/* <Bar data={"blue"} /> */}
                </div>
            </div>



          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Dashboard;