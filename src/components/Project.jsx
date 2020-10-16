import React from 'react';

export default function Project(props) {
    return (
        <div class="list-item">
            <div class="item-container">
                <div class="item-info">
                    <h2 class="item-title">{props.title}</h2>
                    <p class="item-code-link">{props.codeLink}</p>
                    <p class="item-tech-description">{props.techDescription}</p>
                </div>
                <div class="item-view">
                    <div class="item-img">
                        <img className="" alt="" src={props.imgSrc} />
                    </div>
                    <a href={props.watchlink} class="item-href">Watch</a>
                </div>
            </div>
        </div>
    );
};