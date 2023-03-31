const { pocketBaseAxios } = require('../utils/axios')
const { validateUrl } = require('../utils/helper')
const logger = require('../utils/logger')


const createShortUrl = async (req, res) => {
    logger.info('createShortUrl Start')
    logger.info(JSON.stringify(req.body))
    const url = req.body.url
    if (validateUrl(url)) {
        const { data } = await pocketBaseAxios.post('/collections/short_urls/records', {
            url: req.body.url
        })
        logger.info(JSON.stringify(data));
        return res.status(200).json({ 
            original_url: data.url, 
            short_url: data.id
        })
    } else {
        return res.status(200).json({ 
            error: 'invalid url' 
        })
    }
}

module.exports = createShortUrl;
