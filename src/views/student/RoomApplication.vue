<template>
  <div class="room-application-container">
    <div class="back-nav">
      <button @click="goBack" class="back-link">
        ← Back to Dashboard
      </button>
    </div>

    <h1 class="application-title">Room Application</h1>

    <form @submit.prevent="submitApplication" class="application-form">
      <div class="form-group">
        <label for="preferred-building">Preferred Building:</label>
        <select id="preferred-building" v-model="form.preferredBuilding" required>
          <option value="">Select Building</option>
          <option value="A">Building A</option>
          <option value="B">Building B</option>
          <option value="C">Building C</option>
        </select>
      </div>

      <div class="form-group">
        <label for="room-type">Room Type:</label>
        <select id="room-type" v-model="form.roomType" required>
          <option value="">Select Room Type</option>
          <option value="single">Single Occupancy</option>
          <option value="double">Double Occupancy</option>
          <option value="shared">Shared (4 person)</option>
        </select>
      </div>

      <div class="form-group">
        <label for="preferred-mates">Preferred Roommates (if any):</label>
        <input 
          type="text" 
          id="preferred-mates" 
          v-model="form.preferredMates" 
          placeholder="Enter student IDs separated by commas"
        >
      </div>

      <div class="form-group">
        <label for="special-requirements">Special Requirements:</label>
        <textarea 
          id="special-requirements" 
          v-model="form.specialRequirements" 
          placeholder="Any medical conditions or special needs"
        ></textarea>
      </div>

      <div class="form-group checkbox-group">
        <input 
          type="checkbox" 
          id="terms-agreement" 
          v-model="form.termsAgreed" 
          required
        >
        <label for="terms-agreement">
          I agree to the hostel rules and regulations
        </label>
      </div>

      <div class="form-actions">
        <button type="submit" class="submit-btn">Submit Application</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RoomApplication',
  data() {
    return {
      form: {
        preferredBuilding: '',
        roomType: '',
        preferredMates: '',
        specialRequirements: '',
        termsAgreed: false
      }
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    submitApplication() {
      console.log('Application submitted:', this.form)
      alert('Application submitted successfully!')
      this.$router.push({ name: 'StudentDashboard' })
    }
  }
}
</script>

<style scoped>
.room-application-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.back-nav {
  margin-bottom: 20px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  background: none;
  border: none;
  color: #1bbc9b;
  font-weight: 600;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;
}

.back-link:hover {
  background-color: #e6fffb;
}

.application-title {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
}

.application-form {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
  color: #555;
}

.form-group select,
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-family: inherit;
  font-size: 16px;
}

.form-group select:focus,
.form-group input:focus,
.form-group textarea:focus {
  border-color: #1bbc9b;
}

.form-group textarea {
  min-height: 120px;
  resize: vertical;
}

.checkbox-group {
  display: flex;
  align-items: center;
}

.checkbox-group input {
  width: auto;
  margin-right: 10px;
}

.form-actions {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.submit-btn {
  background-color: #1bbc9b;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-btn:hover {
  background-color: #17a689;
}

@media (max-width: 600px) {
  .application-form {
    padding: 20px;
  }
}
</style>
