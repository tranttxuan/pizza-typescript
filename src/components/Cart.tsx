import React, { Component } from "react";
import PropTypes from "prop-types";
import { FiShoppingCart } from "react-icons/fi";
interface Props {}

interface State {
    isOpen: boolean;
}

export default class Cart extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        // this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if((event.target as HTMLElement).nodeName === "SPAN"){
            // (event.target as HTMLSpanElement)
        }
        this.setState((pre) => ({ isOpen: !pre.isOpen }));
    }
    render() {
        return (
            <div>
                <button type="button" onClick={this.handleClick}>
                    <FiShoppingCart />
                    <span>2 pizza(s)</span>
                </button>
                <div
                    className="cartDropDown"
                    style={{
                        display: this.state.isOpen ? "block" : "none",
                    }}
                >
                    <ul>
                        <li>Napoletanna</li>
                        <li>Marinara</li>
                    </ul>
                </div>
            </div>
        );
    }
}
