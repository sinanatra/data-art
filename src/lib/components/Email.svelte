<script>
  // let email = "";
  // let submitted = false;
  // let error = "";

  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // async function handleSubmit() {
  //     error = "";

  //     if (!email || !emailRegex.test(email)) {
  //         error = "Please enter a valid email address.";
  //         return;
  //     }

  //     submitted = true;
  //     email = "";
  // }

  // function resetForm() {
  //     submitted = false;
  //     error = "";
  //     email = "";
  // }
</script>

<div class="signup-container">
  <!-- {#if !submitted}
        <p>Sign up to get notified when registration opens.</p>

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
    {/if} -->

  <link
    rel="stylesheet"
    href="https://sibforms.com/forms/end-form/build/sib-styles.css"
  />
  <!--  END - We recommend to place the above code in head tag of your website html -->

  <!-- START - We recommend to place the below code where you want the form in your website html  -->
  <div
    class="sib-form"
    style="text-align: center;
                                                      "
  >
    <div id="sib-form-container" class="sib-form-container">
      <div
        id="sib-container"
        class="sib-container--large sib-container--vertical"
        style="max-width:540px; border-radius:3px;"
      >
        <form
          id="sib-form"
          method="POST"
          action="https://3d794b8a.sibforms.com/serve/MUIFACQTFAWb7ZLG8a0UU_QmD17paeA6w5mJV_yQUOpQAGK6nJsLscGbsgEMigp9T5HT2zI1Hwc670pYI11lK9JL0ivYjP1AWAYHoXMjI1PK6b3XRcc7IB29GL7KIiQ9CfKOlp-nf7FPo6xoJBKyuHXNzhVUELo5slm3lc7f5X7-74dr-5TIDMflmcJPTkAzDp7aK8XfAxIFRldE"
        >
          <div>
            <div
              class="sib-form-block"
              style="font-size:16px; text-align:left; font-family:Space, sans-serif; color:#3C4858; background-color:transparent; text-align:left"
            >
              <div class="sib-text-form-block">
                <p>Sign up to get notified when registration opens.</p>
              </div>
            </div>
          </div>
          <div style="padding: 4px 0;">
            <div class="sib-input sib-form-block">
              <div class="form__entry entry_block">
                <div class="form__label-row">
                  <label
                    class="entry__label"
                    style="font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:Space, sans-serif; color:black;"
                    for="EMAIL"
                    data-required="*"
                    >Enter your email address to subscribe</label
                  >

                  <div class="entry__field">
                    <input
                      class="input"
                      type="text"
                      id="EMAIL"
                      name="EMAIL"
                      autocomplete="off"
                      placeholder="EMAIL"
                      data-required="true"
                      required
                    />
                  </div>
                </div>

                <label
                  class="entry__error entry__error--primary"
                  style="font-size:16px; text-align:left; font-family:Space, sans-serif; color:black;  border-radius:3px; border-color:black;"
                >
                </label>
                <label
                  class="entry__specification"
                  style="font-size:12px; text-align:left; font-family:Space, sans-serif; color:black; text-align:left"
                >
                  Provide your email address to subscribe. For e.g abc@xyz.com
                </label>
              </div>
            </div>
          </div>
          <div style="padding: 8px 0;">
            <div class="sib-form-block" style="text-align: left">
              <button
                class="sib-form-block__button sib-form-block__button-with-loader"
                style="font-size:16px; text-align:left; font-weight:700; font-family:Space, sans-serif; color:#FFFFFF; background-color:black; border-radius:3px; border-width:0px;"
                form="sib-form"
                type="submit"
              >
                <svg
                  class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z"
                  />
                </svg>
                SUBSCRIBE
              </button>
            </div>
          </div>
          <input
            type="text"
            name="email_address_check"
            value=""
            class="input--hidden"
          />
          <input type="hidden" name="locale" value="en" />
          <input type="hidden" name="html_type" value="simple" />
        </form>
      </div>
    </div>
  </div>
  <!-- END - We recommend to place the above code where you want the form in your website html  -->
  <!-- End Brevo Form -->
</div>

<style>
  .signup-container {
    padding: 10px;
    margin-bottom: 20px;
    border-top: 1px solid;
    width: calc(100% - 20px);
    background-color: white;
  }

  #sib-container,
  .sib-form {
    padding: 0 !important;
    background: none;
    border-style: hidden;
    text-align: left !important;
  }

  #sib-container input:-ms-input-placeholder {
    text-align: left;
    font-family: Space, sans-serif;
    color: #c0ccda;
  }

  #sib-container input::placeholder {
    text-align: left;
    font-family: Space, sans-serif;
    color: #c0ccda;
  }

  .sib-form-block {
    padding: 0;
  }

  #sib-container a {
    text-decoration: underline;
    color: #2bb2fc;
  }

  div {
    width: 100%;
    /* border-top: 1px solid; */
  }

  .error {
    color: red;
  }

  .success {
    font-weight: bold;
    margin-bottom: 1rem;
  }
  @media (max-width: 768px) {
    .signup-container {
      border-top: none;
    }
  }
</style>
