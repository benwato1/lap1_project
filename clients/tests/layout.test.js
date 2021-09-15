/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const path = require('path');
const { title } = require('process');
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
            test('form exists', () => {
                const form = document.querySelector('form')
                expect(form).toBeTruthy();
            })
            describe('title inputs', () => {
            test('title input exists', () => {
                const title = document.getElementById('newtitle')
                expect(title).toBeTruthy();
            })
            test('title input has a label', () => {
                expect(document.querySelector('[for="newpost"]')).toBeTruthy()
            })
            test('title has a text input', () => {
                const title = document.getElementById('newtitle')
                expect(title.getAttribute('type')).toBe('text')
            })
        })  
        describe('post inputs', () => {
            test('post textarea input exists', () => {
                const post = document.querySelector('textarea')
                expect(post).toBeTruthy();
            })
            test('title input has a class of "form-control"', () => {
                expect(document.getElementsByClassName('form-control')).toBeTruthy();
            })
            test('post has an id of "newpost', () => {
                expect(document.getElementById('newpost')).toBeTruthy();
            })
        }) 
        describe('characters remaining div element', () => {
            test('characters remaining has an id of "my-textarea-remaining-chars"', () => {
                expect(document.getElementById('my-textarea-remaining-chars')).toBeTruthy();
            })
        })
        describe('giphy div element', () => {
            test('div element has an ID of gifs', () => {
                const div = document.getElementById('gifs')
                expect(div).toBeTruthy();
            })
            let searchBtn, gifInput
            beforeEach(() => {
                searchBtn = document.getElementById('gifsearch')
                gifInput = document.getElementById('gifinput')
            })
            describe('gif search input', () => {
                test('gifinput exists', () => {
                    expect(gifInput).toBeTruthy();
                })
                test('gifinput has a label', () => {
                    expect(document.querySelector('[for="searchgif"]')).toBeTruthy()
                })
                test('gifinput has a text input', () => {
                    expect(gifInput.getAttribute('type')).toBe('text')
                })
                test('gifinput has a name of "searchgif"', () => {
                    expect(gifInput.getAttribute('name')).toBe('searchgif')
                })
            }) 
            describe('search button', () => {
                test('button says "search"', () => {
                    expect(searchBtn.value).toBe('Search')
                })
            }) 
            })
            describe('form submit button', () => {
                test('type of button', () => {
                    let submitBtn = document.getElementById('submit_btn')
                    expect(submitBtn.getAttribute('type')).toBe('submit')
                })
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