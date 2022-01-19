class RoadBridge {
    constructor() {
        this.cars = 0
        this.bridgeCapacity = 50
        this.bridgeStatusCars = false
        this.bridgeStatusHGV = false
    }

    carGoesOnTheBridge(vehicleType) {
        if (vehicleType === 'EMS') {
            this.cars += 1
        } else if (vehicleType === undefined) {
            if (this.cars<=this.bridgeCapacity && this.bridgeStatusCars === true) {
                this.cars += 1
            } else if (this.bridgeStatusCars === false && this.bridgeStatusHGV === false) {
                return 'The bridge is currently closed'
            }
        }
        if (vehicleType === 'HGV' && this.bridgeStatusHGV === true) {
            this.cars += 2
        }
        return 'Bridge at maximum capacity'
    }

    disallowAccessHGV() {
        this.bridgeStatusHGV = false
    }

    changeBridgeStatus() {
        this.bridgeStatusCars = true
        this.bridgeStatusHGV = true
    }

    carLeavesThebridge() {
        return this.cars -= 1
    }

    carsCurrentlyOnTheBridge() {
        return this.cars
    }
}

module.exports = RoadBridge;