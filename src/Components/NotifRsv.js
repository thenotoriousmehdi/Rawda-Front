import React from 'react';
import linenotif from '../assets/linenotif.svg';
import mehdi from '../assets/mehdi.jpeg';
import croix from '../assets/croix.svg';
import CustomizedDialogs from './refusDialogInscription';
import axios from 'axios';

function NotifRsv({ nomc, nomen, heuree, heure, daten, dateden, num, email }) {
  const sendEmail = async (email, message) => {
    try {
      await axios.post('http://localhost:8000/send-email', {
        name: nomc,
        email: email,
        message: message,
      });
      console.log('Email sent successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  const handleAccepterClick = () => {
    sendEmail(email,'Bonjour\nVotre demande de reservation pour votre enfant a été acceptée.\nCordialement.');
  };

  const handleRefuserClick = () => {
    sendEmail(email,'Bonjour\nVotre demande a été malheureusement refusée\nCordialement.');
  };

  return (
    <div className="flex flex-col bg-rawdawhite w-[360px] md:w-[720px] h-[365px] md:h-[250px] border border-rawdapurple rounded-md">
      <div className="flex bg-rawdapurple bg-opacity-50 w-[360px] md:w-[720px] h-[60px] rounded-t-md p-4 pl-6 justify-between">
        <h1 className="text-white font-bold">Demande D'inscription D'enfant</h1>
        <img className="h-[15px]" src={croix} alt="Close Icon" />
      </div>

      <div className="flex flex-wrap md:gap-[140px]">
        <div className="container  w-[300px] md:w-[420px] h-[60px]">
          <div className="flex ml-8 md:ml-0 justify-items-stretch gap-6">
            <div className="ml-1 md:ml-6 mt-[4px]">
              <img className=" h-[180px] w-[6px]" src={linenotif} alt="Line Icon" />
            </div>

            <div className="mt-[30px] flex flex-col gap-4">
              <div className="flex justify-items-stretch gap-4">
                <h2 className="flex text-sm">{nomc}</h2>
                <h3 className="flex text-[#475467] text-xs font-light">
                  Depuis {heuree}H
                </h3>
              </div>
              <div>
                <p className="font-light text-xs">
                  Je suis {nomc}, je souhaite inscrire son enfant {nomen},
                  né le {daten}. L'entrée de ce dernier est prévue pour le {dateden}.
                </p>
              </div>
              <div className="flex gap-4">
                <h3 className="text-sm font-thin text-rawdapurple bg-[#D9D9D9]">{num}</h3>
                <h3 className="text-sm font-thin text-rawdapurple bg-[#D9D9D9]">{email}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:flex-col ml-[80px] md:ml-[0px] items-center flex-wrap gap-4 mt-[170px] md:mt-[46px]">
          <div>
            <button
              id="accept"
              type="button"
              className="rounded-full font-medium text-sm bg-[#37BB5C] bg-opacity-80 px-4 py-2 text-white hover:bg-[#37BB5C]  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              onClick={handleAccepterClick}
            >
              Accepter
            </button>
          </div>
          <div>
            <button
              id="refuser"
              type="button"
              className="rounded-full font-medium text-sm bg-[#E53E3E] bg-opacity-80 px-4 py-2 text-white hover:bg-[#E53E3E]  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              onClick={handleRefuserClick}
            >
              Refuser
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotifRsv;
