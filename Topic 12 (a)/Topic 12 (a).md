# <a name="_5hz9foxy4t6d"></a>**Entity-relationship (ER) model, design with ER diagrams.**
## <a name="_p2uk4xl36pgi"></a>**Entity-relationship (ER) model:**
The Entity Relational Model is a model for identifying entities to be represented in the database and representation of how those entities are related. The ER data model specifies enterprise schema that represents the overall logical structure of a database graphically. 

The Entity Relationship Diagram explains the relationship among the entities present in the database. ER models are used to model real-world objects like a person, a car, or a company and the relation between these real-world objects. In short, ER Diagram is the structural format of the database.
## <a name="_lh5btyd4nr7n"></a>**Entity-relationship (ER) Diagrams:**
### <a name="_7dja6hqrujmp"></a>**Entity:**
An entity may be any object, class, person, or place. In the ER diagram, an entity can be represented as rectangles. Consider an organization as an example- a manager, product, employee, department, etc. can be taken as an entity.

![DBMS ER model concept](Aspose.Words.0523d677-2a32-4695-b37b-06044e13fc8b.001.png)

1. **Weak Entity**

An entity that depends on another entity is called a weak entity. The weak entity doesn't contain any key attribute of its own. The weak entity is represented by a double rectangle.

![DBMS ER model concept](Aspose.Words.0523d677-2a32-4695-b37b-06044e13fc8b.002.png)
### <a name="_temnfk4ne9y0"></a>**Attribute**
The attribute is used to describe the property of an entity. Eclipse is used to represent an attribute. For example, id, age, contact number, name, etc. can be attributes of a student.

![DBMS ER model concept](Aspose.Words.0523d677-2a32-4695-b37b-06044e13fc8b.003.png)

1. **Key Attribute**

The key attribute is used to represent the main characteristics of an entity. It represents a primary key. The key attribute is represented by an ellipse with the text underlined.

![DBMS ER model concept](Aspose.Words.0523d677-2a32-4695-b37b-06044e13fc8b.004.png)

1. **Composite Attribute**

An attribute that is composed of many other attributes is known as a composite attribute. The composite attribute is represented by an ellipse, and those ellipses are connected with an ellipse.

![DBMS ER model concept](Aspose.Words.0523d677-2a32-4695-b37b-06044e13fc8b.005.png)

1. **Multivalued Attribute**

An attribute can have more than one value. These attributes are known as multivalued attributes. The double oval is used to represent multivalued attributes. For example, a student can have more than one phone number.

![DBMS ER model concept](Aspose.Words.0523d677-2a32-4695-b37b-06044e13fc8b.006.png)

1. **Derived Attribute**

An attribute that can be derived from another attribute is known as a derived attribute. It can be represented by a dashed ellipse. For example, A person's age changes over time and can be derived from another attribute like Date of birth.

![DBMS ER model concept](Aspose.Words.0523d677-2a32-4695-b37b-06044e13fc8b.007.png)
### <a name="_qbowblkuze2e"></a>**Relationship**
A relationship is used to describe the relation between entities. A diamond or rhombus is used to represent the relationship. Types of relationships are as follows:

**One-to-One Relationship**

When only one instance of an entity is associated with the relationship, then it is known as one to one relationship. For example, A female can marry one male, and a male can marry one female.

![DBMS ER model concept](Aspose.Words.0523d677-2a32-4695-b37b-06044e13fc8b.008.png)

**One-to-many relationship**

When only one instance of the entity on the left, and more than one instance of an entity on the right associates with the relationship then this is known as a one-to-many relationship.

For example, scientists can invent many inventions, but the invention is done by only specific scientists.

![DBMS ER model concept](Aspose.Words.0523d677-2a32-4695-b37b-06044e13fc8b.009.png)

**Many-to-one relationship**

When more than one instance of the entity on the left, and only one instance of an entity on the right associates with the relationship then it is known as a many-to-one relationship. For example, a Student enrolls for only one course, but a course can have many students.

![DBMS ER model concept](Aspose.Words.0523d677-2a32-4695-b37b-06044e13fc8b.010.png)

**Many-to-many relationship**

When more than one instance of the entity on the left, and more than one instance of an entity on the right are associated with the relationship then it is known as a many-to-many relationship. For example, an Employee can assign many projects and a project can have many employees.

Many-to-many relationship can be achieved by using a joint entity or a junction table.
 
![DBMS ER model concept](Aspose.Words.0523d677-2a32-4695-b37b-06044e13fc8b.011.png)
# <a name="_xdbbefr7ktrn"></a>**Relational data model, relation, scheme, attribute.**
## <a name="_720iu95hmvt8"></a>**Relational Model:**
The relational model represents how data is stored in Relational Databases. A relational database consists of a collection of tables, each of which is assigned a unique name.

It represents the database as a collection of relations. A relation is nothing but a table of values. Every row in the table represents a collection of related data values. These rows in the table denote a real-world entity or relationship.
## <a name="_r1wcqre47bvt"></a>**Relation:**
A relation is sometimes used to refer to a table in a relational database but is more commonly used to describe the relationships that can be created between those tables in a relational database.

In relational databases, a relationship exists between two tables when one of them has a foreign key that references the primary key of the other table. This single fact allows relational databases to split and store data in different tables, yet still link the disparate data items together. It is one of the features that makes relational databases such powerful and efficient stores of information. Relation, therefore, is the defining feature of relational databases.

### Note: 
Child is the referencing relation and it contains the foreign key which points to the primary key of the parent relation ( or the referenced relation ).
Parent doesn't need any more attributes but child does.

We cannot delte the parent tuple without deleting all tuples in the child referencing that tuple primary key, so we have 3 options: 
  - cascade :delte child tuples referencing deleted tuples from parent
  - set null : foreign keys to null
  - restrict : prohibits the deletion
 
But we can delete the child relation with no errors 
Ex:
Employee child referencing AND Department parent referenced
## <a name="_c3usnvbgjc2v"></a>**Schema:**
A database schema defines how data is organized within a relational database; this is inclusive of logical constraints such as table names, fields, data types, and the relationships between these entities. Schemas commonly use visual representations to communicate the architecture of the database.

A database schema is the skeleton structure that represents the logical view of the entire database. It defines how the data is organized and how the relations among them are associated. It formulates all the constraints that are to be applied to the data. It defines its entities and the relationship among them. It contains a descriptive detail of the database, which can be depicted by means of schema diagrams. It’s the database designers who design the schema to help programmers understand the database and make it useful.
## <a name="_7kn6iho4ij7x"></a>**Attribute:**
In a database management system (DBMS), an attribute refers to a database component, such as a table. It also may refer to a database field. Attributes describe the instances in the column of a database. In relational databases, attributes are the describing characteristics or properties that define all items pertaining to a certain category applied to all cells of a column.
# <a name="_auh4nsy4tk6r"></a>**Building up a relational scheme from an ER diagram.**
A database designer usually starts by designing the visual ERD, once this is done, we can convert this conceptual model into a logical model which breaks down entities, attributes, and relationships into tables, columns, fields, and keys. To convert an ERD to a relational schema, we will use these steps:

1. Convert the strong entity types into a table. Identify the primary key attribute and mention it. The attributes will be the columns.
1. Convert the weak entity types into their table, but here the primary key will be the primary key of the strong entity type as a foreign key. The attributes will be the columns.
1. We can now convert the relationships. There are three degrees of relationships; Binary relationships are those where two different entity types are participating. Like a student enrolled in a course. A unary relationship describes when the same entity type is the only participant. For example, a record of citizens where citizens in the same entity are married to each other, is a unary relationship. A ternary relationship is one where three different entity types are participating, for example, an online store might have tables representing customer, product, and supplier. With degrees and cardinality, we can create relations in order using primary keys and foreign keys.

**Bibliography:**

1. <https://www.geeksforgeeks.org/introduction-of-er-model/>
