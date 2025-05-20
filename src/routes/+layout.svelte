<script>
</script>

<div id="app">
    <nav>
        <span id="app-title">FNCalc</span>
        <select id="dropdown-menu">
            <option value="/">New Transaction</option>
            <option value="/customize">Customize Receipt</option>
            <option value="/archive">Transaction Archive</option>
            <option value="/config">App Configuration</option>
        </select>
    </nav>

    <slot />
</div>

<style>
    #app {
        margin: 0 auto;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        width: 100%;
        height: 90vh;
    }

    nav {
        height: 5vh;
        background-color: #4165ba;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    #dropdown-menu {
        padding: 0.2rem;
        cursor: pointer;
        text-align: center;
    }

    #app-title {
        font-size: 0.9rem;
        margin: 0 0 0 0.4rem;
        color: #fff;
        font-weight: 600;
    }

    #dropdown-menu {
        margin: 0 0.5rem 0 0;
    }

    @media screen and (min-width: 900px) {
        #app {
            width: 35%;
            height: 99.5vh;
            background-color: #fff;
        }
    }
</style>
