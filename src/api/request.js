export const request = (url) => {
    return fetch(url).then((r) => {
        if(r.ok) {
            return r.json()
        }
        throw new Error("ERROR");
    })
}
