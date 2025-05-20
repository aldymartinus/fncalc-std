<div id="cart-container">
    <div id="item-list"></div>
    <div class="btn-group">
        <button id="clear-cart-btn" aria-label="clear-cart-btn">
            <i class="fa-solid fa-broom"></i>
        </button>
        <button id="proceed-btn">Proceed</button>
    </div>
</div>

<style>
    #cart-container {
        display: flex;
        flex-direction: column;
    }

    #item-list {
        margin: 0.1rem 0.3rem;
        height: 55.5vh;
        border-radius: 2px;
        border: 1px solid #b0b0b0;
    }

    #proceed-btn {
        width: 82%;
        cursor: pointer;
        margin: 0.2rem 0.3rem 0.2rem 0;
        padding: 0.7rem;
        font-weight: 600;
        color: #333;
    }

    #clear-cart-btn {
        width: 13%;
        cursor: pointer;
        margin: 0.2rem 0.2rem 0.2rem 0.3rem;
        padding: 0.7rem;
        font-weight: 600;
        color: #333;
    }

    #item-details {
        display: flex;
        color: #333;
        flex-direction: column;
    }

    #item {
        font-size: 90%;
        user-select: none;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        margin: 0 0.2rem;
        padding: 0.2rem;
        border-bottom: 1px solid #b0b0b0;
    }

    #action-btn-container {
        opacity: 60%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    #edit-btn {
        cursor: pointer;
        height: 2rem;
        width: 2rem;
        color: #333;
        margin: 0 0.3rem 0 0;
    }

    #remove-btn {
        cursor: pointer;
        height: 2rem;
        width: 2rem;
        color: #333;
    }

    #cart-item-name {
        font-weight: 600;
        margin: 0 0 -0.2rem 0;
    }

    #price-equation {
        font-weight: 400;
    }

    @media screen and (min-width: 900px) {
        #clear-cart-btn {
            margin: 0.2rem 0.2rem 0.2rem 0.05rem;
        }

        #item-list {
            margin: 0.2rem 0;
        }

        #proceed-btn {
            margin: 0.2rem 0;
        }

        #item-list {
            height: 60vh;
        }
    }
</style>
