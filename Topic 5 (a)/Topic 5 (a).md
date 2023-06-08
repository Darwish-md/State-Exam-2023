# <a name="_5hz9foxy4t6d"></a>**Present the Adversarial Searches and the Conditions Necessary for the Existence of a Winning Strategy.**
## <a name="_p2uk4xl36pgi"></a>**Adversarial Searches:**
### <a name="_3m8aqhozbdpi"></a>**Definitions:**
"Adversarial search is a method applied to a situation where you are planning while another actor prepares against you. Your plans, therefore, could be affected by your opponent’s actions."

"Adversarial search is a search, where we examine the problem which arises when we try to plan ahead of the world and other agents are planning against us."

The use of the adversarial technique can be found in different games as in games the AI agent has been surrounded by a kind of competitive environment. The goal has been defined initially by the user and the agents compete or fight with one another in order to achieve that goal so that the win can be achieved. The adversarial search is important, and each agent must have known the strategy of the next agent this will create a competitive environment in a game.
### <a name="_c8da04tgkh91"></a>**Important Features of Adversarial Search:**
Adversarial searches have some features which make them unique as compared to the conventional techniques used in searches. There are certain features that can be observed in adversarial searches and with the help of this one can determine how such features make things more interesting and important in our case.

- Two Players: Adversarial searches are used in games with two players competing against each other.

- Turn-Taking: The game should involve players taking turns, like chess or ludo.

- Perfect Information: The players should have complete and perfect knowledge of the game state.

- Precise Rules: The game rules should be well-defined and formalized for better results.

- Few Actions: The number of possible actions should be relatively small for better optimization and accuracy.

## <a name="_e87unflml6kr"></a>**Games:**
"Searches in which two or more players with conflicting goals are trying to explore the same search space for the solution, are called adversarial searches, often known as Games."

Games are modeled as a [1]Search problem and [2]heuristic evaluation function, and these are the two main factors that help to model and solve games in AI.
### <a name="_n1c7kfszhn3y"></a>**Types of Games in AI:**
**Perfect information:** A game with perfect information is one in which agents can look into the complete board. Agents have all the information about the game, and they can see each other moves also. Examples are Chess, Checkers, Go, etc.

**Imperfect information:** If in a game agents do not have all information about the game and are not aware of what's going on, such type of games are called the game with imperfect information, such as tic-tac-toe, Battleship, blind, Bridge, etc.

**Deterministic games:** Deterministic games are those games that follow a strict pattern and set of rules for the games, and there is no randomness associated with them. Examples are chess, Checkers, Go, tic-tac-toe, etc.

**Non-deterministic games:** Non-deterministic are those games that have various unpredictable events and have a factor of chance or luck. This factor of chance or luck is introduced by either dice or cards. These are random, and each action response is not fixed. Such games are also called stochastic games. Examples: Backgammon, Monopoly, Poker, etc.
## <a name="_pdt6h4qr0fjh"></a>**Zero-Sum Game:**
Zero-sum games are adversarial search that involves pure competition. ***In a Zero-sum game, For one player to win, the other has to lose***. One player in the game tries to maximize one single value, while the other player tries to minimize it. Each move by one player in the game is called a play. Chess and tic-tac-toe are examples of a Zero-sum games.

Example: If we have 2 companies, company B tries to attract customers from company A, then if B win it means loss to A. However, if company B attracts new different customers, then B can win but neccessarily means a loss for A.

## <a name="_uieky064ml4r"></a>**Zero-sum game: Embedded thinking**
The Zero-sum game involved embedded thinking in which one agent or player is trying to figure out:

- What to do.
- How to decide the move
- Needs to think about his opponent as well
- The opponent also thinks about what to do

Each of the players is trying to find out the response of his opponent to their actions. This requires embedded thinking or backward reasoning to solve game problems in AI.
## <a name="_jzmce0t9yegv"></a>**Mini-Max Algorithm:**
Mini-max algorithm is a recursive or backtracking algorithm that is used in decision-making and game theory. It provides an optimal move for the player assuming that the opponent is also playing optimally. It uses recursion to search through the game tree. The Min-Max algorithm is mostly used for game playing in AI. Such as Chess, Checkers, tic-tac-toe, go, and various tow-players game. This algorithm computes the minimax decision for the current state. In this algorithm two players play the game, one is called MAX and the other is called MIN. Both the players fight it as the opposing player gets the minimum benefit while they get the maximum benefit. Both Players of the game are opponents of each other, where MAX will select the maximized value and MIN will select the minimized value. The minimax algorithm performs a depth-first search algorithm for the exploration of the complete game tree. The minimax algorithm proceeds all the way down to the terminal node of the tree, then backtrack the tree as the recursion.

```
function minimax(node, depth, maximizingPlayer) is
    if depth == 0 or node is a terminal node then
        return static evaluation of node

    if maximizingPlayer then
        maxEva = -infinity
        for each child of node do
            eva = minimax(child, depth-1, false)
            maxEva = max(maxEva, eva)
        return maxEva

    else
        minEva = +infinity
        for each child of node do
            eva = minimax(child, depth-1, true)
            minEva = min(minEva, eva)
        return minEva
```

### <a name="_s0ns734mq2x2"></a>**Properties of Mini-Max algorithm:**
**Complete** - Min-Max algorithm is Complete. It will definitely find a solution (if exist), in the finite search tree.

**Optimal** - Min-Max algorithm is optimal if both opponents are playing optimally.

**Time complexity** - As it performs DFS for the game tree, so the time complexity of the Min-Max algorithm is O(bm), where b is the branching factor of the game tree, and m is the maximum depth of the tree.

**Space Complexity** - The space complexity of the Min-max algorithm is also similar to DFS which is O(bm).
## <a name="_a4yfig2qb010"></a>**Alpha-Beta Pruning:**
Alpha-beta pruning is a modified version of the minimax algorithm. It is an optimization technique for the minimax algorithm. As we have seen in the minimax search algorithm the number of game states it has to examine is exponential in the depth of the tree. Since we cannot eliminate the exponent, we can cut it in half. Hence there is a technique by which without checking each node of the game tree we can compute the correct minimax decision, and this technique is called pruning. This involves two threshold parameters Alpha and beta for future expansion, so it is called alpha-beta pruning. It is also called as Alpha-Beta Algorithm. Alpha-beta pruning can be applied at any depth of a tree, and sometimes it not only prune the tree leaves but also the entire sub-tree.

The two-parameter can be defined as

- **Alpha:** The best (highest-value) choice we have found so far at any point along the path of Maximizer. The initial value of alpha is -∞.
- **Beta:** The best (lowest-value) choice we have found so far at any point along the path of Minimizer. The initial value of beta is +∞.

The Alpha-beta pruning to a standard minimax algorithm returns the same move as the standard algorithm does, but it removes all the nodes which are not really affecting the final decision but making the algorithm slow. Hence pruning these nodes makes the algorithm fast.
### <a name="_21f1fm2nnwxq"></a>**Condition for Alpha-beta pruning:**
The main condition required for alpha-beta pruning is:

|α>=β  |
| :-: |
### <a name="_igz0q52q74sb"></a>**Key points about alpha-beta pruning:**
The Max player will only update the value of alpha.

The Min player will only update the value of beta.

While backtracking the tree, the node values will be passed to upper nodes instead of values of alpha and beta.

We will only pass the alpha, and beta values to the child nodes.
### <a name="_hd3mvb7ilpme"></a>**Pseudo-code for Alpha-beta Pruning:**

```
function minimax(node, depth, alpha, beta, maximizingPlayer) is
    if depth == 0 or node is a terminal node then
        return static evaluation of node

    if maximizingPlayer then
        maxEva = -infinity
        for each child of node do
            eva = minimax(child, depth-1, alpha, beta, False)
            maxEva = max(maxEva, eva)
            alpha = max(alpha, maxEva)
            if beta <= alpha then
                break
        return maxEva

    else
        minEva = +infinity
        for each child of node do
            eva = minimax(child, depth-1, alpha, beta, True)
            minEva = min(minEva, eva)
            beta = min(beta, eva)
            if beta <= alpha then
                break
        return minEva
```

**Appendix:**

**Multi-agent environment:**

The environment with more than one agent is termed as **multi-agent environment**, in which each agent is an opponent of other agent and playing against each other. Each agent needs to consider the action of the other agent and the effect of that action on their performance.

**Bibliography:**

1. <https://www.javatpoint.com/ai-adversarial-search>
1. <https://www.javatpoint.com/mini-max-algorithm-in-ai>
1. <https://www.javatpoint.com/ai-alpha-beta-pruning>
