import React from 'react';

const icons = {
    home: {
        path:
            'M1024 590.444l-512-397.426-512 397.428v-162.038l512-397.426 512 397.428zM896 576v384h-256v-256h-256v256h-256v-384l384-288z',
        viewBox: '0 0 1024 1024',
        iconName: 'Home',
    },

    umbrella: {
        path:
            'M27 14h5c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2v0zM27 14c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2v0 14c0 1.112-0.895 2-2 2-1.112 0-2-0.896-2-2.001v-1.494c0-0.291 0.224-0.505 0.5-0.505 0.268 0 0.5 0.226 0.5 0.505v1.505c0 0.547 0.444 0.991 1 0.991 0.552 0 1-0.451 1-0.991v-14.009c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-5.415 6.671-9.825 15-9.995v-1.506c0-0.283 0.224-0.499 0.5-0.499 0.268 0 0.5 0.224 0.5 0.499v1.506c8.329 0.17 15 4.58 15 9.995h-5z',
        viewBox: '0 0 34 34',
        iconName: 'Umbrella',
    },

    quarterCircle: {
        path:
            'm15.314 3e-3v9.032c3.262 0.107 5.884 2.787 5.884 6.075 0 3.356-2.73 6.084-6.085 6.084s-6.085-2.729-6.085-6.084c0-0.077 9e-3 -0.154 0.012-0.229h-9.034c-1e-3 0.076-6e-3 0.153-6e-3 0.229 0 8.333 6.779 15.111 15.113 15.111 8.333 0 15.112-6.778 15.112-15.111 0-8.265-6.67-14.999-14.911-15.107z',
        viewBox: '0 0 30.225 30.224',
        iconName: 'Quarter Circle',
    },
};

export const Icon = props => {
    const iconFill = props.iconFill || 'black';
    const iconWidth = props.iconWidth || '34';
    const iconHeight = props.iconHeight || '34';
    const rotate = props.rotate || false;

    return (
        <svg
            className={icons[props.id].iconName}
            xmlns="http://www.w3.org/2000/svg"
            width={iconWidth}
            height={iconHeight}
            viewBox={icons[props.id].viewBox}
            aria-labelledby="title"
        >
            <animateTransform
                attributeName="transform"
                type={rotate ? 'rotate' : ''}
                calcMode="linear"
                values="0 0 0;360 0 0"
                keyTimes="0;1"
                dur="1s"
                begin="0s"
                repeatCount="indefinite"
            />
            <title id="title">{icons[props.id].iconName}</title>
            <path fill={iconFill} d={icons[props.id].path} />
        </svg>
    );
};
