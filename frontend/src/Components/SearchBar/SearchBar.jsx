import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';

// Slide transition for Dialog
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export default function SearchBar() {
  const [open, setOpen] = React.useState(false);

  // Open the Dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Close the Dialog
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* Search Button with Icon */}
      <Button
        className="rounded-full p-3 hover:bg-primary-white hover:text-primary-black transition"
        onClick={handleClickOpen}
      >
        <SearchOutlinedIcon className="text-black" />
      </Button>

      {/* Full-screen Search Dialog */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{
          backgroundColor: 'black', // Ensure the entire background is black
        }}
      >
        {/* Black AppBar with Close Icon */}
        <AppBar
          sx={{
            position: 'relative',
            backgroundColor: 'black', // AppBar is completely black
            boxShadow: 'none',
          }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              sx={{
                color: 'white', // Close icon color set to white for contrast
              }}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Main Search Area */}
        <Box
          sx={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 4,
            padding: 4,
            backgroundColor: 'black', // Ensure the search area background is also black
          }}
        >
          {/* Search Input Field */}
          <TextField
            id="search-bar"
            placeholder="Type keyword here"
            InputProps={{
              style: {
                color: 'white', // Text inside the input is white
              },
            }}
            sx={{
              width: '100%',
              maxWidth: 600, // Limit the width of the search bar
              '& .MuiOutlinedInput-root': {// Rounded search bar
                paddingLeft: 2,
                paddingRight: 2,
                color: 'white', // Text color inside the input field
                borderColor: 'white',
              },
              '& input': {
                padding: '12px 16px',
                fontSize: '18px',
              },
              '& fieldset': {
                borderColor: 'white', // Set the border color to white
              },
            }}
          />
          <button className='text-primary-white bg-primary-Camel px-6 py-2 rounded hover:bg-black hover:text-primary-Camel hover:border border-primary-Camel'>Search</button>
        </Box>
      </Dialog>
    </div>
  );
}
