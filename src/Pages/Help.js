import logo from '../assets/logo.svg';
import {react,useState} from 'react';
import ines from '../assets/ines.png';
import { FaUser, FaHome, FaTimes} from 'react-icons/fa';
import Modal from 'react-modal';


   // pop up du parent
   const ParentModalContent = ({ onClose, props }) => {
    const [email, setEmail] = useState("");
    const [question, setQuestion] = useState("");
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handleQuestionChange = (event) => {
      setQuestion(event.target.value);
    };

    const handleSubmit =  (event) => {
      event.preventDefault();
    }

  return (

<div className="lg:bg-purple-100 h-screen ">
  <div className="flex justify-end"> </div>
  <h2 className="text-rawdapurple flex justify-center font-body text-2xl mt-5"> Vous etes parent et vous voulez de l'aide !</h2>
  <p className=" ml-6 text-justify mt-10 font-body mr-6">La page d'accueil du site comprend une section FAQ pour les questions fréquentes, une section A propos pour découvrir le site et une section 
      avis pour lire les commentaires. Vous pouvez vous connecter si vous avez un compte ou vous inscrire en cliquant sur les boutons appropriés en haut de la page d'acceuil.
      Vous pouvez rechercher une crèche en utilisant la barre de recherche en tapant son nom ou en utilisant les options de filtrage (localisation,d’accueil (régulier,
      occasionnel), jours d’accueil, type d’établissement (étatique, privé, etc), age d’accueil,pédagogie (Montessori, etc), langue, capacité
      d’accueil, disponibilité de places, proposition de servicestransport, alimentation).
      En consultant la carte de la crèche, vous pourrez trouver plus d'informations et cliquer sur les boutons "prendre rendez-vous" ou "inscrire mon enfant" puis suivre les étapes 
      pour arriver a votre besoin.
  </p>
  <p className="font-body mt-6 mb-6 font-semibold ml-11 text-lg"> Vous avez quand meme une question ? Posez la en dessous </p>
  <div className="flex flex-row">
  <div className='w-1/2'>
   <form className="font-body mt-6 mb-6 ml-2 lg:ml-6 text-sm flex flex-col justify-center" onSubmit={handleSubmit}>


     <label className="flex flex-col  lg:ml-6 "> <p className="mb-4">Merci de saisir votre adresse mail :</p>
      <input
      class=" p-3 w-full mb-4 rounded-md font-light bg-rawdapurple  border-neutral-200 bg-opacity-[15%] lg:bg-white lg:border-neutral-200 focus:outline-none"
          type="email"
          value={email}
          onChange={handleEmailChange}
      />


     </label>
     <label className="flex flex-col  lg:ml-6 "> <p className="mb-4"> Posez votre question ici :</p> 
      <input
      class=" p-3 w-full h-20  rounded-md font-light bg-rawdapurple  border-neutral-200 bg-opacity-[15%] lg:bg-white lg:border-neutral-200  focus:outline-none"
          type="email"
          value={question}
          onChange={handleQuestionChange}
      />
     </label>

     <button
          class="mb-7 mt-7  lg:ml-48 h-10 lg:w-3/12  lg:h-12 focus:outline-none bg-rawdapurple hover:bg-violet-900 text-white rounded-xl shadow-sm opacity-100 shadow-purple-600"
          type="submit"
        >
          {" "}
          Envoyer{" "}
     </button>


   </form>
   </div>
   <div className='w-1/2 mt-5 ml-10 flex justify-center'>

        <button className='animate-pulse p-3 w-72 h-82 lg:w-72 lg:h-56 mb-4 rounded-md font-light bg-gradient-to-r from-yellow-300 to-yellow-400 text-black border-neutral-200 focus:outline-none hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 hover:text-white transform hover:-translate-y-1 hover:scale-110 transition-all duration-300 ease-in-out'>
          <p className='font-body text-sm font-bold font-italic'>
            Nous encourageons les questions et sommes heureux de vous fournir une réponse aussi rapidement que possible. Nous vous prions de ne pas utiliser de langage grossier, insultant ou offensant. Vous recevrez une notification dès que nous aurons répondu à votre question.
          </p>
        </button>
   </div>

   </div>

</div>
);
}

// pop up du proprietaire

const ProprioModalContent = ({ onClose,props }) => {
const [email, setEmail] = useState("");
const [question, setQuestion] = useState("");

const handleEmailChange = (event) => {
  setEmail(event.target.value);
};

const handleQuestionChange = (event) => {
  setQuestion(event.target.value);
};

const handleSubmit =  (event) => {
  event.preventDefault();
}

return (

<div className="lg:bg-purple-100 h-screen ">

<div className="flex justify-end">
</div>

<h2 className="text-rawdapurple flex justify-center font-body text-2xl mt-5"> Vous etes responsable de creche et vous voulez de l'aide !</h2>
<p className=" ml-6 text-justify mt-10 font-body mr-6">La page d'accueil du site comprend une section FAQ pour les questions fréquentes, une section A propos pour découvrir le site et une section avis pour lire les commentaires. Vous pouvez vous connecter si vous avez un compte ou vous inscrire en cliquant sur les boutons appropriés en haut de la page d'acceuil. Vous pouvez rechercher egalement une crèche .
  Si vous souhaitez rajouter votre etablissement a notre repertoire de rawda, vous pouvez le faire en remplissant le formulaire et en saisissant les informations relatives a votre creche ainsi que votre contact, vous devez egalement introduire votre accord et carte d'identite pour eviter les fraudes.
  Vous avez aussi acces a votre profil ou vous pouvez changer les informations que vous ouhaitez vous n'avez qua suivre les etapes, vous serez bien guidé.
  En cas de demande d'un parent, vous recevez une notification indiquant le besoin du parent vous pourrez pas la suite refuser ou accepter, nous enverrons de notre part 
  un mail pour le parent en question.  

</p>
<p className="font-body mt-6 mb-6 font-semibold ml-11 text-lg"> Vous avez quand meme une question ? Posez la en dessous </p>
<div className="flex flex-row">
<div className='w-1/2'>
 <form className="font-body mt-6 mb-6 ml-2 lg:ml-6 text-sm flex flex-col justify-center" onSubmit={handleSubmit}>

   <label className="flex flex-col  lg:ml-6 "> <p className="mb-4">Merci de saisir votre adresse mail :</p>
    <input
    class=" p-3 w-full mb-4 rounded-md font-light bg-rawdapurple  border-neutral-200 bg-opacity-[15%] lg:bg-white lg:border-neutral-200 focus:outline-none"
        type="email"
        value={email}
        onChange={handleEmailChange}
    />
   </label>


   <label className="flex flex-col  lg:ml-6 "> <p className="mb-4"> Posez votre question ici :</p> 
    <input
    class=" p-3 w-full h-20  rounded-md font-light bg-rawdapurple  border-neutral-200 bg-opacity-[15%] lg:bg-white lg:border-neutral-200  focus:outline-none"
        type="email"
        value={question}
        onChange={handleQuestionChange}
    />
   </label>


   <button
        class="mb-7 mt-7  lg:ml-48 h-10 lg:w-3/12  lg:h-12 focus:outline-none bg-rawdapurple hover:bg-violet-900 text-white rounded-xl shadow-sm opacity-100 shadow-purple-600"
        type="submit"
      >
        {" "}
        Envoyer{" "}
      </button>
 </form>


 </div>

 <div className='w-1/2 mt-5 ml-10 flex justify-center'>
      <button className='animate-pulse p-3 w-72 h-82 lg:w-72 lg:h-56 mb-4 rounded-md font-light bg-gradient-to-r from-yellow-300 to-yellow-400 text-black border-neutral-200 focus:outline-none hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 hover:text-white transform hover:-translate-y-1 hover:scale-110 transition-all duration-300 ease-in-out'>
        <p className='font-body text-sm font-bold'>
          Nous encourageons les questions et sommes heureux de vous fournir une réponse aussi rapidement que possible. Nous vous prions de ne pas utiliser de langage grossier, insultant ou offensant. Vous recevrez une notification dès que nous aurons répondu à votre question.
        </p>
      </button>
 </div>
</div>
</div>
);

     }

function Help() {

const [isParentModalOpen, setIsParentModalOpen] = useState(false);
const [isProprioModalOpen, setIsProprioModalOpen] = useState(false);

const openParentModal = () => {
setIsParentModalOpen(true);
};

const closeParentModal = () => {
setIsParentModalOpen(false);
};

const openProprioModal = () => {
setIsProprioModalOpen(true);
};

const closeProprioModal = () => {
setIsProprioModalOpen(false);
};

return (

<div className="min-h-screen bg-rawdawhite">

  <div className='bg-white h-14 flex justify-center'>
<a href='/'>
    <img className="ml-12 mt-4 w-28" src={logo} alt="logo" />
</a>
  </div>

  <div className="flex ml-12 justify-items-center just">
    <p className="text-rawdapurple font-body text-2xl mt-10">Besoin d'aide ? Consultez notre page d'aide pour vous accompagner </p>
    
  </div>

  <div className="flex flex-col lg:flex-row md:flex-row">
    <div className='lg:w-1/2 '>
      <p className="text-rawdablack font-body mt-10 text-justify text-lg mr-6 lg:ml-20 lg:mr-0 ml-12 ">Notre site web est un moteur de recherche de crèches en Algérie, conçu pour aider les parents à trouver facilement et rapidement une crèche de qualité pour leurs enfants. </p>
      <p className="text-rawdablack font-body mt-2 text-justify text-lg ml-12 lg:ml-20 lg:mr-0 mr-6 "> Bienvenue dans notre page d'aide ! nous sommes ici pour vous aider a naviguer facilement sur notre site web et profiter de nos fonctionnalitees,
      Que vous ayez des questions sur le processus de recherche, les fonctionnalités de notre site ou tout autre sujet, indiquez nous qui vous etes, nous sommes là pour vous aider.</p>
      <p className="text-rawdablack text-lg lg:ml-20 font-bold mt-6 mb-8 ">Vous etes ? </p>

      <div className=" justify-center items-center flex gap-10">
        <button onClick={openParentModal} className="flex w-4/12 h-20  font-body font-semibold items-center bg-purple-100  hover:bg-rawdapurple focus:outline-none text-rawdablack rounded-xl ">
          <FaUser className="mr-2 ml-20" />
          Parent
        </button>
        <button onClick={openProprioModal} className="flex w-4/12 h-20 font-semibold font-body items-center bg-purple-100 hover:bg-rawdapurple focus:outline-none text-rawdablack rounded-xl">
          <FaHome className="mr-2 ml-16" />
          Propriétaire
        </button>



        <Modal isOpen={isParentModalOpen} onRequestClose={closeParentModal}>
          <ParentModalContent />
          <button className="absolute top-2 right-2 bg-rawdayellow" onClick={closeParentModal}>
            <FaTimes />
          </button>
        </Modal>

        <Modal  isOpen={isProprioModalOpen} onRequestClose={closeProprioModal}>
            <ProprioModalContent  />
            <button className="absolute top-2 right-2 bg-rawdayellow" onClick={closeProprioModal}>
            <FaTimes />
          </button>
        </Modal>

      </div>
    </div>
<div className='lg:w-1/2 flex justify-center justify-items-end'>
<div className="relative mt-5 w-1/2">
<img className="w-full animate-bounce mt-20" src={ines} alt="ines" />
<div className="absolute inset-0 bg-yellow-500 opacity-0 hover:opacity-70 transition-all duration-500 ease-in-out"></div>
<div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 hover:opacity-100 transition-all duration-500 ease-in-out">
</div>
</div>
</div>



  </div>
</div>
);
}

export default Help;