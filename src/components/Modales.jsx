import {Dialog,DialogContent,DialogTitle, Typography } from "@mui/material"

export default function Modal({nombre= "modal",setOpen,open,children}){
const handleClose= ()=> {
    setOpen(false)
}
return (
    <Dialog
      maxWidth="xs"
      fullWidth={true}
      open={open}
      onClose={handleClose} 
    >
      <DialogTitle sx={{color:"#FE2472"}}>
      <h2 className="fw-bold text-center">{nombre}</h2>
      </DialogTitle>
      <DialogContent>
         {
              children
          }
      </DialogContent>
      
      
    </Dialog>
);
}

export function ModalSm({nombre= "modal",setOpen,open,children}){
  const handleClose= ()=> {
      setOpen(false)
  }
  return (
      <Dialog
       
        maxWidth="sm"
        open={open}
        onClose={handleClose} 
      >
        <DialogTitle>
        {nombre}
        </DialogTitle>
        <DialogContent>
           {
                children
            }
        </DialogContent>
        
        
      </Dialog>
  );
  }

