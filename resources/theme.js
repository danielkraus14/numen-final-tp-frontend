import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#db0000"
        },
        secondary: {
            main: "#831010"
        },
        fontColor: {
            main: "#564d4d"
        },
    },
    typography: {
        
        fontFamily: "Raleway, Arial, sans-serif",
        h2: {
            color: "#152154",
            fontSize: "3rem",
            fontWeight: '700'
        },
        h3: {
            color: "#152154",
            fontSize: "2.8rem",
            fontWeight: '600'
        },
        h4: {
            color: "#152154",
            fontSize: "1.6875rem",
            fontWeight: '600'
        },
        h5: {
            color: "#152154",
            fontSize: "1.3rem",
            fontWeight: '600'
        },
        h6: {
            color: "#152154",
            fontSize: "1rem",
            fontWeight: '500',
            lineHeight : '1.5rem'
        },
        body1:{
            color: "#152154",
        }
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: "0.5rem",
                },
                input: {
                    padding: "0.75rem",
                }

            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "5px",
                    '&.Mui-disabled': {
                        color: "grey",
                    }
                },
            }
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: "none",
                    fontFamily: "Raleway, Arial, sans-serif",
                    ":hover": {
                        color: "#564d4d",
                        textDecoration: "none"
                    }
                }
            }
        }
    }
});

export default theme;