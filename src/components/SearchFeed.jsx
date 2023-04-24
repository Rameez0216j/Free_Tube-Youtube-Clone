import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
    const [videos, setVideos] = useState([]);
	const {searchTerm}=useParams(); // got this from router slug

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
            setVideos(data.items)
        );
    }, [searchTerm]);

    return (
        <Box p={2} s={{ overflow: "auto", height: "90vh", flex: 2 }}>
            <Typography
                variant="h4"
                fontWeight="bold"
                mb={3}
                sx={{ color: "white" }}
				textAlign="center"
            >
                Search Result for : {" "}
                <span style={{ color: "#F31503" }}>{searchTerm}</span> Videos
            </Typography>
            <Videos videos={videos} />
        </Box>
    );
};

export default SearchFeed;
