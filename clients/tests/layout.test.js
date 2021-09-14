/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');


describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

    describe('head', () => {
        test('it has a title', () => {
            const title = document.querySelector('head title');
            expect(title).toBeTruthy();
            expect(title.textContent).toBe("(Insert Brand Name)")
        })
    })

    describe('body', () => {
        describe('header', () => {
            test('it exists', () => {
                const header = document.querySelector('header')
                expect(header).toBeTruthy();
            })

            describe('navbar', () => {
                test('it exists', () => {
                    const navBar = document.querySelector('nav')
                    expect(navBar).toBeTruthy();
                })
                //further navBar tests to be written if kept
            })
        })
        describe('form', () => {
            test('it exists', () => {
                const form = document.querySelector('form')
                expect(form).toBeTruthy();
            })
        })
        describe('footer', () => {
            test('it exists', () => {
                const footer = document.querySelector('footer')
                expect(footer).toBeTruthy()
            })
        })
    })
})