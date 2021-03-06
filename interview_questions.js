/**
 *------------------------------------------------------------------------------------------------
 *                              CBA, 04 Feb 2022 - Software Engineer
 * -----------------------------------------------------------------------------------------------
 * 
 * 1. Two types of encryption ?
 * 
 * Symmetric & Asymmetric encryption
 * 
 * Symmetric - encryption where same keys are use to encrypt & decrypt.
 * 
 * Asymmetric - it is a key pair encrytion , where public & private keys 
 *              used to encrypt & decrypt.
 *              Public key is used to encrypt the message/data and private key is 
 *              used to decrypt the message.
 * 
 * - Encryption vs Hashing
 *      Both job is to secure password.
 * 
 * Encryption - can encode message & decode message
 * We can encode and decode text, eg. aman(encode) -> udhwjmn(decode) -> aman
 *      
 * Hashing - One way communication 
 * eg. aman -> anmnjkfhdkf.dsofuewn.oiutshd    
 * 
 * 
 * 
 *  
 * 
 * 2. Hoisting ?
 *    see file 2_hoisting_in_js.js
 * 
 * 3. Authentication & Authorization ?
 * 
 * -  Authentication is a process where users validate themselves,
 *    eg: Username & password
 *        one time password 
 *        fingerprints
 *    Authentication is a concept of validating user credentials and establishing 
 *    the identity of the user.
 * 
 * -  Authorization is a process where special permission grant to user and limited resources
 *    are alotted to user. Also known as access control or client proviledges.
 *    eg: Adding a user in group, giving admin rights to user.
 * 
 * In secure environements, authorization must always follows authentication. Eg. In HCL , i proved 
 * my identity first (Authentication) then i got priviedges to access the applications (Authorization). 
 * 
 * Read More: https://www.okta.com/identity-101/authentication-vs-authorization/
 *    
 * 4. Single sign on (Authentication) : Implementations: OpenID, Facebook connect ?
 * - When user tries to log in from a DOMAIN x --> Either user logs in or cookie is available
 * - Sharing session information across different domains, thats what SSO does
 * 
 * Read More: https://auth0.com/blog/what-is-and-how-does-single-sign-on-work/
 * 
 * 5. Difference between import & require ?
 * 
 * 6. Dependency Injection ?
 * - A dependency is a object that can be used as a service.
 *      eg Class A is dependent on Class B, we have to create object of class to access its     
 * * services. So, transferring the task of creating the objects to someone else and directly
 *  using the dependency is called DI.
 * 
 * DI can be injected thorugh constructor & interface injection.  
 * - Dependency can be injected at runtime rather than at compile time.
 * 
 * INVERSION OF CONTROL: concept behind DI
 * 
 * ****** Will add more *******
 * 
 * 7. Layers in web app ?
 * 
 *  - Presentation layer: Represent the UI side of a web app, it has UI components that process * data and make it more readable form for humans.
 * 
 *  - Data service layer: Transmit data from processed by the Business logic layer to presentation
 *    layer.
 *      
 *  - Business | Domain | Application logic layer: This layer is responsible for data exchange, which defines logic for business and rules. Logging is an example of business logic layer.
 * 
 * eg, took the request from user process it in the architecture and delivers it to required route.
 * 
 *  - Data Access layer: Access to persistent storage like binary or XML.
 *  - Third party integrations.
 * 
 * 
 * 8. Solid principles  ?
 * 9. Exception handling and how to implement for mongodb & nodejs ?
 * 10. What is REST api & verbs ?
 * 11. What to do if database is out of resources ?
 * 12. How to pass reference in JS ?
 * 13. Services in Angular ?
 * 14. Angular architecture ?
 * 15. Code patterns ?
 * 16. What is JWT ?
 * 
 *
 * 
 * --------------------------------------------------------------------------------------
 *                                     TCS NODEJS & JS
 * --------------------------------------------------------------------------------------
 *  1. Benefits of Nodejs & express 
 *     - Node JS is an open suourse, cross paltform, backend javascript runtime that runs on v8, and execute js code outside of web browser.
 *     - Can easily setup servers, to REQ & RES data from storage, reusable code, Asynchronous & 
 * event driven .
 *      Best suitable for: 
 *          * Real time web streaming
 *          * Chat applications
 *          * Social media data access
 *          * Writing apis
 *          * Streaming applications
 *          * NPM support for various packages
 *          * Cross platform
 * 

 * 
 * 2. Non blocking I/O or Asynchronous : Ref: https://medium.com/ing-blog/how-does-non-blocking-io-work-under-the-hood-6299d2953c74
 *      Non blocking SINGLLE THREAD system,
 *          * In a non bloacking system, waiter only takes order & serve order, do not wait or sits anywhere, He share his mobile number, to give a call back when order is ready. Similarly, he expect kitchen to callback when order is ready to serve.
 * 
 * -> Why non-blocking IO?
 * Ans: 
 *  
 *  eg. Waiter manager three table in a kitchen, he took order from table one and deliver it to kitchen and now he is free and can get order from table 2 , and will only be call back when order is ready to serve.
 *
 *  --> event loop
 * 
 * 3. What is middleware
 * Ans: Middleware is software that lies between an operating system and the applications running on it, middleware enables communication and data management for distributed applications. it connects two applications together so data and databases can be easily passed between the ???pipe.???
 * 
 * 4. What is hybrid or multi cloud 
 * Ans: Both "multi-cloud" and "hybrid cloud" refer to cloud deployments that integrate more than one cloud. They differ in the kinds of cloud infrastructure they include.
 * 
 * MULTI CLOUD: "Multi-cloud" refers to the combination and integration of multiple public clouds. A business may use one public cloud as a database, one as PaaS, one for user authentication, and so on.

// If the multi-cloud deployment includes a private cloud or an on-premise data center as well, then the cloud deployment can actually be considered a hybrid cloud.

// HYBRID CLOUD: A hybrid cloud combines public cloud computing with a private cloud or on-premise infrastructure. On-premise infrastructure can be an internal data center or any other IT infrastructure that runs within a corporate network.

// Hybrid cloud deployments are fairly common. Some businesses migrate partly to the cloud but find it cost-prohibitive or too resource-intensive to move all the way, and as a result some processes, business logic, and data storage still take place in legacy on-premise infrastructure.
 * 
 * 5. Serverless.
 * Ans:
 * 
 * 6. Difference between callbacks & promises & Async await 
 * Ans:
 * 7. How to handle multiple request 
 * Ans:
 * 8. Multiple calls 
 * Ans:
 * 
 * ---------------------------------------------------------------------------------------
 *                        SERVICE NSW - SOFTWARE ENGINEER, 11 APRIL 2022
 * ---------------------------------------------------------------------------------------
 * 
 * Question based on Array and Double array , inserting , iterating . 
 * Findindex method
 * 
 * 
 * 
 * --------------------------------------------------------------------------
 * 17. Javascript event loop 
 * 18. Mapreduce
 * 19. Functional reactive programming
 * 20. Singleton pattern
 * 21. Datelist data structure
 * 22. Graph databases 
 * 23. Idempotency
 * 24. server side rendering
 * 25. Type safety
 * 26. Dependency injections
 * 27. CORS
 * 28. == & ===
 */