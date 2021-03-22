const axios = require('axios');

exports.getItem = async function(id) {
    const config = {
        method: 'get',
        url: 'https://api.mercadolibre.com/items/' + id,
    }
    const description = await getItemDescription(id)
    await axios(config)
        .then((res) => {
            element = res.data
            totalResponse = {
                author: {
                    name: "",
                    lastname: ""
                },
                item: {
                    id: element.id,
                    title: element.title,
                    price: {
                        currency: element.currency_id,
                        amount: element.price,
                    },
                    picture: element.pictures[0].url,
                    condition: element.condition,
                    free_shipping: element.shipping.free_shipping,
                    sold_quantity: element.sold_quantity,
                    description: description
                },
            }
        })
        .catch((err) => {
            throw new Error(err)
        })
    return totalResponse
}


getItemDescription = async function(id) {
    const config = {
        method: 'get',
        url: 'https://api.mercadolibre.com/items/' + id + '/description',
    }
    await axios(config)
        .then((res) => {
            description = res.data.plain_text
        })
        .catch((err) => {
            throw new Error(err)
        })
    return description
}