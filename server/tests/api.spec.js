const { post } = require("superagent");
const request = require("supertest");
const server = require("../server");

describe('API Server', () => {
    let api;
    let testPost = {'title' : 'Hello'};

    beforeAll(() => {
        api = server.listen(5000, () =>
            console.log('Test server running on port 5000')
        );
    });

    afterAll((done) => {
        console.log('Gracefully stopping test server');
        api.close(done);
    });

    test('get status 200 when get request to welcome', done => {
        request(api).get('/').expect(200, done)
    });

    test('get status 200 when get request to posts', done => {
        request(api).get('/posts').expect(200, done)
    })
    //not working properly- should be showing a 201 and a 
    test('get status 200 when post request to posts', done => {
        request(api)
        .post('/posts')
        .send(testPost)
        .expect(200)
        .expect(JSON.stringify([testPost]), done);
    })

    // test('get status 200 when request made to posts/comments', done => {
    //     request(api)
    //     .post('/posts/comments')
    //     .send(//notsure)
    // })

    // test('get status 200 when request made to posts/comments/emojis', () => {
    //     request(api)
    //     .post('/posts/comments/emojis')
    //     .send(//notsure)
    // })

    test('responds to non existing paths with 404', (done) => {
        request(api).get('/no').expect(404, done);
    });
    // should be showing a 405
    test('responds to invalid method request with 404', (done) => {
        request(api).post('/').expect(404, done);
    });
})