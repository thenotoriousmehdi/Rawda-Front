import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NotifRdv from "../Components/NotifRdv";
import NotifRsv from "../Components/NotifRsv";
import NavAfter from "../Components/NavAfter";
import Footer from "../Components/Footer";

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await axios.get('http://localhost:8000/notifs/get');
      console.log(response.data);
      setNotifications(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavAfter />
      <div className="bg-rawdawhite">
        <div className="flex flex-col items-center gap pt-8 md:gap-y-0 ">
          <p className="text-center text-3xl md:text-4xl font-Poppins font-bold text-rawdapurple z-10">
            Notifications
          </p>
          <div className="mb-[0.5px] mt-[-15px] w-[190px] md:w-[220px] h-[20px] bg-rawdawhite shadow-rawdayellow "></div>
        </div>

        <div className="flex flex-col flex-wrap-reverse gap-6 items-center mt-[30px] p-8">
          {notifications.map((notification, index) => (
            notification.nomEnfant ? (
              <NotifRsv
                key={index}
                nomc={notification.nomParent}
                nomen={notification.nomEnfant}
                heuree={notification.createdAt}
                heure={notification.heure}
                daten={notification.dateNaissance}
                dateden={notification.dateEntree}
                num={notification.numeroParent}
                email={notification.emailParent}
              />
            ) : (
              <NotifRdv
                key={index}
                nomc={notification.nomParent}
                prenomc={notification.prenomParent}
                heure={notification.heure}
                date={notification.dateRdv}
                heuree={notification.createdAt}
                email={notification.emailParent}
                nomParent
              />
            )
          ))}
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default Notifications;
