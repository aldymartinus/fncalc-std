<script>
    let { children } = $props();
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
    <main>
        {@render children()}
    </main>
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap");

    #app {
        font-family: "Noto Sans JP", sans-serif;
        margin: 0 auto;
        width: 100%;
        height: 90vh;
    }

    main {
        border: 1px solid #e5e5e5;
        border-top: none;
    }

    nav {
        padding: 0.2rem;
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
        font-weight: 800;
    }

    #dropdown-menu {
        margin: 0 0.1rem 0 0;
    }

    @media screen and (min-width: 900px) {
        #app {
            width: 35%;
            height: 99.5vh;
            background-color: #fff;
        }
    }
</style>
