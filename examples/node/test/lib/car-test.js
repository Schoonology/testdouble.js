describe('Car', function(){
  var subject, gasPedal, accelerometer, brake
  beforeEach(function(){
    gasPedal = td.replace('../../lib/gas-pedal') //<-- a plain ol' function
    accelerometer = td.replace('../../lib/accelerometer') //<-- an obj of functions
    brake = td.replace('../../lib/brake') //<-- a constructor function
    subject = require('../../lib/car')
  })

  describe('.goSixty', function(){
    describe('not yet going 60', function(){
      beforeEach(function(){
        td.when(accelerometer.read()).thenReturn(55)

        subject.goSixty()
      })

      it('pushes the pedal down 5 units', function(){
        td.verify(gasPedal(5))
      })
    })

    describe('going over 60', function(){
      beforeEach(function(){
        td.when(accelerometer.read()).thenReturn(62)

        subject.goSixty()
      })

      it('engages the brake for 2 units', function(){
        td.verify(brake.engage(2))
      })
    })
  })
})
