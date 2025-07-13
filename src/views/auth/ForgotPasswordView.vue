<template>
  <div class="forgot-wrapper">
    <div class="forgot-container">
     

      <h2 class="forgot-heading">OTP Verification</h2>

      <!-- Input for phone/email -->
      <input
        type="text"
        placeholder="Phone number or email"
        v-model="identifier"
        class="input-field"
      />

      <!-- Send OTP Button -->
      <button class="action-button" @click="sendOtp">Send OTP</button>

      <!-- OTP inputs group -->
      <div class="otp-group">
        <input
          v-for="(digit, index) in otpDigits"
          :key="index"
          type="text"
          maxlength="1"
          class="otp-input"
          v-model="otpDigits[index]"
          @input="focusNext(index, $event)"
          :ref="'otp' + index"
        />
      </div>

      <!-- Verify OTP Button -->
      <button class="action-button" @click="verifyOtp">Verify OTP</button>

      <!-- Password inputs -->
      <input
        type="password"
        placeholder="New Password"
        v-model="newPassword"
        class="input-field"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        v-model="confirmPassword"
        class="input-field"
      />

      <!-- Reset Password Button -->
      <button class="action-button" @click="resetPassword">Reset Password</button>

      <p class="back-login" @click="goToLogin">
        ← I remember my password, go to Login
      </p>

      <p v-if="otpMessage" class="success-message">{{ otpMessage }}</p>
      <p v-if="message" class="success-message">{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForgotPasswordView",
  data() {
    return {
      identifier: "",
      otpDigits: ["", "", "", ""],
      newPassword: "",
      confirmPassword: "",
      message: "",
      otpMessage: "",
      otpVerified: false,
    };
  },
  methods: {
    sendOtp() {
      if (!this.identifier.trim()) {
        this.message = "❗ Please enter your phone number or email.";
        this.clearMessageAfterDelay();
        return;
      }
      this.message = `📤 OTP sent to ${this.identifier}`;
      this.otpVerified = false;
      this.clearMessageAfterDelay();
    },
    focusNext(index, event) {
      const value = event.target.value;
      if (value.length === 1 && index < this.otpDigits.length - 1) {
        this.$refs["otp" + (index + 1)][0].focus();
      }
    },
    verifyOtp() {
      const otp = this.otpDigits.join("");
      if (otp.length !== 4 || otp.includes("")) {
        this.otpMessage = "❗ Please enter complete OTP.";
        this.clearOtpMessageAfterDelay();
        return;
      }
      this.otpVerified = true;
      this.otpMessage = "✅ OTP verified successfully!";
      this.clearOtpMessageAfterDelay();
    },
    resetPassword() {
      if (!this.otpVerified) {
        this.message = "❗ Please verify your OTP first.";
        this.clearMessageAfterDelay();
        return;
      }
      if (!this.newPassword || !this.confirmPassword) {
        this.message = "❗ Please enter and confirm new password.";
        this.clearMessageAfterDelay();
        return;
      }
      if (this.newPassword !== this.confirmPassword) {
        this.message = "❗ Passwords do not match.";
        this.clearMessageAfterDelay();
        return;
      }

      this.message = "🎉 Password reset successful!";
      this.clearMessageAfterDelay();

      this.identifier = "";
      this.otpDigits = ["", "", "", ""];
      this.newPassword = "";
      this.confirmPassword = "";
      this.otpVerified = false;
    },
    goToLogin() {
      this.$router.push("/login");
    },
    clearMessageAfterDelay() {
      setTimeout(() => {
        this.message = "";
      }, 5000);
    },
    clearOtpMessageAfterDelay() {
      setTimeout(() => {
        this.otpMessage = "";
      }, 5000);
    },
  },
};
</script>

<style scoped>
.forgot-wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
}

.forgot-container {
  width: 100%;
  max-width: 380px;
  padding: 30px;
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

.forgot-heading {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
}

.input-field {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
  outline: none;
}

.input-field:focus {
  border-color: #1bbc9b;
}

.otp-group {
  display: flex;
  gap: 8px;
  margin-bottom: 15px;
  justify-content: center;
  align-items: center;
}

.otp-input {
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 18px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;
}

.otp-input:focus {
  border-color: #1bbc9b;
}

.action-button {
  width: 100%;
  padding: 12px;
  background-color: #1bbc9b;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 15px;
  transition: background-color 0.3s ease;
}

.action-button:hover {
  background-color: #17a689;
}

.back-login {
  margin-top: 20px;
  font-size: 13px;
  color: #1bbc9b;
  cursor: pointer;
  user-select: none;
}

.back-login:hover {
  text-decoration: underline;
}

.success-message {
  margin-top: 10px;
  font-size: 14px;
  color: green;
  font-weight: 500;
}
</style>
