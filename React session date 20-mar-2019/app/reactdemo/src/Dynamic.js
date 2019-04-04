import React, {Component} from "react";


class Dynamic extends Component {
    render() {
        console.log(this.props);
        // const {match: {params: {id}}} = id;
        // const {match: {params: {name}}} = name;
        return (
            <div>
                    {/*Hello {name} your id is {id}*/}
            </div>
        );
    }
}

export default Dynamic;