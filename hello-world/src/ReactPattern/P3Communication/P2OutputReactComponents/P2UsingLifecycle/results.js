import React from 'react';
import LoadingScreen from 'react-loading-screen';
// import List from 'react-list';

export default class ResultsPage extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getResults();
    }

    render() {
        if (this.props.hits.length > 0) {
            return (
                <div>
                    {this.props.hits.map((hitsDetail, index) => {
                        return <div>
                            <p> {hitsDetail.title} </p>
                            <p> {hitsDetail.url} </p>
                        </div>
                    })}
                </div>
            )
        } else {
            return <LoadingScreen
                loading={true}
                bgColor='#f1f1f1'
                spinnerColor='#9ee5f8'
                textColor='#676767'
                logoSrc='https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg'
                text='Here is a loading screen!'
            >
            </LoadingScreen>
        }
    }
}