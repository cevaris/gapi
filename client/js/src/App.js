import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {CreateApiKeyRequest, Identification} from './proto/schema_pb';
import {GapiServiceClient} from './proto/schema_grpc_web_pb';

const grpc = {};
grpc.web = require('grpc-web');

class App extends Component {
    componentDidMount() {
        console.log("loaded!");
        const client = new GapiServiceClient('http://' + window.location.hostname + ':8080', null, null);

        const identification = new Identification();
        identification.setEmail("test@example.com");
        identification.setPassword("super secret sauce");
        const request = new CreateApiKeyRequest();
        request.setIdentification(identification);

        console.log(request);
        client.createApiKey(request, {}, (err, response) => {
            if (err) {
                console.log(err);
            } else {
                console.log(response.getKey());
            }
        });
        console.log("called!");
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
