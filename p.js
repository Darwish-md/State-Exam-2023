function createElection(string memory _name, string memory _description, uint256 _endDate, string memory _creatorName, string[] memory _candidateNames) public {}
function addCandidates(uint8 _electionId, string[] memory _candidateNames) private {}
function hasVoted(uint8 _electionId) public view returns (bool) {}
function castVote(uint8 _electionId, uint8 _candidateId) public {}
function getElectionById(uint8 _electionId) public view returns (uint8, string memory, string memory, uint256, uint256, address, string memory) {}
function getCandidates(uint8 _electionId) public view returns (Candidate[] memory) {}


function mint(string memory _tokenURI) external returns (uint256) {}
function setProfile(uint256 _id) public {}
function uploadPost(string memory _postHash) external {}
function tipPostOwner(uint256 _id) external payable {}
function getAllPosts() external view returns (Post[] memory _posts) {}
function getMyNfts() external view returns (uint256[] memory _ids) {}

require("@nomiclabs/hardhat-waffle");
module.exports = {
  defaultNetwork: "hardhat",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
  },
  solidity:{
    compilers: [
      {
        version: "0.8.1",
      },
    ],
  }
};
