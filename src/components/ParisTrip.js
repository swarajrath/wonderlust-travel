import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paris from './images/paris.jpg';
import Paris2 from './images/paris2.jpg';
import Paris3 from './images/paris3.jpg';
import "./PredefinedTrips.css";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <h1 className="parisHead">A trip to Paris</h1>
            <div className="slideImages">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={Paris} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={Paris2} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={Paris3} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Destination" {...a11yProps(0)} />
                    <Tab label="Trip Details" {...a11yProps(1)} />
                    <Tab label="Departures and Prices" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} className="m-5">
                <h2>Paris</h2>
            Have you ever been to Paris? If not, then it's time to do it now with Studifahrten! If yes, then it's time to do it with Studifahrten again! :)

Since the 17th century, Paris has been one of Europe's major centres of finance, fashion, science, and the arts. Paris is especially known for its museums: The Louvre was the most visited art museum in the world. You can see here tens of thousands of works of art - from Mesopotamian, Egyptian and Greek antiquities to masterpieces by artists such as da Vinci (including his incomparable Mona Lisa), Michelangelo and Rembrandt.

Are you ready to take your most beautiful picture in Paris with Eiffel tower? No one can imagine Paris without Eiffel Tower. The Eiffel has been the symbol of France and Paris for decades. More than 7 million people visit the Eiffel Tower every year.

You must also visit to Notre Dame Cathedral which is located in Paris's most visited part. This cathedral with upwards of 14 million visitors per year, is a masterpiece of French Gothic architecture.

On this trip you will also have a chance to see: Arc de Triomphe, Sacre-Coeur Cathedral, Musee d’Orsay, Jardin du Luxembourg The Luxembourg Garden, Montmartre, the neighbourhood in which Sacre Coeur resides, and enjoy one of Paris’ most authentic areas.

Visiting Sacré-Cœur is an incredible experience, and one of the most interesting place in Paris. You should listen musicians performance on the steps in from of the Basilica.

Whether you take a bite to eat for lunch or kick back on the public chairs and people watch, you’ll be sure to enjoy the summer sunshine for a few hours.

Pont Alexandre III Surely this would have to be the prettiest bridge in the entire city! Running from the left to right bank of the seine, Pont Alexandre III also offers a great view of the Eiffel Tower.
Join us!
      </TabPanel>
            <TabPanel value={value} index={1} className="m-5">
            <h2>Trip Details</h2>
            Friday, 08.05.2020 - Departures
We start on Friday evening / night from Germany to Paris. Departure places and times are below.<br/><br/>
- Saturday, 09.05.2020 - Paris
We will arrive Paris around 08:00 in the morning. Our professional tour guide will get on the bus in Paris and we will have a sightseeing tour with our bus. In the sightseeing tour we will pass next to many beautiful sights of Paris like Avenue des Champs Elysees, Arc de Triomphe, Trocadero, Eiffel Tower, Les Invalides, Petit et Grand Palais, Place de la Concorde, Opera Garnier, La Fayette, Louvre, Notre Dame etc.
After the sightseeing tour we will give you tips about how to plan your day. Since Paris is quite big, you will have enough activities till we start our journey back from the beginning of Champs Elysees at around 23:00.
<br/><br/>
- Sunday, 10.05.2020 - Arrival
Arrival to Germany on Sunday morning.
      </TabPanel>
            <TabPanel value={value} index={2}>
            <h2>Departures and Prices</h2>
            Here are the departure cities, approximate departure times and prices:<br/><br/>

            <br/>The given departure times are approximate timings and can be 1 hour earlier or 1 hour later. We always send the exact departure times 3 days before the trip in the last email with all other trip info.
            <br/> Aachen Super C RWTH Aachen / Around 01:00 / 50 Euro
            <br/>Cologne Central Station / Around 23:15 / 50 Euro
            <br/>Dortmund Central Station / Around 20:15 / 50 Euro
            <br/>Düsseldorf Central Station / Around 22:00 / 50 Euro
            <br/>Essen Central Station / Around 21:00 / 50 Euro
            <br/>Frankfurt Central Station / Around 21:00 / 60 Euro
            <br/>Darmstadt Central Station / Around 22:00 / 60 Euro
            <br/>Karlsruhe Central Station / Around 22:00 / 65 Euro
            <br/>Mannheim Central Station / Around 23:00 / 60 Euro
            <br/>Stuttgart Airport / Around 21:00 / 65 Euro

            <br/><br/>👍On this trip we offer you:
            <br/>🚌 The round trip with a modern, private, touristic coach with AC/WC/DVD
            <br/>👨‍✈️ 2 friendly drivers and a trip leader who will take care of you
            <br/>🥐 A snack pack upon arrival for the morning
            <br/>📷 Sightseeing tour with our bus with a professional tour guide from Paris around 1 hour long
            <br/>🗺️ Studifahrten info, brochures, maps etc.
            <br/>📧 Postcard of Paris
            <br/>💪 Tips about the trip and the city
            <br/>👯 A great chance to make new friends and enjoy a new country

            <br/><br/>💰 Not included are:
            <br/>🍽️ Your Lunch and Dinner
            <br/>🎁 Your private expenses like souvenirs, gifts etc.
      </TabPanel>
        </div>
    );
}