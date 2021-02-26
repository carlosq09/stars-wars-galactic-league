export const recursiveFetchByPage = async (uri, paginated, elementsArray = [], index = 1) => {
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

