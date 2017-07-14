import React from 'react';
import NavigationBar from './NavigationBar';
import routes from '../routes';
import FlashMessagesList from './flash/FlashMessagesList';


class App extends React.Component {
    render() {
        return (
            <div className="container">
                <NavigationBar/>
                <FlashMessagesList />
                <main>{routes}</main>
            </div>
        )
    }
}

export default App;
