import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from "react";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const [buttonTextform, setbuttonTextform] = useState("Envoyer");
  const [textinputnotHidden, settextinputnotHidden] = useState(false);
  const [motifRefus, setmotifRefus] = useState("");


  const [availableTimes, setAvailableTimes] = useState([ '10:00', '10:40', '11:20', '12:00', '13:20', '14:00', '14:40', '15:20'
]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const [selectedValue, setSelectedValue] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [datetoken, setDatetoken] = useState(new Date((new Date()).getTime() + 24 * 60 * 60 * 1000));
  const handleDateChange = async (date) => {
    setDatetoken(date);
  };
  const handleInputChange = (event) => {
    setSelectedValue(event.target.value);
    setShowForm(event.target.value ===  "la date d'entrée en crèche ne correspond pas à la crèche");
  };
  const [selectedOption, setSelectedOption] = useState('10:00');
  const handleClose = () => {
    setOpen(false);
    setbuttonTextform("Envoyer");
    settextinputnotHidden(false);

  };
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
   
  };
  
  const handleRadioClick = (event) => {
    setSelectedValue(event.target.value);
    settextinputnotHidden(true);
  };

  const handlemotifRefusChange = (event) => {
    setmotifRefus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setbuttonTextform("Envoyé!");
    console.log(selectedValue, motifRefus);
    if(selectedValue==="la date d'entrée en crèche ne correspond pas à la crèche"){
    console.log(selectedOption , datetoken);}
  };

  const handleRadioClickinput = () => {
    setShowForm(true);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        className="rounded-full font-medium text-sm bg-[#EE4C4C] bg-opacity-60 px-[21px] py-2 text-white hover:bg-[#EE4C4C]  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 "
        sx={{
          borderRadius: 9999,
          fontFamily: "Poppins",
          fontSize: 14,
          backgroundColor: "#EE4C4C",
          backgroundColor: "rgba(238, 76, 76, 0.6)",
          paddingX: 2,
          paddingY: 0.8,
          border: "none",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "rgba(238, 76, 76, 1)",
            outline: "none",
          },
          "&:focus": {
            outline: "none",
            boxShadow: "0 0 0 2px white, 0 0 0 4px rgba(238, 76, 76, 0.5)",
          },
        }}
      >
        Refuser
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div className="flex flex-col mb-10 ">
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
            sx={{
              fontFamily: "Poppins",
              fontSize: { xs: 16, sm: 20 },
              fontWeight: 600,
              zIndex: 3,
              border: { xs: "yellow solid", sm: "none" },
            }}
          >
            Refus de l'inscription de l'enfant
          </BootstrapDialogTitle>
          <div className="  -mt-8 h-3  ml-6  w-0 sm:w-[343px] bg-yellow-200  shadow-yellow-300 "></div>
        </div>

        <DialogContent>
          <p className="font-body leading-8 p-3 text-sm sm:text-base bg-rawdapurple bg-opacity-5 rounded-md mb-3  mx-1 sm:mx-3  ">
            Veuillez justifier la raison du refus de l'inscription de l'enfant:{" "}
          </p>
          <form onSubmit={handleSubmit}>
            <div className="font-body leading-8 p-4 bg-rawdapurple bg-opacity-5 rounded-md my-3 mx-1 sm:mx-3 text-sm sm:text-base">
              <input
                type="radio"
                id="Choice1"
                name="contact"
                value="la date d'entrée en crèche ne correspond pas à la crèche"
                checked={
                  selectedValue ===
                  "la date d'entrée en crèche ne correspond pas à la crèche"
                }
                onClick={handleRadioClickinput}
                onChange={handleInputChange}
              />
              <label for="Choice1" className="px-2">
                la date d'entrée en crèche ne correspond pas à la crèche <br />{" "}
              </label>

              {showForm && (
        <div className="flex-col justify-center items-center text-center  bg-white ">
          <h2 className=" mt-2 font-body text-rawdapurple font-bold ">-Donnez la date d'entrée de l'enfant à la crèche-</h2>
          <div className='flex mt-2 items-center  flex-col  ' >
          <label
            for="datepi"
            className="text-left w-4/5 sm:w-2/3 font-body text-xs sm:text-sm mt-2 sm:ml-3"
          >
            Date du rendez-vous:
          </label>

          <DatePicker
            id="datepi"
            required
            selected={datetoken}
            onChange={handleDateChange}
            minDate={new Date(new Date().getTime() + 24 * 60 * 60 * 1000)}
            filterDate={(date) => date.getDay() !== 5 && date.getDay() !== 6}
            dateFormat="dd/MM/yyyy"
            className="rounded-md  z-20 h-[38px] m-3 mt-1 w-4/5 justify-center sm:w-2/3 text-sm md:text-base bg-white border-purple-400 border py-2 px-2 text-gray-700 placeholder-gray-400 focus:outline-violet-400 focus:ring-1 focus:border-violet-400"
          /></div>
 
      </div>
      )}


              <input
                type="radio"
                id="Choice2"
                value="le nombre d'enfants inscrits a atteint la limite acceptée"
                checked={
                  selectedValue ===
                  "le nombre d'enfants inscrits a atteint la limite acceptée"
                }
                onChange={handleInputChange}
              />
              <label for="Choice2" className="px-2 ">
                le nombre d'enfants inscrits a atteint la limite acceptée <br />
              </label>

              <input
                type="radio"
                id="Choice3"
                value="l'age de votre enfant ne vérifie pas l'intervalle d'age d'inscription accépté"
                checked={
                  selectedValue ===
                  "l'age de votre enfant ne vérifie pas l'intervalle d'age d'inscription accépté"
                }
                onChange={handleInputChange}
              />
              <label for="Choice3" className="px-2 ">
              l'age de votre enfant ne vérifie pas l'intervalle d'age d'inscription accépté <br />
              </label>


              <input
                type="radio"
                id="Choice4"
                value="Autre"
                checked={selectedValue === "Autre"}
                onChange={handleInputChange}
                onClick={handleRadioClick}
              />
              <label for="Choice4" className="px-2 ">
                Autre{" "}
              </label>

              {textinputnotHidden && (
                <div>
                  <label for="textField" className="font-body leading-8 p-2  ">
                    , donner plus de details:
                  </label>
                  <input
                    type="text"
                    id="textField"
                    name="textField"
                    value={motifRefus}
                    onChange={handlemotifRefusChange}
                    placeholder="Entrer plus de details.."
                    className="font-body leading-8 p-2  rounded-md   bg-white border-purple-400  border  text-gray-700
         placeholder-gray-400 shadow-sm text-sm focus:outline-violet-400 focus:ring-2 focus:border-violet-400
         "
                  />
                </div>
              )}
            </div>

            <div className="flex  flex-wrap-reverse justify-end   mt-6 mr-2">
              {buttonTextform === "Envoyer" ? (
                <Button
                  onClick={handleClose}
                  autoFocus
                  sx={{
                    borderRadius: 9999,
                    m: 1,
                    background: "rgba(105, 56, 239, 0.05)",
                    backgroundOpacity: 0.5,
                    color: "#6938EF",
                    fontFamily: "Poppins",
                    "&:hover": { border: "#6643b5 solid 1px" },
                  }}
                >
                  Annuler
                </Button>
              ) : null}
              <Button
                autoFocus
                type="submit"
                sx={{
                  borderRadius: 9999,
                  color: "white",
                  m: 1,
                  fontFamily: "Poppins",
                  "&:hover": { color: "#6938EF", border: "#6643b5 solid 1px" },
                  background: "#6938EF",
                }}
              >
                {buttonTextform}
              </Button>
            </div>
          </form>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
