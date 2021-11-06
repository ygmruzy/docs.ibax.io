(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{407:function(e,t,o){"use strict";o.r(t);var n=o(51),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"decentralized-proof-of-authority-consensus"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#decentralized-proof-of-authority-consensus"}},[e._v("#")]),e._v(" Decentralized Proof-of-Authority Consensus")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("What is Decentralized Proof-of-Authority consensus")])]),e._v(" "),o("li",[o("p",[e._v("Advantages of DPoA consensus")])]),e._v(" "),o("li",[o("p",[e._v("DPoA consensus and common means of attack")])]),e._v(" "),o("li",[o("p",[e._v("Implementation of DPoA consensus in IBAX")])])]),e._v(" "),o("p",[e._v("In this section, we will describe the Decentralized Proof-of-Authority consensus and its implementation in IBAX.")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#what-is-decentralized-proof-of-authority-consensus"}},[e._v("What is Decentralized Proof-of-Authority consensus")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#advantages-of-dpoa-consensus"}},[e._v("Advantages of DPoA consensus")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#dpoa-consensus-and-common-means-of-attack"}},[e._v("DPoA consensus and common means of attack")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#dos"}},[e._v("DoS")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#percent-attack-51"}},[e._v("51 percent attack")])])])]),e._v(" "),o("li",[o("a",{attrs:{href:"#implementation-of-dpoa-consensus-in-ibax"}},[e._v("Implementation of DPoA consensus in IBAX")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#honor-node"}},[e._v("Honor node")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#leader-node"}},[e._v("Leader node")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#generation-of-new-blocks"}},[e._v("Generation of new blocks")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#forks"}},[e._v("Forks")])])])])]),e._v(" "),o("h2",{attrs:{id:"what-is-decentralized-proof-of-authority-consensus"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-is-decentralized-proof-of-authority-consensus"}},[e._v("#")]),e._v(" What is Decentralized Proof-of-Authority consensus")]),e._v(" "),o("p",[e._v("Considering commercial application scenarios and real-world environments, IBAX Network has built a new consensus mechanism, DPoA (Decentralized Proof of Authority).")]),e._v(" "),o("p",[e._v("Decentralization has always been our firm belief. It refers not only to IBAX’s infrastructure network environment. Instead, we will let decentralization take root in each ecoLib created in IBAX Network and use technical solutions to achieve a high degree of self-governance in each of them. For the purpose of highly distributed self-governance, we have made many changes in the overall architecture and technical implementation. However, in practice, we cannot avoid the centralized management concept. In order to find a balance between centralization and decentralization, in addition to the DPoA consensus mechanism, we have also formulated certain reward and incentive programs.")]),e._v(" "),o("p",[e._v("IBAX Network has created a new consensus mechanism that combines distribution, weak centralization, and a certification authority. We call it DPoA (Decentralized Proof of Authority). To ensure continuity for the entire IBAX Network, the consensus covers not only IBAX Public Network, but also ecoLibs created by each user and user group. This creates a truly self-governed, decentralized, fair, transparent, and fraud-proof Decentralized Autonomous Organization (DAO).")]),e._v(" "),o("p",[e._v("DPoA has a prevention mechanism against network attacks and allows creation of Mint Nodes that guard the network and mint new IBXC coins. IBAXCoin holders can stake a part of their IBXC liquidity balance in Mint Nodes for Mint & Stake Emission Rewards. Minting and staking serve to increase the cost and difficulty of attacks and increase the total value of IBXC coins proportionally. With this mechanism, the probability and harm of any attack are infinitely close to zero.")]),e._v(" "),o("h2",{attrs:{id:"advantages-of-dpoa-consensus"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#advantages-of-dpoa-consensus"}},[e._v("#")]),e._v(" Advantages of DPoA consensus")]),e._v(" "),o("p",[e._v("Compared to Proof-of-Work (PoW) or Proof-of-Stake (PoS) consensus, DPoA consensus has the following advantages:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("No need of high-performance hardware. Compared to PoW consensus, nodes implementing the DPoA consensus does not spend computational resources for solving complex mathematical logic tasks;")])]),e._v(" "),o("li",[o("p",[e._v("The interval of time to generate new blocks is predictable, but that for  PoW and PoS consensuses are different;")])]),e._v(" "),o("li",[o("p",[e._v("High transaction rate. Blocks are generated in a sequence at specified time interval by authorized network nodes, which increases the speed of transaction verification.")])]),e._v(" "),o("li",[o("p",[e._v("Tolerance to compromised and malicious nodes, as long as 51% of nodes are not compromised. IBAX implements a mechanism of banning nodes and revoking block generation rights.")])])]),e._v(" "),o("h2",{attrs:{id:"dpoa-consensus-and-common-means-of-attack"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dpoa-consensus-and-common-means-of-attack"}},[e._v("#")]),e._v(" DPoA consensus and common means of attack")]),e._v(" "),o("h3",{attrs:{id:"dos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dos"}},[e._v("#")]),e._v(" DoS")]),e._v(" "),o("p",[e._v("An attacker may send large amount of transactions and blocks to a targeted node in the network, making an attempt to disrupt its operation and make its services unavailable.")]),e._v(" "),o("p",[e._v("The DPoA mechanism is possible to defend against DoS attacks:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Because network nodes are pre-authenticated, block generation rights can be granted only to nodes that can withstand DoS attacks.")])]),e._v(" "),o("li",[o("p",[e._v("If a honor node is unavailable for a certain period, it can be excluded from the list of honor nodes.")])])]),e._v(" "),o("h3",{attrs:{id:"_51-percent-attack"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_51-percent-attack"}},[e._v("#")]),e._v(" "),o("spn",{attrs:{id:"percent-attack-51"}},[e._v("51 percent attack")])],1),e._v(" "),o("p",[e._v("As to the scenario with the DPoA consensus, the 51% attack requires an attacker to obtain control over 51% of network nodes. But the scenario for the PoW consensus is different, which an attacker needs to obtain 51% of network computational power. Obtaining the control over nodes in a permissioned blockchain network is much harder than obtaining the computational power.")]),e._v(" "),o("p",[e._v("For example, in a network implementing the PoW consensus, an attacker can increase computation power (performance) of the controlled network segment thus increasing the percentage of controlled nodes. This makes no sense for DPoA consensus, because the computational power of the node has no impact on the blockchain network decisions.")]),e._v(" "),o("h2",{attrs:{id:"implementation-of-dpoa-consensus-in-ibax"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#implementation-of-dpoa-consensus-in-ibax"}},[e._v("#")]),e._v(" Implementation of DPoA consensus in IBAX")]),e._v(" "),o("h3",{attrs:{id:"honor-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#honor-node"}},[e._v("#")]),e._v(" Honor node")]),e._v(" "),o("p",[e._v("In IBAX, only honor nodes can generate new blocks, which maintain the blockchain network and the distributed ledger.")]),e._v(" "),o("p",[e._v("The list of honor nodes is kept in the blockchain registry. The order of nodes determines the sequence in which nodes generate new blocks.")]),e._v(" "),o("h3",{attrs:{id:"leader-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#leader-node"}},[e._v("#")]),e._v(" Leader node")]),e._v(" "),o("p",[e._v("The following formula determines the current "),o("strong",[e._v("leader node")]),e._v(", i.e. a node that must generate a new block at the current time.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("leader = ((time - first) / step) % nodes\n")])])]),o("blockquote",[o("p",[e._v("leader")])]),e._v(" "),o("p",[e._v("Current leader node.")]),e._v(" "),o("blockquote",[o("p",[e._v("time")])]),e._v(" "),o("p",[e._v("Current time (UNIX).")]),e._v(" "),o("blockquote",[o("p",[e._v("first")])]),e._v(" "),o("p",[e._v("First block generation time (UNIX).")]),e._v(" "),o("blockquote",[o("p",[e._v("step")])]),e._v(" "),o("p",[e._v("Number of seconds in the block generation interval.")]),e._v(" "),o("blockquote",[o("p",[e._v("nodes")])]),e._v(" "),o("p",[e._v("Total number of honor nodes.")]),e._v(" "),o("h3",{attrs:{id:"generation-of-new-blocks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#generation-of-new-blocks"}},[e._v("#")]),e._v(" Generation of new blocks")]),e._v(" "),o("p",[e._v("New blocks are generated by a "),o("a",{attrs:{href:"#leader-node"}},[e._v("leader node")]),e._v(" of the current time interval. At each time interval, the leader role is passed to the next honor node from the list of honor nodes.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/block-generation.png",alt:"avatar"}})]),e._v(" "),o("p",[e._v("a) Steps for Generation of new blocks")]),e._v(" "),o("p",[e._v("Main steps for generating a new block are as follows:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Collects all new transactions from the transaction queue of the node;")])]),e._v(" "),o("li",[o("p",[e._v("Executes transactions one by one. Invalid or inexecutable transactions are rejected;")])]),e._v(" "),o("li",[o("p",[e._v("Checks if the "),o("RouterLink",{attrs:{to:"/es/reference/platform-parameters.html#configure-the-generation-of-blocks"}},[e._v("block generation limits")]),e._v(" is in compliance;")],1)]),e._v(" "),o("li",[o("p",[e._v("Generates a block with valid transactions and signs it with the private key of the honor node through the ECDSA algorithm;")])]),e._v(" "),o("li",[o("p",[e._v("Sends this block to other honor nodes.")])])]),e._v(" "),o("p",[e._v("b) Verification of new blocks")]),e._v(" "),o("p",[e._v("Steps for verifying new blocks on other honor nodes:")]),e._v(" "),o("p",[e._v("1.Receive a new block and verify:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("– whether the new block was generated by the leader node of a current interval;\n\n– whether there are no other blocks generated by the leader node of a current interval;\n\n– whether the new block is properly signed. \n")])])]),o("ol",{attrs:{start:"2"}},[o("li",[o("p",[e._v("Execute transactions from the block one by one. Check whether the transactions are executed successfully and within the "),o("RouterLink",{attrs:{to:"/es/reference/platform-parameters.html#configure-the-generation-of-blocks"}},[e._v("block generation limits")]),e._v(" .")],1)]),e._v(" "),o("li",[o("p",[e._v("Add or reject the block, depending on the previous step:")]),e._v(" "),o("p",[e._v("– If block validation is successful, add the new block to the blockchain of the current node;")]),e._v(" "),o("p",[e._v("– If block validation failed, reject the block and send a "),o("strong",[e._v("bad block")]),e._v(" transaction;")]),e._v(" "),o("p",[e._v("– If the honor node that created this invalid block continues to generate bad blocks, it can be banned or excluded from the list of honor nodes.")])])]),e._v(" "),o("h3",{attrs:{id:"forks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#forks"}},[e._v("#")]),e._v(" Forks")]),e._v(" "),o("p",[e._v("A "),o("strong",[e._v("fork")]),e._v(" is an alternative version of the blockchain, which contains one or more blocks that were generated independently from the rest of the blockchain.")]),e._v(" "),o("p",[e._v("Forks usually occur when a part of the network becomes desynchronized. Factors that are probably result in forks are high network latency, intentional or unintentional time limits violation, time desynchronization at nodes. If network nodes have a significant geographic distribution, block generation interval must be increased.")]),e._v(" "),o("p",[e._v("Forks are resolved by following the longest blockchain rule. When two blockchain versions are detected, honor nodes rollback the shorter one and accept the longer one.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/block-fork-resolution.png",alt:"avatar"}})])])}),[],!1,null,null,null);t.default=a.exports}}]);