import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import themeDark from "../../componentsLibrary/dist/themes/themeDark";
import themeLight from "../../componentsLibrary/dist/themes/themeLight";
import themeRed from "../../componentsLibrary/dist/themes/themeRed";
import themeGreen from "../../componentsLibrary/dist/themes/themeGreen";
import CustomButton from "../../componentsLibrary/dist/components/CustomButton";
import CustomModal from "../../componentsLibrary/dist/components/CustomModal";
import CustomCard from "../../componentsLibrary/dist/components/CustomCard";
import CustomNavMenu from "../../componentsLibrary/dist/components/CustomNavMenu";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const App: React.FC = () => {
  const [theme, setTheme] = useState(themeDark);
  const [modalOpen, setModalOpen] = useState(false);

  const switchTheme = (themeName: string) => {
    switch (themeName) {
      case "dark":
        setTheme(themeDark);
        break;
      case "light":
        setTheme(themeLight);
        break;
      case "red":
        setTheme(themeRed);
        break;
      case "green":
        setTheme(themeGreen);
        break;
      default:
        setTheme(themeDark);
    }
  };

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, onClick: () => alert('Home Clicked') },
    { text: 'About', icon: <InfoIcon />, onClick: () => alert('About Clicked') },
    { text: 'Contact', icon: <ContactMailIcon />, onClick: () => alert('Contact Clicked') },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ padding: "20px" }}>
{/* CustomNav */}
      <CustomNavMenu menuItems={menuItems}/>
        <h1>Themed Application</h1>
{/* custom button */}
        <div style={{ display: "flex", flexDirection: "row", gap: 2 }}>
          <CustomButton
            label="click me"
            onClick={() => alert("Button Clicked!")}
          />
          <CustomButton
            label="open Modal"
            onClick={() => setModalOpen(true)}
          ></CustomButton>
        </div>
{/* modal */}
        <CustomModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title={"Custom Modal Title"}
          content={"Modal which adapt theme"}
        />
        <br />
{/* Card */}
        <CustomCard
          title={"Custom Card"}
          content={"This adapt color theme."}
          imgURL={
            "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg"
          }
          alt={"Nature"}
        ></CustomCard>
        <br />
        <div style={{ display: "flex", flexDirection: "row", gap: 7 }}>
          <button style={{ padding: 6 }} onClick={() => switchTheme("dark")}>
            Dark Theme
          </button>
          <button style={{ padding: 6 }} onClick={() => switchTheme("light")}>
            Light Theme
          </button>
          <button style={{ padding: 6 }} onClick={() => switchTheme("red")}>
            Red Theme
          </button>
          <button style={{ padding: 6 }} onClick={() => switchTheme("green")}>
            Green Theme
          </button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
