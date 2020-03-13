import React, {Component} from 'react';
import './card.css';

import {
    Link
  } from "react-router-dom";

export default class Cards extends Component {


    constructor(props){
        super(props);

        this.state = {
            trips: [{
                "id" : 1,
                "name" : "Prague",
                "days" : "Prague is home to a number of famous cultural attractions, many of which survived the violence and destruction of 20th-century Europe. Main attractions include the Prague Castle, the Charles Bridge, Old Town Square with the Prague astronomical clock.",
            }, 
            {
                "id" : 2,
                "name" : "Amsterdam",
                "days" : "Amsterdam is the capital and most populous municipality of the Netherlands. Amstelredamme, indicative of the city's origin: a dam in the river Amstel. Settled as a small ﬁshing village in the late 12th century, ",

            },
            {
                "id" : 3,
                "name" : "Switzerland",
                "days" : "We are going to Zurich, Lucerne and to Rhine Waterfall (Europe's largest waterfall). It is again a one day trip to keep the costs low, since the hostels in Zurich are really expensive. But we have made again the most efficient trip schedule for you."
            },
            {
                "id" : 4,
                "name" : "Belgium",
                "days" : "The historic centre of Bruges is essentially a medieval town wherein you can find many Gothic brick structures and buildings. Since it was added to the UNESCO World Heritage Sites list, it started to gain international attention."
            },
            {
                "id" : 5,
                "name" : "Paris",
                "days" : "Since the 17th century, Paris has been one of Europe's major centres of finance, fashion, science, and the arts. Paris is especially known for its museums: The Louvre was the most visited art museum in the world. You can see here tens of thousands of works of art."
            },
            {
                "id" : 6,
                "name" : "Budapest",
                "days" : "Budapest which is the capital and the most populous city of Hungary. Budapest has it all: castles, palaces, parks, and some of the best Art Nouveau architecture in Europe. Budapest is really two cities in one—Buda and Pest—separated by the Danube River."
            },
            {
                "id" : 7,
                "name" : "Rome",
                "days" : "Rome is so beautiful! Trevi Fountain, Pantheon, Spanish stairs, the Colosseum... The Colosseum is more impressive than any football stadium you've ever seen, AND it's 2000 years old. Vatican City is the world's smallest independent international state."
            },
            {
                "id" : 8,
                "name" : "Scandinavia",
                "days" : "Copenhagen is both the capital and the most populous city of Denmark. Known for its excellent palaces, museums, Europe's longest shopping street and so on. You can experience the Freetown Christiania which has their own rules and regulations."
            },
        ]
        }
    } 

    render(){
        return (

            <div class="card-container" >
            {this.state.trips.map(item => {
                return( <Link to={"/trip/"}>
                        <div className="cardTrip" >
                            <div className = "card-image">
                                
                            </div>                     
                            <div className="card-text">
                             <h2>{item.name}</h2>
                                <p>{item.days}</p>
                            </div>
                                <div className="card-footerTrip">
                                    <div>
                                        <h2>NEXT >> </h2>
                                    </div>
                                </div>
                                </div>
                                    

                        
                         
                </Link>);

            })
            }
            </div>
        
            
        );
    }
    
}

    