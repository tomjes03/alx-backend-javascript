const { expect } = require("chai");
const request = require('request');

describe('test GET /', () => {
  it('should return correct message in response', (done) => {
    const options = {
      url: 'http://localhost:7865',
      method: 'GET',
    };

    request(options, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('test GET cart/:id', () => {
  it('should return status 200 and correct body', (done) => {
    const options = {
      url: 'http://localhost:7865/cart/1',
      method: 'GET',
    };

    request(options, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 1');
      done();
    });
  });

  it('should return a 404 response', (done) => {
    const options = {
      url: 'http://localhost:7865/cart/a12',
      method: 'GET',
    };

    request(options, function (error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

});

describe('test GET /available_payments', () => {
  it('should return status 200 and correct body', (done) => {
    const options = {
      url: 'http://localhost:7865/available_payments',
      method: 'GET',
    };
    
    const res = {
      payment_methods: {
        credit_cards: true,
        paypal: false,
      }
    }

    request(options, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.deep.equal(JSON.stringify(res));
      done();
    });
  });

});

describe('POST /login with body', () => {
	it('Responds with 200 and correct name Betty', (done) => {
		const options = {
			url: 'http://localhost:7865/login',
			method: 'POST',
			json: {
				userName: 'Betty',
			},
		};
		request(options, function (error, response, body) {
			expect(response.statusCode).to.equal(200);
			expect(body).to.equal('Welcome Betty');
			done();
		});
	});
});

describe('POST /login with no body', () => {
	it('Responds with 200 and correct name Undefined', (done) => {
		const options = {
			url: 'http://localhost:7865/login',
			method: 'POST',
		};
		request(options, function (error, response, body) {
			expect(response.statusCode).to.equal(200);
			expect(body).to.equal('Welcome undefined');
			done();
		});
	});
});
