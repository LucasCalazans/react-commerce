import React, { Fragment, Component } from 'react';
import BaseApi from '../../api/BaseApi';
import Banner from '../../components/Banner';

class Home extends Component {
    state = {
        banners: [],
    };

    componentDidMount = () => {
        this.getBanners();
    };

    getBanners = async () => {
        const url = BaseApi.getUrl('banners');
        const response = await fetch(url);
        const responseBanner = await response.json();
        const banners = responseBanner.map(url => ({ url }));
        this.setState({ banners });
        console.log(banners);
    };

    render() {
        return (
            <section>
                <Banner images={this.state.banners} />
            </section>
        );
    }
}

export default Home;
