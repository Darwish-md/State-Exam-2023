# <a name="_5hz9foxy4t6d"></a>**Optimization and evaluation of relational queries.**
A query is a request for information from a database. Before the database can give you the answer, it needs to process the query. 

This process is divided into three steps: parsing and translation, optimization, and evaluation.

1. **Parsing and Translation**: When you write a query in SQL, the database system doesn't understand it directly. It's like giving instructions to a person in a language they don't know. So, in this step, the query is translated from a high-level language (SQL) to a low-level language called ***relational algebra***. Relational algebra is a way to represent the query in a form that the database can understand. The parser checks the syntax of the query and makes sure the table and column names are correct. Then it translates the query into relational algebra.

### Note: Relational algebra:
- It is a procedural language
- It provides a set of operations and rules to perform various operations on relations
- it is a set of algebraic operations.

For example, let's say you want to find the names of all employees whose salary is more than $100,000. In SQL, your statement might look like this: SELECT EMP\_NAME FROM EMPLOYEE WHERE SALARY > 100,000. This SQL statement can be converted into different variations of relational algebra, and two examples could be: 
- σsalary>100000 (πemp\_name (Employee)) : this query first selects the "emp_name" attribute from the "Employee" relation using projection. It then filters the resulting relation to include only those employees whose salary is greater than 100,000 using the selection operation.
- πemp\_name (σsalary>100000 (Employee)) : this query first filters the "Employee" relation to include only those employees whose salary is greater than 100,000 using the selection operation. It then selects the "emp_name" attribute from the resulting relation using projection.

1. **Optimization:** Once the query is translated into relational algebra, it goes to the ***optimizer***. The optimizer's job is to find the most efficient way to execute the query. It calculates the cost of different execution plans based on factors like ***CPU usage, disk usage, and network usage***. In our example, both the variations of relational algebra are valid for the given SQL statement, but the optimizer will assign cost values to them and choose the one that it thinks will be faster and use fewer resources.
1. **Evaluation:** After the optimization step, the query evaluation plan is determined. It's a sequence of basic operations that the database needs to perform to get the answer to the query. The evaluation plan is sent to the ***query evaluation engine***, which executes the plan and returns the result of the query. In our example, the evaluation plan will be executed to find the names of employees who earn more than $100,000, and the engine will give you the answer.

A query is a request for information from a database. The database processes the query by translating it into a language it understands, finding the best way to execute it, and finally getting the answer for you.
# <a name="_ih2mgetbvakb"></a>**Tree-based optimization in relational algebra.**
Tree-based optimization is a method used to make queries more efficient. It involves creating a tree structure called a query tree, which represents the steps needed to execute a database query. The tables in the query are like leaves on the tree, and the operations we perform on the data are like branches or nodes.

To optimize the query, we start from the bottom of the tree and work our way up to the top. We begin with the table data and move upwards, creating temporary results as we go. These temporary results are stored in memory and are removed once we are done with them. By moving up the tree, we eventually reach the top, which represents the final result of the query.

There are different ways to find the best optimization strategy. One approach is an exhaustive search, where we generate all possible query trees and choose the one that gives us the best result. However, this method can be time-consuming and requires a lot of memory.

Alternatively, we can use rule-based heuristics. These are like shortcuts or guidelines that help us make decisions during optimization. For example, a rule could suggest performing select and project operations before joining operations. These heuristics are faster than an exhaustive search but may not always give the absolute best solution.

### Example:
Here's a simplified example to illustrate tree-based optimization in relational algebra:

Let's consider a database with two tables: "Customers" and "Orders". The goal is to retrieve the names of customers who have placed orders.

The SQL query for this task might look like:
```sql
SELECT Customers.Name
FROM Customers
JOIN Orders ON Customers.CustomerID = Orders.CustomerID;
```
To optimize this query using tree-based optimization, the optimizer analyzes the query and generates an execution plan in the form of a tree structure. Here's a simplified representation of the execution plan:

```
          JOIN
         /    \
    Customers  Orders
```

In this plan, the "Customers" and "Orders" tables are joined on the common attribute "CustomerID". The execution starts from the "Customers" table, and for each customer, it matches the corresponding orders from the "Orders" table.

The optimizer determines this plan based on factors like the ***available indexes, statistics about the data, and estimated costs of different operations***. It evaluates various alternatives and chooses the plan that minimizes the overall cost of executing the query.

By organizing the execution plan as a tree structure, the database system can efficiently traverse the data and retrieve the desired results. It can optimize the access patterns, minimize data transfer, and reduce the need for additional operations, resulting in improved query performance.

# <a name="_v8s1mbsg5xja"></a>**Cost-based optimization.**
Cost-based optimization is a technique used by the optimizer in a database system to find the most efficient way to execute a query. The optimizer assigns a numerical cost to each step or operation in a potential execution plan. It then calculates the total cost estimate for each possible plan or strategy.

The goal of cost-based optimization is to choose the plan with the lowest cost estimate. This is why it's called a "cost-based" optimizer. The cost of an operation is influenced by factors like the number of rows returned, known as ***cardinality***, and the selectivity of the rows selected. Selectivity refers to the ***number of rows selected compared to the total number of rows in a table or database.***

The cost estimate also takes into account other factors, such as ***the cost of accessing data from secondary storage (like reading or writing data blocks), the amount of memory required for executing the query, the cost of storing intermediate files generated during query execution, the computational cost (like CPU operations on data buffers), and the communication cost associated with sending the query and its results between different places.***

By evaluating the costs of different plans, the optimizer can choose the one that minimizes the overall cost. This helps the database system execute queries more efficiently and optimize system performance.
