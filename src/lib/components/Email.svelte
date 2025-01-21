<script>
    let email = "";
    let submitted = false;
    let error = "";

    function handleSubmit() {
        error = "";

        if (!email || !email.includes("@")) {
            error = "Please enter a valid email address.";
            return;
        }

        submitted = true;
        email = "";
    }

    function resetForm() {
        submitted = false;
        error = "";
        email = "";
    }
</script>

<div class="signup-container">
    {#if !submitted}
        <p>Sign up to get notified when registration opens!</p>

        <form on:submit|preventDefault={handleSubmit}>
            <input
                type="email"
                bind:value={email}
                placeholder="Enter your email"
                required
            />
            <button type="submit">Sign Up</button>
        </form>

        {#if error}
            <p class="error">{error}</p>
        {/if}
    {:else}
        <p class="success">
            Thank you! We'll notify you as soon as registration is open.
        </p>
        <button on:click={resetForm}>Sign up again</button>
    {/if}
</div>

<style>
    div {
        width: 100%;
        border-top: 1px solid;
    }
    .error {
        color: red;
    }

    .success {
        font-weight: bold;
        margin-bottom: 1rem;
    }
</style>
