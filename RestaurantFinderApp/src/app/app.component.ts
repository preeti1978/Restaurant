import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restaurant Finder App';
  searchphrase="";

  //original data base of all restaurants
  listOfRestaurants=[
  { "name":"Al Saj" ,
    "address":"1 Kazhakuttom, Trivandrum",
    "directions":"Go straight from Kazhakuttom towards Technopark",
    "hoursOfOperation":"8am to 12pm",
    "menu":"Arabian and Kerala cuisine",
    "website":"http://www.alsajhotel.com",
    "contact":"06127868",
    "catering":"Provides outdoor catering services",
    "others":"",
     "lat":8.5755,
    "long":76.8699
   },
  {
    "name":"Ambrosia Bakers" ,
    "address":"Bakery Junction, Trivandrum",
    "directions":"First from Panavila to main Road",
    "hoursOfOperation":"10am to 10pm",
    "menu":"Continental and confectionery items",
    "website":"https://theambrosia.com/",
    "contact":"99906127868",
    "catering":"Birthday party hosting done",
    "others":"Theme based birthday cakes available on order",
    "lat":8.5002,
    "long":76.9538
  },
  {
    "name":"Supreme Bakers" ,
    "address":"Kuravankonam, Trivandrum",
    "directions":"Towards Pattom Junction",
    "hoursOfOperation":"10am to 10pm",
    "menu":"Continental , Chinese, North Indian",
    "website":"http://www.supreme-group.in/",
    "contact":"05676127868",
    "catering":"",
    "others":"",
    "lat":8.4730,
    "long":76.9479
    

  },
  {
    "name":"Al Madina" ,
    "address":"Kowdiar, Bangalore",
    "directions":"At Kowdiar junction",
    "hoursOfOperation":"6am to 10pm",
    "menu":"Traditional moplah items available",
    "website":"http://almadina.com",
    "contact":"6127868",
    "catering":"",
    "others":"",
    "lat":24.5247,
    "long":39.5692


  }];


//list ofmatching restaurants to the serach phrase
matchingRestaurants=[];
//To know when the "Find" button is clicked
findButtonClicked:boolean=false;
//To know if length of matchingRestaurants is zero or not
matchingRestaurantsFound:boolean=false;



  //function called on form submission
  findMatch=(formVar)=>{

    this.findButtonClicked=true;
  	//for case-insenstive search
     var stringToSearch = formVar.restaurant.toUpperCase();
     
    //Iterate through the full DB array of objects
    var i=0;
    for (i=0;i<this.listOfRestaurants.length;i++){
//if the search phrase matches any of the restaurant name or address or menu or hours or website or contact or catering or others
//then add it to the matchingRestaurants list
       if (this.listOfRestaurants[i].name.toUpperCase().includes(stringToSearch)  || 
         this.listOfRestaurants[i].address.toUpperCase().includes(stringToSearch) || 
         this.listOfRestaurants[i].menu.toUpperCase().includes(stringToSearch) ||
         this.listOfRestaurants[i].hoursOfOperation.toUpperCase().includes(stringToSearch) ||
         this.listOfRestaurants[i].website.toUpperCase().includes(stringToSearch) ||
         this.listOfRestaurants[i].contact.toUpperCase().includes(stringToSearch) ||
         this.listOfRestaurants[i].catering.toUpperCase().includes(stringToSearch) ||
         this.listOfRestaurants[i].others.toUpperCase().includes(stringToSearch)
      ){
         //if the name or address or menu contains the search phrase, add it to matchingList array 
        this.matchingRestaurants.push(this.listOfRestaurants[i]);
      //alert(this.matchingRestaurants[i].mapURL);

        //set boolean variable true if atleast one matching found
       this.matchingRestaurantsFound=true;
      }//end if
    }//end for

  }

//This function is called on click of text box. To refresh all search results for the nextsearch
  clearAll=()=>{
    //empty the matchingList. Reset for the next search
    while(this.matchingRestaurants.length > 0) {
    this.matchingRestaurants.pop();
    }
    //resetting all flags 
    this.matchingRestaurantsFound=false;
    this.findButtonClicked=false;
  }

}
