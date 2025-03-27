Task: Full Hardhat Workflow Assignment
Objective
Students will:
· Set up a Hardhat project
· Deploy a Solidity contract
·  Debug using console.log()
· Write and run Hardhat tests
·  Push the project to GitHub
You are given a Solidity smart contract named
VotingSystem that implements a basic voting
mechanism on the Ethereum blockchain. The contract
allows an admin (the contract deployer) to initialize a
list of candidates. Any Ethereum address can cast a
vote for one of the candidates. However, a voter can
vote only once, and each vote is counted in real-time.
The contract also provides functionality to determine
the winning candidate based on the highest number of
votes.
Variables and function you have to create
Component Purpose
Candidate struct Stores candidate name and vote
count
admin Stores the contract deployer’s
address
hasVoted mapping Tracks who has voted
candidates array Stores all candidates
VoteCasted event Emits an event when a vote is cast
vote() function Allows a user to vote
getWinner() function Returns the candidate with the
most votes
struct Candidate
mapping(address => bool) hasVoted → (Keeps track of
whether an address has voted (true if voted, false if
not)).
Candidate[] public candidates → An array to store all
candidates.
event VoteCasted(address voter, string candidate)
constructor(string[] memory _candidateNames)
function vote(uint256 _candidateIndex)
function getWinner() external view returns (string
memory)
