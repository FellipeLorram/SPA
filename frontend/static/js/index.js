import Controle from "./views/CentralDeControle.js";
import Pacientes from "./views/Pacientes.js";
import MeusHorarios from "./views/MeusHorarios.js";
import handleFrontend from "./frontendEvents.js";

const regexPath = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$")

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]]
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: Controle },
        { path: "/pacientes", view: Pacientes },
        { path: "/pacientes/:id", view: Pacientes },
        { path: "/meus-horarios", view: MeusHorarios },
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(regexPath(route.path))
        }
    })

    let match = potentialMatches.find(potentialMatche => potentialMatche.result !== null)

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        }
    }

    const view = new match.route.view(getParams(match));
    document.querySelector("#app").innerHTML = await view.getEjs();
    view.frontEndEvents();
    view.handleFrontEnd();
};

window.addEventListener("popstate", router)

document.addEventListener("DOMContentLoaded", () => {
    handleFrontend({
        navigateTo
    });


    router();
});
