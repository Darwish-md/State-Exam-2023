# Part 1: Basic concepts of object-oriented paradigm. Class, object, instantiation. Inheritance, class hierarchy. Polymorphism, method overloading. Scoping, information hiding, accessibility levels. Abstract classes and interfaces. Class diagram of UML.
The object-oriented paradigm is a programming paradigm that revolves around the concept of objects, which are instances of classes. It emphasizes organizing code into reusable and modular structures, enabling efficient development, maintenance, and code reuse.

 - ***Class:***
        A class is a blueprint or template that defines the properties (attributes) and behaviors (methods) of objects.
        It serves as a blueprint for creating multiple objects with similar characteristics.
        For example, a class named "Car" may have attributes like "color," "brand," and "price," as well as methods like "startEngine()" and "accelerate()".
 - ***Object:***
        An object is an instance of a class, created using the class blueprint.
        It represents a real-world entity and encapsulates its data and behavior.
        For example, an object "myCar" can be created from the "Car" class, having specific values for its attributes and the ability to invoke methods.
 - ***Instantiation:***
        Instantiation refers to the process of creating an object from a class.
        It involves allocating memory for the object and initializing its attributes.
        For example, creating an object "myCar" from the "Car" class: Car myCar = new Car();
 - ***Inheritance and Class Hierarchy:***
        Inheritance is a mechanism that allows a class to inherit properties and methods from another class, known as the superclass or base class.
        The class that inherits from the superclass is called a subclass or derived class.
        It promotes code reuse and supports the concept of specialization and generalization.
        For example, a class "Sedan" can inherit from the "Car" class, inheriting its attributes and methods while adding specific features unique to sedans.
 - ***Polymorphism and Method Overloading:***
        Polymorphism allows objects of different classes to be treated as objects of a common superclass, providing flexibility and extensibility.
        Method overloading is a form of polymorphism that enables a class to have multiple methods with the same name but different parameters.
        The appropriate method is determined based on the number, type, or order of the parameters.
        For example, a class "Shape" can have a method named "calculateArea()" that is implemented differently in subclasses like "Circle" and "Rectangle."
 - ***Scoping, Information Hiding, and Accessibility Levels:***
        Scoping defines the visibility and accessibility of variables and methods within a program.
        Information hiding (encapsulation) restricts direct access to internal data and provides controlled access through methods.
        Accessibility levels, such as public, private, and protected, determine the visibility and accessibility of class members.
        For example, private variables can only be accessed within the class, while public methods can be accessed from anywhere.
 - ***Abstract Classes and Interfaces:***
        Abstract classes provide a blueprint for subclasses and cannot be instantiated themselves.
        They may contain abstract methods (without implementation) that must be overridden in subclasses.
        Interfaces define a contract of methods that implementing classes must adhere to.
        They allow multiple inheritance of behavior.
        For example, an abstract class "Shape" can define an abstract method "calculateArea()", and multiple classes like "Circle" and "Rectangle" can implement it.
 - ***Class Diagram of UML:***
        A class diagram is a visual representation of classes, their attributes, relationships, and methods in the Unified Modeling Language (UML).
        It helps in understanding the structure and organization of a system.
        Class diagrams illustrate the inheritance, associations, aggregations, and dependencies between classes.

Overall, the object-oriented paradigm provides a modular and structured approach to software development, allowing for code reuse, maintainability, and scalability. It promotes the modeling of real-world entities and their relationships, enhancing the conceptualization and design of software systems.
