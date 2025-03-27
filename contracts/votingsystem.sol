// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "hardhat/console.sol";

contract votingsystem {
    address owner;
    
    struct Candidate {
        string name;
        uint vote_count;
    }

    mapping(address => bool) public hasVoted;
    Candidate[] public candidates;

    constructor() {
        owner = msg.sender;
        console.log("Contract deployed by:", owner);
    }

    function addCandidate(string memory name) public {
        require(msg.sender == owner, "You do not have access to do that");
    
        Candidate memory c;
        c.name = name;
        c.vote_count = 0;
        candidates.push(c);

        console.log("Candidate added:", name);
    }

    function vote(uint c_index) public returns (string memory) {
        require(!hasVoted[msg.sender], "You have already voted");
        require(c_index < candidates.length, "Invalid candidate index");

        candidates[c_index].vote_count += 1;
        hasVoted[msg.sender] = true;

        console.log("Vote casted by:", msg.sender);
        console.log("Candidate voted for:", candidates[c_index].name);
        console.log("Updated vote count:", candidates[c_index].vote_count);

        return "Voted successfully!";
    }

    function getWinner() public view returns (string memory) {
        uint winnerCandidateCount = 0;
        uint winner;

        for (uint i = 0; i < candidates.length; ++i) {
            if (candidates[i].vote_count > winnerCandidateCount) {
                winnerCandidateCount = candidates[i].vote_count;
                winner = i;
            }
        }

        console.log("Winning candidate:", candidates[winner].name);
        console.log("Winning votes:", candidates[winner].vote_count);

        return candidates[winner].name;
    }
}
