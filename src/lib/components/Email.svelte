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

<div class="signup-follow-container">
  <p class="follow-text">
    Follow the updates on <a href="https://www.instagram.com/dataart.symposium/" target="_blank">Instagram</a> and sign up to get notified when registration opens:
  </p>
  <form
    id="sib-form"
    method="POST"
    action="https://3d794b8a.sibforms.com/serve/MUIFACQTFAWb7ZLG8a0UU_QmD17paeA6w5mJV_yQUOpQAGK6nJsLscGbsgEMigp9T5HT2zI1Hwc670pYI11lK9JL0ivYjP1AWAYHoXMjI1PK6b3XRcc7IB29GL7KIiQ9CfKOlp-nf7FPo6xoJBKyuHXNzhVUELo5slm3lc7f5X7-74dr-5TIDMflmcJPTkAzDp7aK8XfAxIFRldE"
    class="signup-form"
  >
    <input
      class="email-input"
      type="email"
      id="EMAIL"
      name="EMAIL"
      autocomplete="off"
      placeholder="Enter your email"
      required
    />
    <button type="submit" class="subscribe-button">Subscribe</button>
  </form>
</div>

<style>
  .signup-follow-container {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    gap: 10px;
    padding: 5px 10px;
    background-color: white;
    flex-wrap: wrap;
    border-top: 1px solid black;
    /* padding-top: 50px; */
  }

  .follow-text {
    font-family: Space, sans-serif;
    font-size: 14px;
    color: black;
    margin: 0;
    padding: 0;
  }

  .signup-form {
    display: flex;
    gap: 5px;
  }

  .email-input {
    padding: 4px;
    border: 1px solid #ccc;
    border-radius: 3px;
    font-size: 14px;
  }

  .subscribe-button {
    font-family: Space, sans-serif;
    text-transform: uppercase;
    padding: 4px 8px;
    font-size: 12px;
    color: #fff;
    background-color: black;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }

  .subscribe-button:hover {
    background-color: #333;
  }

  @media (max-width: 600px) {
    .signup-follow-container {
      flex-direction: column;
      text-align: center;
      padding-bottom: 25px;
      border-top: none;
    }
  }
</style>
