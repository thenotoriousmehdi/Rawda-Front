import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [selectedValue, setSelectedValue] = useState(null);

  const handleInputChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
    setbuttonTextform("Envoyer");
    settextinputnotHidden(false);
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
            Refus du rendez-vous d'un parent
          </BootstrapDialogTitle>
          <div className="  -mt-8 h-3  ml-6  w-0 sm:w-[343px] bg-yellow-200  shadow-yellow-300 "></div>
        </div>

        <DialogContent>
          <p className="font-body leading-8 p-3 text-sm sm:text-base bg-rawdapurple bg-opacity-5 rounded-md mb-3  mx-1 sm:mx-3  ">
            Veuillez justifier la raison du refus du rendez-vous:{" "}
          </p>
          <form onSubmit={handleSubmit}>
            <div className="font-body leading-8 p-4 bg-rawdapurple bg-opacity-5 rounded-md my-3 mx-1 sm:mx-3 text-sm sm:text-base">
              <input
                type="radio"
                id="Choice1"
                name="contact"
                value="le chreno du rendez-vous choisi est déjà pris"
                checked={
                  selectedValue ===
                  "le chreno du rendez-vous choisi est déjà pris"
                }
                onChange={handleInputChange}
              />
              <label for="Choice1" className="px-2">
                le chreno du rendez-vous choisi est déjà pris <br />{" "}
              </label>

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
                value="Le responsable de la crèche n'est pas disponible"
                checked={
                  selectedValue ===
                  "Le responsable de la crèche n'est pas disponible"
                }
                onChange={handleInputChange}
              />
              <label for="Choice3" className="px-2 ">
                Le responsable de la crèche n'est pas disponible <br />
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
