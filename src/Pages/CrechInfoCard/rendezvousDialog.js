import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useState } from 'react';


import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
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

export default function CustomizedDialogsRdv() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);

    setFocused(false);
    setFocusedp(false);

  };


  const [nomc, setNomc] = useState('');
 
  const [num, setNum] = useState('');

  const [value, setValue] = useState(new Date());
  
  const [selectedOption, setSelectedOption] = useState('10:00');


  const handlenomcChange = (event) => {
    setNomc(event.target.value);
  }



  const handlenumChange = (event) => {
    setNum(event.target.value);
  }
 

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [focused, setFocused] = useState(false);
 
  const handleFocus = (e) => {
    setFocused(true);
  };

  const [focusedp, setFocusedp] = useState(false);
 
  const handleFocusp = (e) => {
    setFocusedp(true);
  };


  const handleSubmit = (event) => {
   
    event.preventDefault();
    console.log('Nom complet:', nomc);
  
    console.log('Numero de †elephone:', num);
    
    console.log('date', value);

    console.log('time', selectedOption);
    
  }
  
 
  

 

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}
      sx={{color:'black' ,fontWeight: 600 ,m:4 ,mx:0 ,  mt:0 , fontSize:{xs:12, sm:20} , padding:1.7 ,fontFamily:'Poppins' ,border:'#6938EF solid 2px' ,  '&:hover': {border:'#6643b5 solid 1px'} }}>
       Prendre un rendez-vous
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="sm"
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}
        sx={{fontFamily:'Poppins' ,fontWeight:600  , fontSize: {xs:'16px' , sm:"20px" },
        backgroundImage: 'linear-gradient(100deg, #f3f30f 100%, #fefefe 0%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: { xs: '32% .4em'    , md:'36% .5em'},
        backgroundPosition: {xs:'8% 64%',md:'6% 64%'}}}
        >
          Prise de rendez-vous 
        </BootstrapDialogTitle>
        <DialogContent dividers>
         <Typography gutterBottom sx={{ fontSize:13}} >
            Pour avoir plus d'informations sur la créche et pour completer les procedures  
            d'inscription de votre enfant ,veuillez prendre un rendez-vous dés maintenant ! 
  </Typography>

          <form onSubmit={handleSubmit} >
       

         <div   className='   rounded-lg  text-center bg-rawdapurple bg-opacity-5'>
         

          <div className='flex  items-center flex-col'> 
          <label for="datepi "  className='  text-left w-4/5   sm:w-2/3 font-body  text-xs sm:text-sm mt-2 sm:ml-3 '>Date du rendez-vous:</label>
    
          <DatePicker  id="datepi" className='   justify-center'  required selected={value} onChange={(date) => { setValue(date)  } }  minDate={new Date((new Date()).getTime() + 24 * 60 * 60 * 1000) }
           filterDate={ date => date.getDay() !== 5 && date.getDay() !== 6  }  dateFormat='dd/MM/yyyy'
         className="rounded-md h-[38px] m-3 mt-1 w-4/5   sm:w-2/3  text-sm md:text-base bg-white border-purple-400 border py-2 px-2  text-gray-700 placeholder-gray-400  focus:outline-violet-400 focus:ring-1 focus:border-violet-400   "
                                            /> 
            </div>  

        <div className='flex  items-center  flex-col'> 
          <label for="timeAptmnt "  className=' text-left  w-4/5  sm:w-2/3  font-body  text-xs sm:text-sm mt-2 sm:ml-2 '>Heure du rendez-vous:</label>
      
          <select id="timeAptmnt" value={selectedOption} onChange={handleChange} required
            className="rounded-md h-[38px] m-3  w-4/5  mt-1  sm:w-2/3  text-sm md:text-base bg-white border-purple-400 border py-2 px-2   text-gray-700 placeholder-gray-400  focus:outline-violet-400 focus:ring-1 focus:border-violet-400   "
            >
            <option value="10:00"  >10:00</option>
            <option value="10:40">10:40</option>
            <option value="11:20">11:20</option>
            <option value="12:00">10:40</option>
            <option value="13:20">13:20</option>
            <option value="14:00">14:00</option>
            <option value="14:40">14:40</option>
            <option value="15:20">15:20</option>
           </select>
           
</div>


<div className='flex items-center  flex-col'> 
            <label for="nomk "  className=' text-left w-4/5   sm:w-2/3  font-body  text-xs sm:text-sm mt-2 sm:ml-2 '>Nom complet:</label>
              

              <input  type="text"  id="nomk"  placeholder="Nom complet"  required onChange={handlenomcChange}
               onBlur={handleFocus}                         
               focused={focused.toString()} 
               pattern='^[a-zA-Z0-9\s]{3,30}$'
               
                className="rounded-md h-[38px] m-3 mt-1  w-4/5   sm:w-2/3   text-sm md:text-base bg-white border-purple-400  border py-2 px-2 
                text-gray-700 placeholder-gray-400  focus:outline-violet-400 focus:ring-1 focus:border-violet-400  
                 "
              /> 

<span className=' text-xs text-red-500 hidden px-2 group-focus:block group-invalid:block  '> Nombre de caracteres entre 3-30 et pas de caracteres spéciaux</span>    
            </div>   

      <div className='flex  items-center flex-col'> 
          <label for="numtel "  className='  text-left w-4/5   sm:w-2/3  font-body  text-xs sm:text-sm mt-2 sm:ml-2 '>Numero de telephone:</label>
                 
              <input type="text" id="numtel" placeholder="Numero de telephone" required onChange={handlenumChange}
                 onBlur={handleFocusp}  
                 pattern='^(\+213|00213|0)(5|6|7)[0-9]{8}$'                      
                 focusedp={focusedp.toString()} 
               className="rounded-md h-[38px] m-3 mb-2 mt-1 w-4/5   sm:w-2/3  text-sm md:text-base  bg-white
                border-purple-400 border py-2 px-2   text-gray-700 placeholder-gray-400 
                 focus:outline-violet-400 focus:ring-1 focus:border-violet-400  
                  "
               />
         <span className=' text-xs text-red-500 mb-2 hidden px-2 group-focus:block group-invalid:block'> le numero doit contenir 10 numeros seulement et respecter le format</span>    
          
      </div>
</div>   

         
         <div className="flex  flex-wrap-reverse justify-end   mt-4 " >
               <Button onClick={handleClose} autoFocus   sx={{ m:1,  background:'rgba(105, 56, 239, 0.05)' , backgroundOpacity:0.5  ,  color:'#6938EF' ,fontFamily:'Poppins' , '&:hover': {border:'#6643b5 solid 1px'} }}>Annuler</Button> 
               <Button autoFocus  type='submit' sx={{   color:'white', m:1,fontFamily:'Poppins'  ,'&:hover': {color:'#6938EF' , border:'#6643b5 solid 1px'} ,  background:'#6938EF' }} >
               Envoyer
               </Button>

         </div>
           
  
            
          
       </form>

        </DialogContent>
        
      </BootstrapDialog>
    </div>
  );
}