'use strict'

function ElectroDevice(name, power) {
    this.name = name;
    this.power = power;
    this.isEnabled = false;
}

ElectroDevice.prototype.enable = function () {
    this.isEnabled = true;
}

ElectroDevice.prototype.disable = function () {
    this.isEnabled = false;
    this.power = 0;
}

function Freezer(name, power) {
    ElectroDevice.apply(this, arguments);
}
Freezer.prototype = Object.create(ElectroDevice.prototype);

function Microwave(name, power) {
    ElectroDevice.apply(this, arguments);
}
Microwave.prototype = Object.create(ElectroDevice.prototype);

function CoffeeMachine(name, power) {
    ElectroDevice.apply(this, arguments);
}
CoffeeMachine.prototype = Object.create(ElectroDevice.prototype);

var freezer = new Freezer('Refrigerator', 230);
var microwave = new Microwave('Microwave', 50);
var сoffeeMachine = new CoffeeMachine('Coffee machine', 5);

microwave.disable();
freezer.enable();
сoffeeMachine.enable();

function Room(roomName) {
    this.devices = [];
    this.totalPower = 0;
    this.roomName = roomName;
}

Room.prototype.addDevice = function (device) {
    this.devices.push(device);
    this.totalPower += device.power;
    console.log('In ' + room.roomName + ': ' + device.name);
    return (this)
}

Room.prototype.searchByName = function (search) {
    var result = '';
    this.devices.forEach(
        function (item) {
            if (item.name.toLowerCase() === search.toLowerCase()) {
                result +=`\n Search electro device: ${item.name} power ${item.power} \n`;
            }
        }
    )
    console.log(result)
}

var room = new Room('Kitchen');
room.addDevice(freezer).addDevice(microwave).addDevice(сoffeeMachine);
console.log('Power consumption: ', room.totalPower);
room.searchByName('Refrigerator');