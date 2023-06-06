import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NotifCreche from '../Components/NotifCreche';
import NavAfter from "../Components/NavAfter";
import Footer from "../Components/Footer";

function NotificationsAdm() {
  const [notificationsAdm, setNotificationsAdm] = useState([]);

  useEffect(() => {
    fetchNotificationsAdm();
  }, []);

  const fetchNotificationsAdm = async () => {
    try {
      const response = await axios.get('http://localhost:8000/notifAdm/get');
      console.log(response.data);
      setNotificationsAdm(response.data);
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
          {notificationsAdm.map((notification, index) => (
           
              <NotifCreche
                key={index}
                nomc={notification.nomProprio}
                heuree={notification.createdAt}
                creche = {notification.creche}
                email ={notification.emailProprio}
              />
          ))}
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default NotificationsAdm;
