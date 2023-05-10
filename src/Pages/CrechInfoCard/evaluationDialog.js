import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextareaAutosize } from "@mui/material";
import { useRef } from "react";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [publie, setPublie] = useState(false);
  const handleClose = () => {
    setPublie(false);
    setOpen(false);
  };

  const textAreaRef = useRef(null);

  const handleLogValue = () => {
    console.log(textAreaRef.current.value);
    console.log(value);
    setPublie(true);
    handleSubmit();
  };

  const [value, setValue] = React.useState(0);

  const { id } = useParams();
  const handleSubmit = async () => {
    try {
      console.log(value + 15);
      await axios.patch(`http://localhost:8000/evaluerCreche/${id}`, {
        note: value,
        commentaires: textAreaRef.current.value,
      });
    } catch (e) {
      console.log("Une erreur s'est produite");
    }
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          mt: 3,
          width: 160,
          height: 50,
          border: "solid #6938EF 2px",
          fontFamily: "Poppins",
          color: "black",
          fontSize: 20,
          fontWeight: 400,
          "&:hover": { border: "#6643b5 solid 1px" },
        }}
      >
        EVALUER
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{
            fontFamily: "Poppins",
            fontWeight: 600,
            backgroundImage:
              "linear-gradient(100deg, #f3f30f 100%, #fefefe 0%)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "40% .4em",
            backgroundPosition: "6% 64%",
          }}
        >
          Evaluation de la créche{" "}
        </DialogTitle>
        <DialogContent>
          <Rating
            name="simple-controlled"
            size="large"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />

          <TextareaAutosize
            aria-label="minimum height"
            minRows={7}
            maxlength="600"
            ref={textAreaRef}
            placeholder="Laisser un commentaire (moins de 150 mots)"
            style={{ width: 500 }}
            sx={{
              mt: 6,
              border: "#6938EF solid 1px",
              "&:focus": { border: "#6938EF solid 1px" },
            }}
            className=" bg-rawdapurple bg-opacity-5  p-3 font-body  "
          />
        </DialogContent>
        <DialogActions>
          {!publie ? (
            <Button
              onClick={handleClose}
              sx={{
                color: "#6938EF",
                mb: 2,
                fontFamily: "Poppins",
                "&:hover": { border: "#6643b5 solid 1px" },
              }}
            >
              Annuler
            </Button>
          ) : null}
          <Button
            onClick={handleLogValue}
            sx={{
              color: "white",
              mr: 2,
              mb: 2,
              fontFamily: "Poppins",
              "&:hover": { color: "#6938EF", border: "#6643b5 solid 1px" },
              background: "#6938EF",
            }}
          >
            {!publie ? "Publier" : "Publié!"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}