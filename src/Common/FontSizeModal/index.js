import React, { Component } from 'react';
import './style.css';

class FontSizeModal extends Component {
    render = () => {
        return (
            <div className="font-size-block">
                <p>choose font-size:</p>
                <select>
                    <option>8</option>
                    <option>10</option>
                    <option>12</option>
                    <option>14</option>
                    <option>16</option>
                    <option>18</option>
                    <option>20</option>
                    <option>22</option>
                    <option>24</option>
                    <option>28</option>
                    <option>32</option>
                    <option>36</option>
                </select>
            </div>
        )
    }
}

export default FontSizeModal;