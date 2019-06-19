class Model {
    constructor() {
		this.players = [{id:1, name: "Lebron James"},{id:2, name: "Kawhi Leonard"}]
	}
}

class Controller {
	constructor(model) {
		this.model = model
	}
	showPlayers(div) {
		this.model.players.forEach( (player) => {
			let p = document.createElement('p')
			p.innerHTML = `Name: ${player.name}`
			div.appendChild(p)
		})
	}
}

class View {
	constructor(controller) {
		this.button = document.querySelector("button")
		this.playerDiv = document.querySelector("#players")
		this.button.addEventListener("click", () => { controller.showPlayers(this.playerDiv) })
	}
}

const start = () => {
	const model      = new Model()
	const controller = new Controller(model)
	const view       = new View(controller)
}

start()



