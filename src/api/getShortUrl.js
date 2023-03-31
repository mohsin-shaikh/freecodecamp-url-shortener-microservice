const { pocketBaseAxios } = require('../utils/axios')
const logger = require('../utils/logger')


const getShortUrl = async (req, res) => {
    logger.info('getShortUrl Start')
    const id = req.params.id
    const { data } = await pocketBaseAxios.get(`/collections/short_urls/records/${id}`)
    logger.info(JSON.stringify(data))
    return res.redirect(data.url)
}

module.exports = getShortUrl;
