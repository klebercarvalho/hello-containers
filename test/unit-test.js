const assert = require('assert');
const message = require('../utils');
describe('Message Test', () => {
 it('Welcome Message', () => {
        assert.strictEqual(message.getWelcomeMessage(), "Welcome to IBM Cloud DevOps using containers. Let\'s go use the Continuous Delivery Service 1");
        
        //assert.strictEqual(message.getWelcomeMessage(), "");
    });
 it('Port Test', () => {
        assert.strictEqual(message.getPortMessage(), "Application Running on port");
    });
});