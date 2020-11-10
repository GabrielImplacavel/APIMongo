const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const home = new Schema({ 
    topTitulo: {
        type: String
    },
    topSubTitulo: {
        type: String
    },
    topTextiBtn: {
        type: String
    },
    topLinkBtn: {
        type: String
    },
    serTitulo: {
        type: String
    },
    serSubTitulo: {
        type: String
    },
    serUmTitulo: {
        type: String
    },
    serUmDesc: {
        type: String
    },
    serUmIcone: {
        type: String
    },
    serDoisTitulo: {
        type: String
    },
    serDoisDesc: {
        type: String
    },
    serDoisIcone: {
        type: String
    },
    serTresTitulo: {
        type: String
    },
    serTresDesc: {
        type: String
    },
    serTresIcone: {
        type: String
    },
},{
    timestamps: true,
});

mongoose.model('Home', home)