import { getAllMoviesYear } from './consultas';

import { LitElement, css, html} from 'lit'
export class MyCardsRealseYear extends LitElement{
    static properties =  {
        products:{type: Array}

    };

    static styles = css`
    main .info-data .card {
        padding: 20px;
        border-radius: 10px;
        background: var(--light);
        box-shadow: 4px 4px 16px rgba(0, 0, 0, .05);
    }
    main .card .head {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    main .card .head h2 {
        font-size: 24px;
        font-weight: 600;
    }
    main .card .head p {
        font-size: 14px;
    }
    main .card .head .icon {
        font-size: 20px;
        color: var(--green);
    }
    main .card .head .icon.down {
        color: var(--red);
    }
    main .card .progress {
        display: block;
        margin-top: 24px;
        height: 10px;
        width: 100%;
        border-radius: 10px;
        background: var(--grey);
        overflow-y: hidden;
        position: relative;
        margin-bottom: 4px;
    }
    main .card .progress::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background: var(--blue);
        width: var(--value);
    }
    main .card .label {
        font-size: 14px;
        font-weight: 700;
    }`;

    constructor(){
        super();
        this.products =[];
    }

    async connectedCallback(){
        super.connectedCallback();
        this.products = await getAllMoviesYear();


    }

    render(){
        return html`


        <div class="card">
<div class="head">
    <div>
        <h2>1500</h2>
        <p>Traffic</p>
    </div>
    <i class='bx bx-trending-up icon' ></i>
</div>
<span class="progress" data-value="40%"></span>
<span class="label">40%</span>
</div>
<div class="card">
<div class="head">
    <div>
        <h2>${products.name}</h2>
        <p>${products.dateRealse}</p>
    </div>
    <i class='bx bx-trending-down icon down' ></i>
</div>
<span class="progress" data-value="60%"></span>
<span class="label">60%</span>
</div>
    
        `
        ;


    }




}

customElements.define('my-card',MyCardsRealseYear)
