class ElectricalAppliance {
// Constructor for Electrical Appliance Objects  
  constructor(name, brand, weight, price){
    this.name = name;
    this.brand = brand;
    this.weight = weight;
    this.price = price;
    this.turnOn = false;
  }

// Display info about Electrical Appliance Object
  getInfo(){
    console.log(this.name + " produced by " + this.brand + ". Item costs " + this.price + ", weight is " + this.weight + ".")
  }

// Turning Electrical Appliance on
  turnDeviceOn(){
    console.log(this.name + " is on.")
    this.turnOn = true;
  }

// Turning Electrical Appliance off
  turnOff(){
    console.log(this.name + " is off.")
    this.turnOn = false; 
  }
}


class Lamp extends ElectricalAppliance{
// Constructor  for Lamp objects
  constructor(lightSourceType, wattage, name, brand, weight, price ){
    super(name, brand, weight, price);
    this.lightSourceType = lightSourceType;
    this.wattage = wattage;
  }

//The electricity cost of the Lamp Object for period of time in hours
  costOfRun(periodInHours){
  	const cost = this.wattage/1000 * periodInHours * 12;
  	console.log("Energy consumed in " + periodInHours + " hours costs " + cost + " cents");
  }

// Display info about Lamp Object
  getInfo(){
  	super.getInfo();
  	console.log("it has " + this.lightSourceType + " type of bulb");
  }
}


class Computer extends ElectricalAppliance{
// Constructor  for Computer objects
  constructor(operationSystem, size, storage, name, brand, weight, price ){
    super(name, brand, weight, price);
    this.operationSystem = operationSystem;
    this.size = size;
    this.storage = storage;
    
  }
}


//Create a Computer object
const myPc = new Computer("Windows 10 Home", "15 Inch", "256 GB SSD", "Laptop", "Acer", "2.3 kg", "£450")

// Display info about Computer Object
myPc.getInfo();

//Create a Lamp object
const myLamp = new Lamp("LED", "7", "Desk Lamp", "Xlusive", "640g", "£17.99")

// Display info about Lamp Object
myLamp.getInfo();

//How much it costs to run Lamp object for 120 hours
myLamp.costOfRun(120);

//Turning Computer object on
myPc.turnOff();

//Turning Lamp object off
myLamp.turnDeviceOn();


