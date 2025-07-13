<template>
  <div class="dashboard-wrapper">
    <div class="dashboard-container">
      <!-- Header -->
      <header class="header">
        <div>
          <h1 class="title">Student Dashboard</h1>
          <p class="subtitle">Empowering your hostel experience</p>
        </div>
        <div class="actions">
          <router-link :to="{ name: 'Profile' }" class="link-button">
            View Profile
          </router-link>
          <button class="btn logout-btn" @click="logout">Logout</button>
        </div>
      </header>

      <!-- Main grid -->
      <section class="grid grid-3">
        <div class="card room-info">
          <h2>Room Info</h2>
          <p>Room No: <strong>204</strong></p>
          <p>Type: <strong>Double Sharing</strong></p>
          <p>Status: <span class="status-occupied">Occupied</span></p>
        </div>

        <div class="card application-status">
          <h2>Application Status</h2>
          <p>Submitted: <strong>01 July 2025</strong></p>
          <p>Current Status: <span class="status-approved">Approved</span></p>
        </div>

        <div class="card recent-updates">
          <h2>Recent Updates</h2>
          <ul class="updates-list">
            <li> Hostel fees due by 15th July</li>
            <li> Wi-Fi maintenance on Sunday</li>
            <li> Cleaning drive this weekend</li>
          </ul>
        </div>
      </section>

      <section class="grid grid-2 secondary-grid">
        <div class="card upcoming-events">
          <h2>Upcoming Events</h2>
          <ul class="updates-list">
            <li> Hostel Day Celebration - 20th July</li>
            <li> Sports Meet - 25th July</li>
            <li> Open Mic Night - 30th July</li>
          </ul>
        </div>

        <div class="card quick-actions-card">
          <h2>Quick Actions</h2>
          <div class="quick-actions">
            <router-link to="/room-application" class="btn action-btn">
               Apply for Room
            </router-link>
            <button class="btn action-btn"> Change Room</button>
            <button class="btn action-btn"> View Hostel Rules</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentDashboard",
  methods: {
    logout() {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.dashboard-wrapper {
  min-height: 100vh;
  background-color: #f9fafb;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.dashboard-container {
  width: 100%;
  max-width: 960px;
}

.header {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.title {
  font-size: 28px;
  color: #1bbc9b;
  margin: 0 0 4px 0;
  font-weight: 700;
}

.subtitle {
  font-size: 14px;
  color: #555;
  margin: 0;
}

.actions {
  display: flex;
  gap: 12px;
  align-items: center;
}

.link-button {
  color: #1bbc9b;
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
}

.link-button:hover {
  text-decoration: underline;
}

.btn {
  background-color: #1bbc9b;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #17a689;
}

.grid {
  display: grid;
  gap: 24px;
  margin-bottom: 24px;
}

.grid-3 {
  grid-template-columns: repeat(1, 1fr);
}

@media (min-width: 640px) {
  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}

.grid-2 {
  grid-template-columns: repeat(1, 1fr);
}

@media (min-width: 640px) {
  .grid-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

.card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
}

.card h2 {
  font-size: 18px;
  color: #222;
  margin-bottom: 16px;
  font-weight: 600;
  padding-bottom: 8px;
  border-bottom: 1px solid #eee;
}

.status-occupied,
.status-approved {
  color: #28a745;
  font-weight: 600;
}

.updates-list {
  list-style-type: none;
  padding-left: 0;
  color: #555;
  font-size: 14px;
  line-height: 1.8;
  margin: 0;
}

.updates-list li {
  margin-bottom: 12px;
  padding-left: 24px;
  position: relative;
}

.updates-list li:before {
  content: "•";
  position: absolute;
  left: 8px;
  color: #1bbc9b;
}

.quick-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #1bbc9b;
  color: #fff;
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.action-btn:hover {
  background-color: #17a689;
}

.secondary-grid {
  margin-top: 24px;
}
</style>
