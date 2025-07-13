<template>
  <div class="login-wrapper">
    <div class="login-container">
     

      <div class="role-selection">
        <button 
          class="role-button" 
          :class="{ active: role === 'Student' }"
          @click="selectRole('Student')"
        >Student</button>
        <button 
          class="role-button" 
          :class="{ active: role === 'Warden' }"
          @click="selectRole('Warden')"
        >Warden</button>
      </div>

      <form class="login-form" @submit.prevent="handleLogin">
        <div class="form-group">
          <input type="text" placeholder="Email or Phone" v-model="email" required />
        </div>
        <div class="form-group">
          <input type="password" placeholder="Password" v-model="password" required />
        </div>

        <div class="remember-forgot">
          <label class="remember-me">
            <input type="checkbox" v-model="remember" />
            Remember me
          </label>
          <a href="#" class="forgot-password" @click.prevent="forgotPassword">Forgot password?</a>
        </div>

        <button type="submit" class="login-button">Login</button>
      </form>

      <p class="register-text">
        Don’t have an account? 
        <a href="#" @click.prevent="register">Register</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      role: 'Student',
      email: '',
      password: '',
      remember: false
    };
  },
  methods: {
    selectRole(role) {
      this.role = role;
    },
    handleLogin() {
      console.log('Logging in as:', this.role, this.email);
      this.$router.push('/student-dashboard');
    },
    forgotPassword() {
      this.$router.push('/forgot-password');
    },
    register() {
      this.$router.push('/register');
    }
  }
};
</script>

<style scoped>
.login-wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
}

.login-container {
  width: 100%;
  max-width: 360px;
  padding: 30px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
}

.app-title {
  text-align: center;
  font-size: 26px;
  margin-bottom: 25px;
  font-family: 'Segoe UI', sans-serif;
}
.title-highlight {
  color: #1bbc9b;
  font-weight: 600;
}
.title-bold {
  color: #000;
  font-weight: 700;
}

.role-selection {
  display: flex;
  background-color: #f2f2f2;
  border-radius: 9999px;
  padding: 5px;
  margin-bottom: 20px;
}
.role-button {
  flex: 1;
  padding: 10px;
  font-size: 15px;
  border: none;
  border-radius: 9999px;
  background: transparent;
  cursor: pointer;
  transition: background-color 0.3s;
}
.role-button.active {
  background-color: #1bbc9b;
  color: white;
  font-weight: 600;
}

.form-group {
  margin-bottom: 15px;
}
input[type="text"],
input[type="password"] {
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

.remember-forgot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  margin: 10px 0 20px;
}
.remember-me input {
  margin-right: 6px;
}
a {
  color: #1bbc9b;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

.login-button {
  width: 100%;
  padding: 12px;
  background-color: #1bbc9b;
  color: white;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.login-button:hover {
  background-color: #17a689;
}

.register-text {
  text-align: center;
  margin-top: 20px;
  font-size: 13px;
}
.register-text a {
  color: #1bbc9b;
  font-weight: 500;
}
</style>
