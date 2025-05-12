"use client";

// Imports
import Grid from "@mui/material/Grid2";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import listProjetos from "@/data/projetos";
import Projeto from "./projetos";
import {Box, useTheme, useMediaQuery} from "@mui/material";

const projetos = listProjetos();

const ComponentCarousel = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid alignItems="center">
            <Box sx={{px: {xs: 2, md: 10}, overflow: "hidden"}}>
                <Swiper
                    modules={[Navigation]}
                    navigation
                    style={{
                        padding: "20px 0",
                        height: isSmall ? "auto" : "700px",
                    }}
                    spaceBetween={20}
                    centeredSlides={false}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.1,
                        },
                        768: {
                            slidesPerView: 2.2,
                        },
                    }}
                >
                    {projetos.map((projeto, index) => (
                        <SwiperSlide key={index} style={{height: "100%"}}>
                            <Box
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    alignItems: isSmall ? "center" : "stretch",
                                    justifyContent: "center",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: isSmall ? "center" : "flex-start",
                                        height: isSmall ? "auto" : "100%",
                                    }}
                                >
                                    <Projeto {...projeto} />
                                </Box>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Grid>
    );
};

export default ComponentCarousel;
