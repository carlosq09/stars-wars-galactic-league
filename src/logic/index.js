const multiFetch = async (times, startIndex = 1, end = 100) => {
    const elementsArray = []
    for (let i = 0; i < times; i++) {
        if (startIndex < end) {
            elementsArray.push(fetch(`https://swapi.dev/api/people/${startIndex + i}/`)
                .then(response => {
                    return response.json().then((data) => data);
                }))
        }
    }

    return Promise.all(elementsArray)
}

const recursiveFetchByPage = async (uri, elementsArray = [], index = 1) => {
    return fetch(`${uri}?page=${index}`)
        .then(response => {
            return response.json().then((response) => {
                if (response.results) {
                    elementsArray = [...elementsArray, ...response.results]
                }
                if (!!response.next) {
                    return recursiveFetchByPage(uri, elementsArray, ++index)
                } else {
                    return elementsArray
                }
            });
        })
}


const logic = {

    removeFromLeagueInStorage(target){
        if(!target) throw new Error('missing target to remove in storage')
        localStorage.removeItem(target)
    },

    setLeagueInStorage(targets){
        if(!targets || !targets.length) throw new Error('missing targets to set in storage')
        targets.forEach(target => {
            const { url } = target
            
            localStorage[url] = url
        })
        localStorage.setItem('galacticIndex', JSON.stringify(targets));
    },

    getLeagueFromStorage(){
        const targets = localStorage.get('galactic');
        return JSON.parse(targets)
    },

    async requestTargets(fetchNumber, elements = [], totalPages) {
        const newTargets = await multiFetch(fetchNumber, elements.length || 1, totalPages).then(results => results)

        return [...elements, ...newTargets]
    },

    async requestAllTargers() {
        return await recursiveFetchByPage('https://swapi.dev/api/people/').then(results => results)

    },

    async requestAllPlanets() {
        return await recursiveFetchByPage('https://swapi.dev/api/planets/').then(results => results)
    },

    async requestAllStarships() {
        return await recursiveFetchByPage('https://swapi.dev/api/starships/').then(results => results)
    },

    async requestAllSpecies() {
        return await recursiveFetchByPage('https://swapi.dev/api/species/').then(results => results)
    },

    async getElementByUrl(uri) {
        if(!uri) throw new Error('missing uri to request')

        return await fetch(uri)
            .then(response => {
                return response.json().then((data) => data);
            })
    },

    characterIsSpecie(specie, toCompare){
        if(!specie.length && toCompare == 'http://swapi.dev/api/species/1/') return true //Humans from the API doesnt have specie for unknow reason

        return specie[0] == toCompare
         
    },

    characterHasStarship(starships, toCompare){
        if(!starships.length || starships.length < 1) return false

        return starships.some(starship => starship === toCompare) 
         
    },

    filterCharactersBy(planet, specie, starship, characters) {
        if(!characters) throw new Error('missing characters to filter')
        if(!planet && !specie && !starship) return characters
debugger
        return characters.filter(character => {

            if(starship && (!this.characterHasStarship(character.starships, starship))) return
            if(specie && (!this.characterIsSpecie(character.species, specie))) return
            if(planet && (planet !== character.homeworld)) return
            return character
        })
    }
}

export default logic