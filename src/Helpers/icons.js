
let apple = process.env.PUBLIC_URL + "/assets/apple.svg"
let burger = process.env.PUBLIC_URL + "/assets/burger.svg"
let chicken = process.env.PUBLIC_URL + "/assets/chicken.svg"
let fire = process.env.PUBLIC_URL + "/assets/fire.svg"

let bike = process.env.PUBLIC_URL + "/assets/bike.svg"
let dumbbell = process.env.PUBLIC_URL + "/assets/dumbbell.svg"
let yoga = process.env.PUBLIC_URL + "/assets/yoga.svg"
let swim = process.env.PUBLIC_URL + "/assets/swim.svg"

// Object with all the icons we need on the nutriment and navIcon components
const icons = {
	bike,
	dumbbell,
	yoga,
	swim,
	"Glucides": apple,
	"Lipides": burger,
	"Protéines": chicken,
	"Calories": fire
}

export default icons;