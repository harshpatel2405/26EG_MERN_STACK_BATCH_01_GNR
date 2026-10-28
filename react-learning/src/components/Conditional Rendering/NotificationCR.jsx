import React from 'react'
import './notification.css'

const NotificationCR = () => {
    let notifications = 0;
  return (
    <div>
      <nav class="navbar">
        <div class="logo">
            <a href="#">BrandLogo</a>
        </div>
        
        <div class="nav-container">
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
            </ul>

            <div class="notif-wrapper" aria-label="Notifications">
                <svg class="bell-icon" viewBox="0 0 24 24">
                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1-1.5-1s-1.5.17-1.5 1v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                </svg>

                {
                    notifications > 0 &&   <span class="notif-badge">{notifications }</span>
                }
              
            </div>
        </div>
    </nav>
    </div>
  )
}

export default NotificationCR
