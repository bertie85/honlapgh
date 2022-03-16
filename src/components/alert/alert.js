import { Component } from "react";

class Alert extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: true,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({
            show: false,
        });
    }

    render() {
        return this.state.show ? (
            <div className="text w-50 m-auto mb-1">
                <div className="alert alert-primary" role="alert">
                    <button type="button" className="close" aria-label="Close" onClick={this.handleClick}>
                        <b><div className="" aria-hidden="true">&times;</div></b>
                    </button>

                    {this.props.text}
                </div>
            </div>
        )
            : ""
    }
}

export default Alert;
