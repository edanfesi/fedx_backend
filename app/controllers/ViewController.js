const ViewController = module.exports;

const languageEs = require('../languages/es.json');
const languageEn = require('../languages/en.json');

const { DEFAULT_LANG, DEFAULT_VIEW_CONTENT } = require('../constants/GeneralConstants');

const languages = {
    'es': languageEs,
    'en': languageEn
};

ViewController.getViewContent = (req, res) => {
    const {
        headers: {
            lang = DEFAULT_LANG,
        },
        query: {
            content = DEFAULT_VIEW_CONTENT,
        }
    } = req;
    
    const viewContent = languages[lang][content] || {};

    res.send(viewContent);
}