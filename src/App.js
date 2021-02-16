import React from 'react';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <div className="sidebar">

                </div>

                <main className="content">
                    <div className="table">
                        <div className="row">
                            <div className="item">ID</div>
                            <div className="item">NAME</div>
                            <div className="item">FIELD1</div>
                            <div className="item">OPTION2</div>
                            <div className="item">EXTRA FIELD</div>
                        </div>

                        <div className="row">
                            <div className="item">{Math.floor(Math.random() * 150)}</div>
                            <div className="item">Lorem ipsum dolor.</div>
                            <div className="item">Lorem ipsum.</div>
                            <div className="item">Lorem ipsum dolor sit.</div>
                            <div className="item">Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
                        </div>

                        <div className="row">
                            <div className="item">{Math.floor(Math.random() * 150)}</div>
                            <div className="item">Lorem ipsum dolor.</div>
                            <div className="item">Lorem ipsum.</div>
                            <div className="item">Lorem ipsum dolor sit.</div>
                            <div className="item">Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default App;
