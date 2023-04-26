import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Form } from 'react-router-dom';
import  "../../index.css"
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

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const [focused, setFocused] = useState(false);
  
  const handleFocus = (e) => {
    setFocused(true);
  };
  const [focusedp, setFocusedp] = useState(false);
  
  const handleFocusp = (e) => {
    setFocusedp(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    
    setFocused(false);
    setFocusedp(false);
  };

  
  
  const [nomc, setNomc] = useState('');
  const [prenom, setPrenom] = useState('');
 


  const handlenomcChange = (event) => {
    setNomc(event.target.value);
  }

  const handlePrenomChange = (event) => {
    setPrenom(event.target.value);
  }
 
  const [datenaiss, setDatenaiss] = useState('');

  function handleDatenaissChange(event) {
    setDatenaiss(event.target.value);
  }
  const [dateEnt, setDatent] = useState('');

  function handleDatentChange(event) {
    setDatent(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nom :', nomc);
    console.log('Prenom:', prenom);
    console.log('date de naissance :', datenaiss);
    console.log('date d entree :', dateEnt);

    
    
  }


  

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} 
       
      sx={{color:'white',m:4 ,ml:{lg:0 , xs:2}, mt:0 ,  fontSize:{xs:12 , sm:20},padding:1.7 ,fontWeight: 600 , display: 'flex' , fontFamily:'Poppins'  ,'&:hover': {color:'#6938EF' , border:'#6643b5 solid 1px'} ,  background:'#6938EF'}}>
      Inscrire mon enfant
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="lg"
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} 
       sx={{fontFamily:'Poppins' ,fontWeight: 600 , fontSize:{xs:15, sm:20}  , textAlign:'center' , 
       backgroundImage: 'linear-gradient(100deg, #f3f30f 100%, #fefefe 0%)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '41% .3em',
  backgroundPosition: '50% 64%',
       }} >
        Les informations de l’enfant
        </BootstrapDialogTitle>
        <DialogContent     >


           


        <form onSubmit={handleSubmit} >  
      


         <div className="flex flex-wrap justify-center  bg-rawdapurple bg-opacity-5 ">                      
                       <div className=' flex flex-wrap flex-col'>               
                         <label for="nom"  className=' font-body  text-xs sm:text-sm ml-3 mt-2'>Nom:</label>
                                
                                           <input
                                            type="text"
                                            id="nom"
                                              placeholder="Nom "
                                            required
                                            pattern= "^[A-Za-z0-9]{3,16}$"
                                            onChange={handlenomcChange}
                                            onBlur={handleFocus}                         
                                            focused={focused.toString()}     
                                            className="rounded-md  w-11/12 h-[38px] md:w-[310px] m-2 bg-white border-purple-400  border p-2    text-gray-700 placeholder-gray-400 shadow-sm text-sm sm:text-base 
                                             focus:outline-violet-400 focus:ring-2 focus:border-violet-400
                                           "
                                             
                                            />
                         <span className=' text-xs text-red-500  mb-2 hidden px-2  '> Nombre de caracteres entre3-16 et pas de caracteres spéciaux </span>
                        </div>    

                       <div className=' flex flex-wrap  flex-col'>   
                        <label for="prenom"  className=' font-body  text-xs sm:text-sm ml-3 mt-2'>Prenom:</label>
                         
                                             <input
                                            type="text"
                                            id="prenom"
                                              placeholder=" Prenom"
                                            required
                                            onBlur={handleFocusp}                         
                                            focusedp={focusedp.toString()}   
                                            pattern="^[A-Za-z0-9]{3,16}$"
                                            onChange={handlePrenomChange}
                                            className="rounded-md  h-[38px]  w-11/12 md:w-[310px]  bg-white border-purple-400  border py-2 px-2 m-2 text-gray-700 placeholder-gray-400 shadow-sm text-sm sm:text-base 
                                             focus:outline-violet-400 focus:ring-2 focus:border-violet-400
                                        "
                                 />
                         <span className=' text-xs text-red-500 hidden px-2  '> Nombre de caracteres entre 3-16 et pas de caracteres spéciaux</span>
               
                       </div>
                    </div>          
   
                   
                    <div className="flex flex-wrap justify-center bg-rawdapurple bg-opacity-5"> 
                    <div  className='flex flex-col'>
                        <label for="datenaissance "  className=' font-body  text-xs sm:text-sm ml-3 mt-1'>Date de naissance:</label>
                         <input
                             type="date"
                             id="datenaissance "
                             value={datenaiss} onChange={handleDatenaissChange}
                             required
                             className="rounded-md  h-[38px]  md:w-[310px] my-4 mt-1 bg-white border-purple-400  border py-2 px-2 m-2 text-gray-700 placeholder-gray-400 shadow-sm text-sm sm:text-base 
                              focus:outline-violet-400 focus:ring-2 focus:border-violet-400 " 
                               />
                     </div>


                    <div  className='flex flex-col'> 
                      <label for="datEnt"  className=' font-body  text-xs sm:text-sm mt-1 ml-4'>Date d'entrée en créche :</label>
    
                             <input
                             type="date"
                             id="datEnt"    
                             value={dateEnt} onChange={handleDatentChange}
                            required
                           className="rounded-md  h-[38px]  md:w-[310px] my-4 bg-white  mt-1 border-purple-400  border py-2 px-2 m-2 text-gray-700 placeholder-gray-400 shadow-sm  text-sm sm:text-base  focus:outline-violet-400 focus:ring-2 focus:border-violet-400   "
                           /> 
                    </div>
                 </div>


          <div className="flex  flex-wrap-reverse justify-end  mt-6 " >
              <Button onClick={handleClose} autoFocus   sx={{ m:1,  background:'rgba(105, 56, 239, 0.05)' , backgroundOpacity:0.5  ,  color:'#6938EF' ,fontFamily:'Poppins' , '&:hover': {border:'#6643b5 solid 1px'} }}>Annuler</Button> 
       
               <Button autoFocus  type='submit' sx={{   color:'white', m:1,fontFamily:'Poppins'  ,'&:hover': {color:'#6938EF' , border:'#6643b5 solid 1px'} ,  background:'#6938EF' }} >
              Inscrire mon enfant
          </Button>

             </div>
           </form>         


        </DialogContent>
       
      </BootstrapDialog>
    </div>
  );
}
/**  */