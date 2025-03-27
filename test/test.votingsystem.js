const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("VotingSystem", function () {
    let votingSystem;
    let owner, addr1, addr2;

    beforeEach(async function () {
        [owner, addr1, addr2] = await ethers.getSigners();
        const VotingSystem = await ethers.getContractFactory("votingsystem");
        votingSystem = await VotingSystem.deploy(); // Deploy the contract
        await votingSystem.deployed(); // Wait for it to be deployed
    });
    

    it("Should not allow non-owner to add candidates", async function () {
        try {
            await votingSystem.connect(addr1).addCandidate("Bob");
            throw new Error("Transaction should have reverted!");
        } catch (error) {
            expect(error.message).to.include("You do not have access to do that");
        }
    });


    it("Should prevent double voting", async function () {
        await votingSystem.connect(owner).addCandidate("Alice");
        await votingSystem.connect(addr1).vote(0);

        try {
            await votingSystem.connect(addr1).vote(0);
            throw new Error("User was allowed to vote twice!");
        } catch (error) {
            expect(error.message).to.include("You have already voted");
        }
    });

    it("Should return the correct winner", async function () {
        await votingSystem.connect(owner).addCandidate("Alice");
        await votingSystem.connect(owner).addCandidate("Bob");

        await votingSystem.connect(addr1).vote(0);
        await votingSystem.connect(addr2).vote(0);

        const winner = await votingSystem.getWinner();
        expect(winner).to.equal("Alice");
    });
});