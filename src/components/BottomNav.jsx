import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import TvIcon from '@mui/icons-material/Tv';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router';


const styles ={
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#6ec6ff",
    zIndex: 100,
  },
}

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  React.useEffect(()=> {
    if(value === 0){
      navigate('/')
    }
    if(value === 1){
      navigate('/movies')
    }
    if(value === 2){
      navigate('/series')
    }
    if(value === 3){
      navigate('/search')
    }
  }, [value])

  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={styles.root}
      >
        <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} style={{ color: "white" }}/>
        <BottomNavigationAction label="Movies" icon={<MovieIcon />} style={{ color: "white" }}/>
        <BottomNavigationAction label="Tv Series" icon={<TvIcon />} style={{ color: "white" }}/>
        <BottomNavigationAction label="Search" icon={<SearchIcon />} style={{ color: "white" }}/>
      </BottomNavigation>
    </Box>
  );
}
