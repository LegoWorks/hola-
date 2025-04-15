wuKong.setMotorSpeed(wuKong.MotorList.M1, 30)
basic.pause(2000)
wuKong.stopMotor(wuKong.MotorList.M1)
wuKong.setMotorSpeed(wuKong.MotorList.M2, -30)
basic.pause(2000)
wuKong.stopMotor(wuKong.MotorList.M2)
wuKong.setMotorSpeed(wuKong.MotorList.M1, -30)
basic.pause(2000)
wuKong.stopMotor(wuKong.MotorList.M1)
basic.forever(function () {
	
})
