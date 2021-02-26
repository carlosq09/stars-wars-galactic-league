import logic from '.'

describe('logic', () => {
    describe('users', () => {
        const paginatedCharacters = [[{
            name: 'test',
            species: ['characterSpecie'],
            starships: ['characterStarship'],
            homeworld: 'characterHomeworld'
        }]]

        describe('API', () => {
            describe('Request all Characters', () => {
                it('should retrieve all the characters paginated from the pagination endpoint', (done) => {
                    const first_page = 0

                    logic.requestAllTargets(true)
                        .then(response => {
                            expect(response instanceof Object).toBeTruthy()
                            expect(response.length).toBeGreaterThan(0)
                            expect(response[first_page].length).toBeGreaterThan(0)

                            done()
                        })

                })

                it('should retrieve all the characters not paginated from the pagination endpoint', (done) => {
                    const first_page = 0

                    logic.requestAllTargets()
                        .then(response => {
                            expect(response instanceof Object).toBeTruthy()
                            expect(response.length).toBeGreaterThan(0)
                            expect(response[first_page].length).not.toBeDefined()

                            done()
                        })

                })
            })
            describe('Request all Planets', () => {
                it('should retrieve all the planets paginated from the pagination endpoint', (done) => {
                    const first_page = 0

                    logic.requestAllPlanets(true)
                        .then(response => {
                            expect(response instanceof Object).toBeTruthy()
                            expect(response.length).toBeGreaterThan(0)
                            expect(response[first_page].length).toBeGreaterThan(0)

                            done()
                        })

                })

                it('should retrieve all the planets not paginated from the pagination endpoint', (done) => {
                    const first_page = 0

                    logic.requestAllTargets()
                        .then(response => {
                            expect(response instanceof Object).toBeTruthy()
                            expect(response.length).toBeGreaterThan(0)
                            expect(response[first_page].length).not.toBeDefined()

                            done()
                        })
                })
            })
            describe('Request all Species', () => {
                it('should retrieve all the species paginated from the pagination endpoint', (done) => {
                    const first_page = 0

                    logic.requestAllSpecies(true)
                        .then(response => {
                            expect(response instanceof Object).toBeTruthy()
                            expect(response.length).toBeGreaterThan(0)
                            expect(response[first_page].length).toBeGreaterThan(0)

                            done()
                        })

                })

                it('should retrieve all the species not paginated from the pagination endpoint', (done) => {
                    const first_page = 0

                    logic.requestAllTargets()
                        .then(response => {
                            expect(response instanceof Object).toBeTruthy()
                            expect(response.length).toBeGreaterThan(0)
                            expect(response[first_page].length).not.toBeDefined()

                            done()
                        })
                })
            })
            describe('Filter', () => {
                it('should filter by given objects', (done) => {
                    const specie = 'characterSpecie'
                    const starship = 'characterStarship'
                    const planet = 'characterHomeworld'

                    const testCharacter = paginatedCharacters[0]
                    const bySpecie = logic.filterCharactersBy(undefined, specie, undefined, paginatedCharacters)
                    expect(bySpecie instanceof Object).toBeTruthy()
                    expect(bySpecie.length).toBeGreaterThan(0)
                    expect(bySpecie).toEqual(testCharacter)

                    const byAllFilters = logic.filterCharactersBy(planet, specie, starship, paginatedCharacters)
                    expect(byAllFilters instanceof Object).toBeTruthy()
                    expect(byAllFilters.length).toBeGreaterThan(0)
                    expect(byAllFilters).toEqual(testCharacter)

                    done()

                })

                it('should fail filter if no coincidence', (done) => {
                    const specie = 'characterSpecie'

                    const filtered = logic.filterCharactersBy('noSamePlanet', specie, undefined, paginatedCharacters)
                    expect(filtered instanceof Object).toBeTruthy()
                    expect(filtered.length).toEqual(0)

                    done()

                })

            })
            describe('storage', () => {
                //todo Mock storage test
            })
        })

    })
})