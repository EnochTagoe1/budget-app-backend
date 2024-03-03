const express = require("express");

function validateForm(req, res, next) {
    if (!req.body.name || !req.body.category || !req.body.url)
      res.status(400).json({ message: "Invalid Inputs" });
    else next();
  };

//create a Router to ref in app.js
const items = express.Router();

//return the data as json from model using controller
const itemsArray = require("../models/item.model.js");//../models? throws error//

//create GET route to return the json data to client
items.get("/", (req, res) => {
    res.json({ items: itemsArray })
});//creates routes for fetches


//get a single item
items.get("/:id", (req, res) => {
    const { id } = req.params;
  
    const item = itemssArray.find((item) => item.id === +id);
  
    res.json({ item });
  });
  
  items.post("/", validateForm, (req, res) => {
    //grab the information from the form
  
    // console.log(req.body);
  
    // i need to fake create a new id. i will take the last id number in the items array and add 1
    const newId = itemsArray[itemsArray.length - 1].id + 1;
  
    // req.body is an object where I receive all the datat from the form. I will add an id to the object
    req.body.id = newId;
  
    //add data to the end of the array
    itemsArray.push(req.body);
  
    // send back all the items because I plan to reset the setItems state
    res.json({ items: itemsArray });
  });
  
  items.put("/:id", (req, res) => {
    const { id } = req.params;
  
    const itemIndex = itemsArray.findIndex((log) => log.id === +id);
  
    if (itemIndex > -1) itemsArray[itemIndex] = req.body;
  
    // send back all the items because I plan to reset the setItems state
    res.json({ items: itemsArray });
  });
  
  items.delete("/:id", (req, res) => {
    const { id } = req.params;
  
    itemsArray = itemsArray.filter((item) => item.id !== +id);
  
    res.json({ items: itemsArray });
  });
  
  // export line 5 items variable to be used in the app.js file
  module.exports = items;
  