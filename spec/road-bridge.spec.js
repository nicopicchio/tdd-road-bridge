const RoadBridge = require('../road-bridge.js')

describe('RoadBridge', () => {
    let roadBridge

    beforeEach(() => {
        roadBridge = new RoadBridge()
    })

    it('RoadBridge: should return the number of cars currently on the bridge', () => {
        roadBridge.changeBridgeStatus()
        const expected = 0
        const result = roadBridge.carsCurrentlyOnTheBridge()
        expect(result).toEqual(expected)
    })

    it('RoadBridge: if car moves onto the bridge, this should be recorded', () => {
        roadBridge.changeBridgeStatus()
        const expected = 6
        for (let i = 0; i < 6; i++) {
            roadBridge.carGoesOnTheBridge()
        }
        const result = roadBridge.carsCurrentlyOnTheBridge()
        expect(result).toEqual(expected)
    })

    it('RoadBridge: error is bridge is at capacity', () => {
        roadBridge.changeBridgeStatus()
        const expected = 'Bridge at maximum capacity'
        for (let i = 0; i < 50; i++) {
            roadBridge.carGoesOnTheBridge()
        }
        const result = roadBridge.carGoesOnTheBridge()
        expect(result).toEqual(expected)
    })

    it('RoadBridge: record when a car leaves the bridge', () => {
        roadBridge.changeBridgeStatus()
        const expected = 21
        for (let i = 0; i < 22; i++) {
            roadBridge.carGoesOnTheBridge()
        }
        const result = roadBridge.carLeavesThebridge()
        expect(result).toEqual(expected)
    })

    it('RoadBridge: bridge is at reduce capacity', () => {
        roadBridge.changeBridgeStatus()
        roadBridge.bridgeCapacity = 30
        const expected = 'Bridge at maximum capacity'
        for (let i = 0; i < 30; i++) {
            roadBridge.carGoesOnTheBridge()
        }
        const result = roadBridge.carGoesOnTheBridge()
        expect(result).toEqual(expected)
    })

    it('RoadBridge: bridge is closed', () => {
        roadBridge.bridgeStatus = false
        const expected = 'The bridge is currently closed'
        const result = roadBridge.carGoesOnTheBridge()
        expect(result).toEqual(expected)
    })

    it(`RoadBridge: cars can leave the bridge even if it's closed`, () => {
        roadBridge.cars = 21
        roadBridge.bridgeStatus = false
        const expected = 'The bridge is currently closed'
        for (let i = 0; i < 21; i++) {
            roadBridge.carLeavesThebridge()
        }
        const result = roadBridge.carGoesOnTheBridge()
        expect(result).toEqual(expected)
    })

    it('RoadBridge: reopen the bridge when it is closed', () => {
        const expected = 1
        roadBridge.carGoesOnTheBridge() // this car should not be there
        roadBridge.changeBridgeStatus() // bridge is now open
        roadBridge.carGoesOnTheBridge() // added one car to the bridge
        const result = roadBridge.carsCurrentlyOnTheBridge() // check cars
        expect(result).toEqual(expected)
    })

    it('RoadBridge ext: emergency vehicles can access the bridge regardless', () => {
        const expected = 51
        roadBridge.changeBridgeStatus()
        for (let i = 0; i < 50; i++) {
            roadBridge.carGoesOnTheBridge()
        }
        roadBridge.carGoesOnTheBridge('EMS')
        const result = roadBridge.carsCurrentlyOnTheBridge()
        expect(result).toEqual(expected)
    })

    it('RoadBridge ext: HGVs count double towards the bridge capacity', () => {
        const expected = 20
        roadBridge.changeBridgeStatus()
        for (let i = 0; i < 10; i++) {
            roadBridge.carGoesOnTheBridge('HGV')
        }
        const result = roadBridge.carsCurrentlyOnTheBridge()
        expect(result).toEqual(expected)
    })

    it('RoadBridge ext: bridge closed to HGVs but not to cars', () => {
        const expected = 10
        roadBridge.changeBridgeStatus() // true
        roadBridge.disallowAccessHGV() //false
        for (let i = 0; i < 10; i++) {
            roadBridge.carGoesOnTheBridge()
        } // allowed on the bridge
        for (let i = 0; i < 10; i++) {
            roadBridge.carGoesOnTheBridge('HGV')
        } // not allowed on the bridge
        const result = roadBridge.carsCurrentlyOnTheBridge()
        expect(result).toEqual(expected)
    })
})