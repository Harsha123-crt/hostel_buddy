<template>
  <div class="profile-container">
    <!-- Back Navigation -->
    <div class="back-nav">
      <button @click="goToDashboard" class="back-link">
        ← Back to Dashboard
      </button>
    </div>

    <!-- Profile Header -->
    <div class="profile-header">
      <div class="profile-pic-container">
        <img :src="profile.imageUrl || defaultProfilePic" alt="Profile Picture" class="profile-pic">
        <button class="edit-pic-btn" @click="triggerFileInput">Edit</button>
        <input 
          type="file" 
          ref="fileInput" 
          @change="handleImageUpload" 
          accept="image/*" 
          style="display: none"
        >
      </div>
      <h1>{{ profile.name }}</h1>
      <button class="edit-btn" @click="toggleEditMode">
        {{ editMode ? 'Cancel' : 'Edit Profile' }}
      </button>
    </div>

    <!-- Profile Details -->
    <div class="profile-details">
      <div class="detail-item">
        <label>Date of Birth:</label>
        <span v-if="!editMode">{{ profile.dob }}</span>
        <input v-else type="date" v-model="profile.dob">
      </div>

      <div class="detail-item">
        <label>Email:</label>
        <span v-if="!editMode">{{ profile.email }}</span>
        <input v-else type="email" v-model="profile.email">
      </div>

      <div class="detail-item">
        <label>Phone Number:</label>
        <span v-if="!editMode">{{ profile.phone }}</span>
        <input v-else type="tel" v-model="profile.phone">
      </div>

      <div class="detail-item">
        <label>Address:</label>
        <span v-if="!editMode">{{ profile.address }}</span>
        <textarea v-else v-model="profile.address"></textarea>
      </div>

      <div v-if="editMode" class="save-actions">
        <button class="save-btn" @click="saveProfile">Save Changes</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentProfile',
  data() {
    return {
      editMode: false,
      defaultProfilePic: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
      profile: {
        name: 'John Doe',
        dob: '2000-05-15',
        email: 'john.doe@university.edu',
        phone: '+1 (555) 123-4567',
        address: '123 Hostel Lane, Room 204\nUniversity Campus\nCity, State 12345',
        imageUrl: ''
      },
      originalProfile: {}
    }
  },
  methods: {
    toggleEditMode() {
      if (!this.editMode) {
        this.originalProfile = JSON.parse(JSON.stringify(this.profile));
      }
      this.editMode = !this.editMode;
    },
    saveProfile() {
      console.log('Profile saved:', this.profile);
      this.editMode = false;
      alert('Profile updated successfully!');
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.profile.imageUrl = URL.createObjectURL(file);
      }
    },
    goToDashboard() {
      this.$router.push({ name: 'StudentDashboard' });
    }
  }
}
</script>

<style scoped>
.profile-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Back Button */
.back-nav {
  margin-bottom: 30px;
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
  background-color: #e6fffa;
}

/* Profile Header */
.profile-header {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.profile-pic-container {
  position: relative;
  width: 120px;
  height: 120px;
}

.profile-pic {
  width: 100%;
  height: 100%;
  border-radius: 20%;
  object-fit: cover;
  border: 3px solid #1bbc9b;
}

.edit-pic-btn {
  position: absolute;
  bottom: 0;
  right: 0;
  background: #1bbc9b;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.edit-pic-btn:hover {
  background: #17a689;
}

.profile-header h1 {
  font-size: 28px;
  margin: 0;
  flex-grow: 1;
}

.edit-btn {
  background-color: #1bbc9b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s;
}
.edit-btn:hover {
  background-color: #17a689;
}

/* Profile Detail Section */
.profile-details {
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.detail-item {
  margin-bottom: 25px;
}

.detail-item label {
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
  color: #555;
}

.detail-item span {
  display: block;
  padding: 8px 0;
  line-height: 1.5;
}

.detail-item input,
.detail-item textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-family: inherit;
  font-size: 16px;
}

.detail-item textarea {
  min-height: 100px;
  resize: vertical;
}

/* Save Button */
.save-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
}

.save-btn {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s;
}
.save-btn:hover {
  background-color: #218838;
}

/* Responsive Adjustments */
@media (max-width: 600px) {
  .profile-header {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  .profile-header h1 {
    text-align: center;
  }

  .edit-btn {
    width: 100%;
  }
}
</style>
