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

const recursiveFetchByPage = async (uri, paginated, elementsArray = [], index = 1) => {
    return fetch(`${uri}?page=${index}`)
        .then(response => {
            return response.json().then((response) => {
                if (response.results) {
                    if (paginated) {
                        elementsArray = [...elementsArray, response.results]
                    } else {
                        elementsArray = [...elementsArray, ...response.results]
                    }
                }
                if (!!response.next) {
                    return recursiveFetchByPage(uri, paginated, elementsArray, ++index)
                } else {
                    return elementsArray
                }
            });
        })
}


const logic = {

    removeFromLeagueInStorage(target) {
        if (!target) throw new Error('missing target to remove in storage')

        const storedTargets = localStorage.getItem('galactic')
        if (!storedTargets || !storedTargets.length) throw new Error('no element in storage to remove in storage')

        const newStoredTargets = JSON.parse(storedTargets).filter(storedTarget => storedTarget !== target)
        localStorage.setItem('galactic', JSON.stringify(newStoredTargets))

        return newStoredTargets
    },

    setToLeagueInStorage(target) {
        if (!target) throw new Error('missing target to add in storage')

        const storedTargets = JSON.parse(localStorage.getItem('galactic')) || [] //if empty

        storedTargets.push(target)
        localStorage.setItem('galactic', JSON.stringify(storedTargets))

        return storedTargets
    },

    getLeagueFromStorage(pages) {
        const storedTargets = JSON.parse(localStorage.getItem('galactic')) || [];
        if (!pages) return storedTargets

        let allResults = []
        pages.forEach(page => allResults = allResults.concat(page))

        debugger
        return storedTargets.map(storedTarget => allResults.find(target => target.url === storedTarget))
    },

    async requestTargets(fetchNumber, elements = [], totalPages) {
        const newTargets = await multiFetch(fetchNumber, elements.length || 1, totalPages).then(results => results)

        return [...elements, ...newTargets]
    },

    async requestAllTargets(paginated) {
        return await recursiveFetchByPage('https://swapi.dev/api/people/', paginated).then(results => results)

    },

    async requestAllPlanets(paginated) {
        return await recursiveFetchByPage('https://swapi.dev/api/planets/', paginated).then(results => results)
    },

    async requestAllStarships(paginated) {
        return await recursiveFetchByPage('https://swapi.dev/api/starships/', paginated).then(results => results)
    },

    async requestAllSpecies(paginated) {
        return await recursiveFetchByPage('https://swapi.dev/api/species/', paginated).then(results => results)
    },

    async getElementByUrl(uri) {
        if (!uri) throw new Error('missing uri to request')

        return await fetch(uri)
            .then(response => {
                return response.json().then((data) => data);
            })
    },

    characterIsSpecie(specie, toCompare) {
        if (!specie.length && toCompare == 'http://swapi.dev/api/species/1/') return true //Humans from the API doesnt have specie for unknow reason

        return specie[0] == toCompare

    },

    characterHasStarship(starships, toCompare) {
        if (!starships.length || starships.length < 1) return false

        return starships.some(starship => starship === toCompare)

    },

    filterCharactersBy(planet, specie, starship, pages) {
        if (!pages) throw new Error('missing pages to filter')
        let characters = []
        pages.forEach(page => characters = characters.concat(page))

        if (!planet && !specie && !starship) return characters
        return characters.filter(character => {

            if (starship && (!this.characterHasStarship(character.starships, starship))) return
            if (specie && (!this.characterIsSpecie(character.species, specie))) return
            if (planet && (planet !== character.homeworld)) return
            return character
        })
    }
}

export default logic