const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

global.fetch = require('jest-fetch-mock');
let app;

describe('app', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        app = require('../scripts')
    })

    afterEach(() => {
        fetch.resetMocks();
    })

    describe('requests', () => {
        describe('callAPI', () => {
            //function fullPost within 
        })
        describe('storedPosts', () => {

        })

        describe('newComment', () => {
            //function appendComment within
        })

        describe('increment1', () => {

        })

        describe('getGiff', () => {
            //function gifCreate
        })

        describe('characterCheck', () => {

        })

    })
})