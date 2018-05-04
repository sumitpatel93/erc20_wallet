//file for test cases of Dapp
'use strict';
const TutorialToken = artifacts.require('TutorialToken');

contract('TutorialToken', function() {
    beforeEach(async function() {
        this.token = await TutorialToken.new();
    });

    describe('check the total supply of token to be 1000', function() {
        it('returns the total amount of tokens', async function() {
            const totalSupply = await this.token.totalSupply();
            assert.equal(totalSupply, 1000);
        });
    });

})