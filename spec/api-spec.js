var request = require('request');
const base_url = process.env.BASE_URL || 'http://localhost:3000';

describe("API test suite", () => {
   describe("GET /", () => {
       it("returns status code 200", (done) => {
         request.get(base_url, (error, response, body) => {
            expect(response.statusCode).toBe(200);
            done();
         });
      });
      it("returns Hello World", (done) => {
         request.get(base_url, (error, response, body) => {
            expect(body).toBe('Hello World');
            done();
         });
      });
      it("checks sum function", (done) => {
            request.get(base_url + '/add/1/2', (error, response, body) => {
                expect(body).toBe('1 + 2 = 3');
                done();
            });
      });
      it ("checks multiplication function", (done) => {
            request.get(base_url + '/mul/2/3', (error, response, body) => {
                expect(body).toBe('2 * 3 = 6');
                done();
            });
      });
        it ("checks division function", (done) => {
            request.get(base_url + '/div/6/3', (error, response, body) => {
                expect(body).toBe('6 / 3 = 2');
                done();
            });
      });
        it ("checks division by zero", (done) => {
            request.get(base_url + '/div/6/0', (error, response, body) => {
                expect(body).toBe('Cannot divide by zero');
                done();
            });
      });
   });
});