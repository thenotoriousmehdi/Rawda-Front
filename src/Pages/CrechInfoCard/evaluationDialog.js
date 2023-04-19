import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextareaAutosize } from '@mui/material';

import Rating from '@mui/material/Rating';



export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
   
  const [value, setValue] = React.useState(0);
  return (
    <div>
<Button variant="outlined" onClick={handleClickOpen}  sx={ {mt:6 ,width:160 , height:50,  border:'solid #6938EF 2px' ,fontFamily:'Poppins',  color: 'black',
 fontSize: 20 , fontWeight: 400 ,  '&:hover': {border:'#6643b5 solid 1px'}  }} >
        EVALUER
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{fontFamily:'Poppins' ,fontWeight: 600  }}>Evaluation de la créche </DialogTitle>
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
             placeholder="Laisser un commentaire (moins de 150 mots)"
             style={{ width: 500 }}
             sx={{mt:6 ,  border:'#6938EF solid 1px' , '&:focus': {border:'#6938EF solid 1px'} }}
             className=' bg-rawdapurple bg-opacity-5  p-3 font-body  focus:border-rawdapurple z-10 '
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color:'#6938EF' , mb:2,fontFamily:'Poppins' , '&:hover': {border:'#6643b5 solid 1px'} }}>Annuler</Button>
          <Button onClick={handleClose} sx={{ color:'white', mr:2 , mb:2,fontFamily:'Poppins'  ,'&:hover': {color:'#6938EF' , border:'#6643b5 solid 1px'} ,  background:'#6938EF' }}>Publier</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
 /*class="border border-rawdapurple  rounded-lg font-body w-40  h-14  mt-14    font-medium text-2xl text-black"* */
 