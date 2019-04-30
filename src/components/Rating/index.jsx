import React, { Component } from 'react';
import { func } from 'prop-types';
import Icon from '../Icon';
import { Star, StarWrapper } from './styles';
import { colors } from '../../helpers/styles';

class Rating extends Component {
    static propTypes = {
        setReview: func,
    };

    state = {
        rating: this.props.rating || null,
        tempRating: null,
    };

    setRate = rating => {
        if (this.props.value) {
            return;
        }

        if (this.props.setReview) {
            this.props.setReview(rating);
        }

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
        const value = this.props.value ? this.props.value - 1 : this.state.rating;

        for (let i = 0; i < 5; i++) {
            const fill = value >= i && value != null ? colors.golden : colors.alternativeLight;

            stars.push(
                <Star
                    onClick={() => this.setRate(i)}
                    onMouseOver={() => this.starHover(i)}
                    onMouseOut={this.starOut}
                    key={i}
                    isFixed={!!this.props.value}
                >
                    <Icon id="star" iconFill={fill} iconWidth="16" iconHeight="16" />
                </Star>,
            );
        }

        return <StarWrapper className={this.props.className}>{stars}</StarWrapper>;
    }
}

export default Rating;
