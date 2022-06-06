import React from "react";
import { Accordion } from "react-bootstrap";


const Blog = () => {
    return (
        <div className="min-h mt-5 mb-5">
        <br />
            <h3 className="my-2">Questions And Answers</h3>
            <br />
            <div className="row  ms-0  mt-5 mt-md-0 px-2 mb-5 py-5">
                <div className="col-11 col-lg-8  w-lg-75 mx-auto">
                <Accordion>
                    <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        {/* Question-1 */}
                        Authentication Vs Authorization
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="row">
                            <div className="col-6">
                                <p className="mt-2">Authentication:</p>
                                <p className="my-2">
                                Authentication verifies who the user is. <br /> It  works through passwords, one-time pins, biometric information, 
                                and other information provided or entered by the user. <br /> It is the first step of a good identity and access 
                                management process. <br /> Example: By verifying their identity, employees can gain access to an HR application 
                                that includes their personal pay information, vacation time, and 401K data.
                                </p>
                            </div>
                            <div className="col-6">
                                <p className="mt-2">Authorization:</p>
                                <p className="my-2">
                                Authorization determines what resources a user can access. <br />
                                It works through settings that are implemented and maintained 
                                by the organization. <br /> It always takes place after authentication. <br />
                                Example: Once their level of access is authorized, employees and
                                HR managers can access different levels of data based on the permissions set by the organization.
                                </p>
                            </div>
                        </div>
                    </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        {/* Question-2 */}
                        Why am I using Firebase? What are the alternatives for implementing
                        authentication?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p className="my-2"> Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. 
                        It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially 
                        recognized.
                    <br />
                        </p>
                        <p>Other alternative options are :-
                        <ul>
                            <li>Auth0</li>
                            <li>AWS Amplify</li>
                            <li>Kuzzle</li>
                            <li>Flutter</li>
                            <li>Parse</li>
                            <li>RxDB</li>
                            <li>Back4App</li>
                        </ul>
                        </p>
                    </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        {/* Question-3 */}
                        What other services does firebase provide other than
                        authentication?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p className="my-2">
                            <ol>
                                <li>Cloud Firestore.</li>
                                <li>Cloud Functions</li>
                                <li>Hosting</li>
                                <li>Cloud Storage</li>
                                <li>Google Analytics</li>
                                <li>Predictions</li>
                                <li>Cloud Messaging</li>
                            </ol>
                        </p>
                    </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Blog;
