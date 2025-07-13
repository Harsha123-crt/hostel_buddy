<template>
  <div class="register-wrapper">
    <div class="register-container">
      
      <h2 class="register-heading">Register</h2>

      <form @submit.prevent="registerUser">
        <div class="form-group">
          <input
            type="text"
            placeholder="Full Name"
            v-model="fullName"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="email"
            placeholder="Email"
            v-model="email"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            placeholder="Password"
            v-model="password"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            v-model="confirmPassword"
            required
          />
        </div>

        <button type="submit" class="action-button">Register</button>
      </form>

      <p class="back-login">
        <a href="#" @click.prevent="goToLogin">← Back to Login</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterView",
  data() {
    return {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    registerUser() {
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      alert(`User registered:\nName: ${this.fullName}\nEmail: ${this.email}`);
      this.goToLogin();
    },
    goToLogin() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.register-wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
}

.register-container {
  width: 100%;
  max-width: 380px;
  padding: 30px;
  padding-left: 5px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.app-title {
  font-size: 26px;
  margin-bottom: 10px;
}
.title-highlight {
  color: #1bbc9b;
  font-weight: 600;
}
.title-bold {
  color: #000;
  font-weight: 700;
}

.register-heading {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}
input {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
  outline: none;
}
input:focus {
  border-color: #1bbc9b;
}

.action-button {
  width: calc(100% - 10px);
  padding: 12px;
  background-color: #1bbc9b;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-left: 10px;
}
.action-button:hover {
  background-color: #17a689;
}

.back-login {
  margin-top: 20px;
  font-size: 13px;
}
.back-login a {
  color: #1bbc9b;
  text-decoration: none;
}
.back-login a:hover {
  text-decoration: underline;
}
</style>
