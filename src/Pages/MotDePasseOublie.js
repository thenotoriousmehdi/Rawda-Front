import { useState } from "react";
import logo from '../assets/logo.svg';
import filletriste from '../assets/filletriste.png';
import filleheureuse from '../assets/filleheureuse.png';
function MotDePasseOublie(props) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmitEmail = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      // Call your API to send the verification code to the user's email
      // ...
      setStep(2);
    } catch (error) {
      setErrorMessage("Une erreur est survenue. Veuillez réessayer plus tard.");
    }

    setIsLoading(false);
  };

  const handleSubmitVerificationCode = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      // Call your API to verify the verification code
      // ...
      setStep(3);
    } catch (error) {
      setErrorMessage("Le code de vérification est incorrect. Veuillez réessayer.");
    }

    setIsLoading(false);
  };

  const handleSubmitNewPassword = async (event) => {
    setShowFelicitation(true);
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    if (newPassword !== confirmPassword) {
      setErrorMessage("Les mots de passe ne correspondent pas. Veuillez réessayer.");
      setIsLoading(false);
      return;
    }

    try {
      // Call your API to update the user's password
      // ...
      setStep(4);
    } catch (error) {
      setErrorMessage("Une erreur est survenue. Veuillez réessayer plus tard.");
    }

    setIsLoading(false);
  };

  const [showFelicitation, setShowFelicitation] = useState(false);



  return (
    <div>
        <div className=" flex items-center justify-center sticky top-0 z-50  bg-white border-b border-gray-300">
        <a href="/">
          <img className="w-1/2 ml-10 m-3 " src={logo} alt="logo" />
        </a>
      </div>

  {step === 1 && (
    <div className="bg-rawdamotdepasse min-h-screen flex items-start justify-center">
        <div>
            <img className="mt-24 w-52 mr-32" src={filletriste} alt="filletriste" />
        </div>
        <div className="bg-rawdawhite rounded-lg mt-14 shadow-lg p-12 mt- max-w-md w-full">
            <form className="w-full max-w-md mx-auto my-4">
                <div className="bg-white rounded-lg px-8 pt-6 pb-8 mb-4" bg-FFFFFF>
                    <h2 className="text-lg font-medium text-rawdablack font-body mb-4">Mot de passe oublié</h2>
                    {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-body mb-2" htmlFor="email">
                            Adresse e-mail
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="email"
                            id="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-rawdapurple text-white font-bold font-body py-2 px-4 rounded-full focus:outline-none animate-pulse focus:shadow-outline"
                            onClick={handleSubmitEmail}
                            disabled={isLoading}
                        >
                            Envoyer
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
)}


        {step === 2 && (
           <div className="bg-rawdamotdepasse min-h-screen flex items-start justify-center">
           <div>
               <img className="mt-24 w-52 mr-32" src={filletriste} alt="filletriste" />
           </div>
             <div className="bg-rawdawhite rounded-lg mt-14 shadow-lg p-12 mt- max-w-md w-full">
            <form className="w-full max-w-md mx-auto my-4">
                <div className="bg-white rounded-lg px-8 pt-6 pb-8 mb-4" bg-FFFFFF>
            <h2 className="text-lg font-bold mb-4">Code de vérification</h2>
    {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
    <p className="mb-4">Un code de vérification a été envoyé à l'adresse e-mail suivante : {email}</p>
    <div className="mb-4">
      <label className="block text-gray-500 mb-2" htmlFor="verification-code">
        Entrez le code ici
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        id="verification-code"
        value={verificationCode}
        onChange={(event) => setVerificationCode(event.target.value)}
        required
      />
    </div>
    <div className="flex items-center justify-center">
      <button
        className="bg-rawdapurple hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
        onClick={handleSubmitVerificationCode}
        disabled={isLoading}
      >
        Valider
      </button>
    </div>
  </div>
  </form>
  </div>
  </div>

)}
       {step === 3 && (
         <div className="bg-rawdamotdepasse min-h-screen flex items-start justify-center">
         <div>
             <img className="mt-24 w-52 mr-32" src={filletriste} alt="filletriste" />
         </div>
         <div className="bg-rawdawhite rounded-lg mt-14 shadow-lg p-12 mt- max-w-md w-full">
             <form className="w-full max-w-md mx-auto my-4">
                 <div className="bg-white rounded-lg px-8 pt-6 pb-8 mb-4" bg-FFFFFF>
        <div className="bg-white shadow-md rounded px-3 pt-6 pb-4 mb-4">
          <h2 className="text-lg font-body font-medium mb-4">Nouveau mot de passe</h2>
     <div className="mb-4">
            <label className="block font-body text-gray-700 font-bold mb-2" htmlFor="newPassword">
              Nouveau mot de passe
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-body font-bold mb-2" htmlFor="confirmPassword">
              Confirmer le nouveau mot de passe
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-rawdapurple rounded-full font-body text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
              onClick={handleSubmitNewPassword} 
            >
              Enregistrer
            
            </button>
          </div>
        </div>
        </div>
        </form>
        </div>
        </div>

      )}

     {showFelicitation && (
        <div className="bg-rawdamotdepasse min-h-screen flex-row ">
          <div className="flex justify-center  ">
          <p className="font-body font-semibold text-lg mt-28 text-rawdablack">Votre mot de passe a été mis à jour avec succès.</p>
          </div>
          <div className="flex justify-center ">
             <img className=" w-52 mt-12 " src={filleheureuse} alt="filleheureuse" />
          </div>
      
        </div>

      )}

</div>

     


);
}
export default MotDePasseOublie;
