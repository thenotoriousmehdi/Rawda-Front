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
import PropTypes from 'prop-types';

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

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};


export default function CustomizedDialogsRdv() {
  const [open, setOpen] = React.useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };
  const [buttonTextform, setbuttonTextform] = useState('Envoyer');
  const [Rdvclosed, setRdvclosed] = useState(false);

 
   
 

  
  const [nomc, setNomc] = useState('');
 
  const [pnom, setPnom] = useState('');

  const [num, setNum] = useState('');

  const [datetoken, setDatetoken] = useState(new Date((new Date()).getTime() + 24 * 60 * 60 * 1000));
  
  const [selectedOption, setSelectedOption] = useState('10:00');


  const handlenomcChange = (event) => {
    setNomc(event.target.value);
  }

  const handlepnomcChange = (event) => {
    setPnom(event.target.value);
  }


  const handlenumChange = (event) => {
    setNum(event.target.value);
  }
 

 
  const [focused, setFocused] = useState(false);
 
  const handleFocus = (e) => {
    setFocused(true);
  };

  const [focusedp, setFocusedp] = useState(false);
  

  const [availableTimes, setAvailableTimes] = useState([ '10:00', '10:40', '11:20', '12:00', '13:20', '14:00', '14:40', '15:20'
]);
  const handleFocusp = (e) => {
    setFocusedp(true);
  };


  const handleSubmit = (event) => {
   
    event.preventDefault();
    setbuttonTextform('Envoyé!');
    setRdvclosed(false)  ; 
    console.log('Nom :', nomc);
  
    console.log('prenom :', pnom);

    console.log('Numero de †elephone:', num);
    
    console.log('date', datetoken);

    console.log('time', selectedOption);
    
  }
  
  const [Textconfirmation, setTextconfirmation] = useState(false) ; 
  const handleconfirmation = (e) =>{
    setTextconfirmation(true) ; 
   
     setbuttonTextform('Envoyer'); 
     setRdvclosed(false); 
      console.log('rdv annulé ', !Textconfirmation) ; 
    } ; 

    const handleClose = () => {
      setOpen(false);
      setFocused(false);
      setFocusedp(false); 
      setRdvclosed(true)  ;
      if( Textconfirmation ) {
        setTextconfirmation(false) ; 
      }
      if( buttonTextform==="Envoyé!"){
          // Remove the selected time from the available times array
      
      const updatedAvailableTimes = availableTimes.filter(
        (time) => time !== selectedOption
      );
      setAvailableTimes(updatedAvailableTimes);
        setSelectedOption(availableTimes[0])  ;
      }
    };
    const handleDateChange = async (date) => {
      setDatetoken(date);
      const availableTimes = await getAvailableTimes(date);
      setAvailableTimes(availableTimes);
    };
    const getAvailableTimes = async (date) => {
      // Call API to get available times for the selected date
      return  availableTimes; 
    };
    const handleChange = (event) => {
      setSelectedOption(event.target.value);
     
    };
    
   /* const getAvailableTimeSlots = (date) => {
      // Here you can fetch the already booked time slots for the selected date from your backend and remove them from the list of available time slots
      // For the sake of simplicity, we'll just remove '11:20' and '14:40' for May 10th
      const bookedTimeSlots = ['11:20', '14:40'];
      if (
        date &&
        date instanceof Date &&
        !isNaN(date.getTime()) // Check if it's a valid date
      ) {
        return availableTimeSlots.filter((availableTimeSlot) => !bookedTimeSlots.includes(availableTimeSlot));
      }
      return availableTimeSlots;
    };*/

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}
      sx={{color:'black' ,fontWeight: 600 ,m:4 ,mx:0 ,  mt:0 , fontSize:{xs:12, sm:20} , padding:1.7 ,fontFamily:'Poppins' ,border:'#6938EF solid 2px' ,  '&:hover': {border:'#6643b5 solid 1px'} }}>
         {(buttonTextform ==='Envoyé!')  ? 'Annuler le rendez-vous': 'Prendre un rendez-vous'}
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
         
  {( Rdvclosed && buttonTextform==='Envoyé!'  )  ?  

        <div className='p-2 text-base font-body leading-7'> 
            <p > Vous avez pris un rendez-vous pour visiter la crèche le  <strong>{datetoken.getDate() } / {datetoken.getMonth() + 1} / {datetoken.getFullYear() }  </strong> à <strong>{selectedOption}</strong>  au nom de <strong>{nomc} {pnom}</strong>. Veuillez consulter votre boîte  email pour la réponse de la crèche dans le délai de 2 jours. <br /> </p>        
     
     <p className='p-3'>  <br />    Êtes-vous sûr de vouloir annuler le rendez-vous ? </p>

      <div className="flex flex-wrap-reverse justify-end   mt-4 " >
        <Button onClick={handleClose} autoFocus   sx={{ m:1,  background:'rgba(105, 56, 239, 0.05)' , backgroundOpacity:0.5  ,  color:'#6938EF' ,fontFamily:'Poppins' , '&:hover': {border:'#6643b5 solid 1px'} }}>Non</Button> 
        <Button autoFocus  onClick={handleconfirmation}   sx={{   color:'white', m:1,fontFamily:'Poppins'  ,'&:hover': {color:'#6938EF' , border:'#6643b5 solid 1px'} ,  background:'#6938EF' }} >
         Oui 
        </Button>
      </div>  </div>  

    :
<>
{ Textconfirmation ? 
    <p className='p-4 py-8 text-base font-body leading-7' > Votre rendez-vous a était annulé avec succès!</p> :
  <form onSubmit={handleSubmit} >
       <Typography gutterBottom sx={{ fontSize:13}} >
            Pour avoir plus d'informations sur la crèche et pour compléter les procédures  
            d'inscription de votre enfant, veuillez prendre un rendez-vous dès maintenant !
       </Typography>

         <div   className='  pb-10  mb rounded-lg  text-center bg-rawdapurple bg-opacity-5'>
         

          <div className='flex  items-center flex-col'> 
        
          <label for="datepi "  className='  text-left w-4/5   sm:w-2/3 font-body  text-xs sm:text-sm mt-2 sm:ml-3 '>Date du rendez-vous:</label>
    
          <DatePicker  id="datepi"  required selected={datetoken} onChange={handleDateChange}  minDate={new Date((new Date()).getTime() + 24 * 60 * 60 * 1000) }
           filterDate={ date => date.getDay() !== 5 && date.getDay() !== 6  }  dateFormat='dd/MM/yyyy'
           className="rounded-md h-[38px] m-3 mt-1 w-4/5  justify-center  sm:w-2/3  text-sm md:text-base bg-white border-purple-400 border py-2 px-2  text-gray-700 placeholder-gray-400  focus:outline-violet-400 focus:ring-1 focus:border-violet-400   "
                                            /> 
            </div>  

        <div className='flex  items-center  flex-col'> 
          <label for="timeAptmnt "  className=' text-left  w-4/5  sm:w-2/3  font-body  text-xs sm:text-sm mt-2 sm:ml-2 '>Heure du rendez-vous:</label>
      
          { availableTimes.length > 0 ? (
  <select id="timeAptmnt" value={selectedOption} onChange={handleChange} required
    className="rounded-md h-[38px] m-3  w-4/5  mt-1  sm:w-2/3  text-sm md:text-base bg-white border-purple-400 border py-2 px-2   text-gray-700 placeholder-gray-400  focus:outline-violet-400 focus:ring-1 focus:border-violet-400   "
  >
    { availableTimes.map((time) => (
      <option key={time} value={time}>
        {time}
      </option>
    ))}
  </select>
) : (
  <p className='font-body p-3  text-sm border  border-purple-400 rounded-md'> Pas de rendez-vous disponibles pour cette date </p>
)}
           
</div>

   
</div>   

         
         <div className="flex  flex-wrap-reverse justify-end   mt-4 " >
  
  
  { buttonTextform==='Envoyer' ? 
   <Button onClick={handleClose} autoFocus   sx={{ m:1,  background:'rgba(105, 56, 239, 0.05)' , backgroundOpacity:0.5  ,  color:'#6938EF' ,fontFamily:'Poppins' , '&:hover': {border:'#6643b5 solid 1px'} }}>Annuler</Button> 
   : null }         
             <Button autoFocus  type='submit' disabled={availableTimes.length === 0} sx={{   color:'white', m:1,fontFamily:'Poppins'  ,'&:hover': {color:'#6938EF' , border:'#6643b5 solid 1px'} ,  background:'#6938EF' }} >
               {buttonTextform}
               </Button>

         </div>
           
  
            
          
       </form> } </>}
        </DialogContent>
        
      </BootstrapDialog>
    </div>
  );
}
/* <option value="10:00"  >10:00</option>
            <option value="10:40">10:40</option>
            <option value="11:20">11:20</option>
            <option value="12:00">10:40</option>
            <option value="13:20">13:20</option>
            <option value="14:00">14:00</option>
            <option value="14:40">14:40</option>
            <option value="15:20">15:20</option>*/
            