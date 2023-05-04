import React from 'react';
import { Container } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container className='mt-3'>
            <h3>Q.1- Difference between controlled and uncontrolled component. </h3>
            <p>Answer: A controlled component is a component where its state is controlled by React. The component receives its state values from a parent component through props, and the parent component handles any changes to the state by passing new props to the child component. The child component has no control over its own state, and instead relies entirely on the parent component to manage its state. Controlled components are often used to create forms, where the input values are managed by React.</p>
            <br />
            <p>An uncontrolled component is a component where its state is managed by the component itself, rather than by React. The component can manage its own state and respond to user input directly, without needing to communicate with a parent component. Uncontrolled components are often used when you don't need to track the component's state globally, and can handle any state changes locally.</p>
            <div>
                <h3>Q.2- How to validate React props using propTypes. </h3>
                <p>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, which allows developers to run JavaScript code outside of a web browser. Express, on the other hand, is a web application framework that runs on top of Node.js, providing a set of libraries and tools for building web applications.</p>
                <br />
                <ol>
                    <li>Functionality: Node.js provides a platform for running JavaScript code outside of a web browser, allowing developers to build command-line tools and server-side applications. Express, on the other hand, provides a set of libraries and tools for building web applications, including middleware for handling requests, routing, and templating.</li>
                    <li>Architecture: Node.js is a runtime environment, while Express is a web application framework built on top of Node.js. This means that Express provides additional functionality on top of Node.js, including middleware and routing.</li>
                    <li>Learning Curve: Node.js can be challenging for new developers to learn, as it requires a deep understanding of the underlying JavaScript runtime and its APIs. Express, on the other hand, provides a simpler, more focused API for building web applications, making it easier for developers to get started.</li>
                    <li>Flexibility: Node.js is highly flexible, allowing developers to build a wide range of applications, from command-line tools to server-side applications. Express is also flexible, but its primary focus is on building web applications.</li>
                    <li>Community: Node.js has a large and active community of developers, which has contributed to its popularity and growth. Express also has a large community, but its focus on web applications means that it is not as widely used as Node.js.</li>
                </ol>
              
            </div>
            <div>
                <h3>Q.3-Difference between Node Js vs Express </h3>
                <p>Answer: In React, you can use the propTypes property to validate the types of props that are passed to a component. The propTypes property is an object that defines the expected type of each prop, and throws a warning in the console if the type of a prop doesn't match the expected type.</p>
                <br />
                <p>If a prop doesn't match the expected type, React will throw a warning in the console. This is useful for catching errors early in the development process and ensuring that components receive the correct types of props.</p>
            </div>
            <div>
                <h3>Q.4- What is custom hook and why will you create custom hook. </h3>
                <p>In React, a custom hook is a function that allows you to reuse stateful logic across multiple components. A custom hook is a simple JavaScript function that can use existing React hooks (such as useState, useEffect, useRef, etc.) to encapsulate and abstract complex logic that can be shared between components.

                    The main benefits of creating a custom hook are:

                    Reusability: A custom hook allows you to encapsulate and abstract complex logic into a reusable function that can be used across multiple components.

                    Abstraction: A custom hook can hide implementation details and simplify the logic that is needed to achieve a particular functionality. This can make the code more maintainable and easier to understand.

                    Organization: A custom hook can help to organize related logic into a single place, making it easier to find and reuse.</p>
            </div>

        </Container>
    );
};

export default Blogs;