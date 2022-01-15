# Test-Driven Development

## Road Bridge

![](bridge.jpg "Road Bridge")

### Learning Objectives
- Use a test framework to help test code
- Use the Red Green Refactor loop to develop code
- Test-drive a program with multiple functions with unit tests

### Quickstart
1. Fork this repository
2. Clone your fork to your local machine (example command below, see note)
3. Install project dependencies

```sh
$ git clone git@github.com:[username]/tdd-road-bridge.git && cd tdd-road-bridge
$ npm ci # to install dependencies
```

### Instructions
1. Implement the below requirements by following a test-driven development process. 
 
### Requirements

You need to write a program that controls access to a road bridge. The road bridge has a capacity and only
so many cars can be on the bridge at the same time. Your program should support the following interactions:

* Return the number of cars currently on the bridge
* Record when a car moves on to the bridge. If a car tries to move on to the bridge when it is at capacity, an error should be returned.
* Record when a car moves off the bridge.
* Be able to change the capacity of the bridge (for example, when there is high winds less cars are allowed on).
* Close the bridge completely (for example, in the case of an accident). Cars that are on the bridge when it is closed should be still be able to move off the bridge but no new cars should be allowed on.
* Reopen the bridge when it is closed.

Extension 1
* Update your code so that emergency vehicles can still access the bridge when it is over capacity or closed. Emergency vehicles should still count towards the bridge capacity, even though they are always allowed access.

Extension 2
* Update your code so it can also track [HGVs](https://en.wikipedia.org/wiki/Large_goods_vehicle). HGVs should count double towards the bridge capacity.
* It should be possible to close the bridge to HGVs only (cars can still use the bridge.)
