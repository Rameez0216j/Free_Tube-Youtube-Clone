import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from './SearchBar';

const NavBar = () => {
    return (
        <Stack
            direction="row"
            alignments="center"
            p={2}
            sx={{
                position: "sticky",
                background: "#000",
                top: 0,
                justifyContent: "space-between",
            }}
        >
			<Link to="/" style={{display:'flex',alignments:'center'}}>
				<img src={logo} alt='logo' height={45} />
                <Typography variant="h5" sx={{color:'white',ml:'10px',my:'auto'}} textAlign='left'>Free Tube</Typography>
			</Link>
			<SearchBar/>
		</Stack>
    );
};

export default NavBar;
