import React, { Component } from 'react';
import GoBack from '../other/GoBack'
class PageHeader extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12 detail-header" style={{ textAlign: 'center' }}>
                    <GoBack /> <h1>{this.props.title}</h1>
                </div>
            </div>
        );
    }
}

export default PageHeader;
