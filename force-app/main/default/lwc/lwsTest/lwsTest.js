import { LightningElement } from 'lwc';

export default class WebSecurity extends LightningElement {
    svg;
    svgOptions = [
        {label:'Utility',value:'/assets/icons/utility-sprite/svg/symbols.svg#notification'},
        {label:'Standard & Custom',value:'/assets/icons/standard-sprite/svg/symbols.svg#account'}
    ];

    handleSelection(event) {
        this.svg = event.detail.value;
    }
}