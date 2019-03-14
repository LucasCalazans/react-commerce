import React, { Component } from 'react';
import Icon from '../../components/Icons';
import { Star } from './styles';

class Rating extends Component {
    state = {
        rating: this.props.rating || null,
        tempRating: null,
    };

    setRate = rating => {
        this.setState({
            rating: rating,
            tempRating: rating,
        });
    };

    starHover = rating => {
        this.setState({
            rating: rating,
            tempRating: this.state.rating,
        });
    };

    starOut = () => {
        this.setState({ rating: this.state.tempRating });
    };

    render() {
        const stars = [];

        for (let i = 0; i < 5; i++) {
            const fill = this.state.rating >= i && this.state.rating != null ? 'goldenrod' : 'grey';

            stars.push(
                <Star
                    onClick={() => this.setRate(i)}
                    onMouseOver={() => this.starHover(i)}
                    onMouseOut={this.starOut}
                    key={i}
                >
                    <Icon id="star" iconFill={fill} iconWidth="28" iconHeight="28" />
                </Star>,
            );
        }

        return stars;
    }
}

export default Rating;
