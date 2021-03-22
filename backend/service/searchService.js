const axios = require('axios');

exports.getItems = async function(search) {
    const config = {
        method: 'get',
        url: 'https://api.mercadolibre.com/sites/MLA/search?q=' + search,
    }
    await axios(config)
        .then((res) => {
            apiCategories = res.data.filters[0].values[0].path_from_root
            categories = []
            apiCategories.forEach(element => {
                categories.push(element.name)
            });

            items = res.data.results
            itemsReduced = []
            items.slice(0, 4).forEach(element => {
                itemsReduced.push({
                    id: element.id,
                    title: element.title,
                    price: {
                        currency: element.currency_id,
                        amount: element.price,
                    },
                    picture: element.thumbnail,
                    condition: element.condition === "new" ? true : false,
                    free_shipping: element.shipping.free_shipping,
                    address: element.address.state_name
                })
            });

            totalResponse = {
                author: {
                    name: "",
                    lastname: ""
                },
                categories: categories,
                items: itemsReduced
            }
        })
        .catch((err) => {
            throw new Error(err)
        })
    return totalResponse
}