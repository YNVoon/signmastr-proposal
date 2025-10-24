# Signmastr Business Management System - Documentation Website

A comprehensive, multi-page website documenting the complete Signmastr Business Management System, built with pure HTML, CSS, and JavaScript (no frameworks).

## 📁 Website Structure

```
signmastr-website/
├── index.html                      # Home page with executive summary
├── user-roles.html                 # User roles and responsibilities
├── lead-management.html            # Lead management & sales process
├── quotation-process.html          # Quotation workflow
├── design-phase.html               # Full design phase details
├── manufacturing.html              # Manufacturing process
├── installation.html               # Installation & delivery
├── project-closure.html            # Project closure & invoicing
├── dashboards.html                 # Dashboards & reporting
├── performance-scoring.html        # Comprehensive scoring & bonus system
├── integrations.html               # System integrations (WhatsApp, Autocount, Website)
├── implementation.html             # Implementation phases & timeline
├── css/
│   └── style.css                   # Complete styling for all pages
├── js/
│   └── main.js                     # Navigation, animations, and interactivity
└── assets/                         # (Reserved for images/media)
```

## 🌟 Features

### Complete Documentation Coverage
- **12 detailed pages** covering every aspect of the system
- **Performance Scoring System** with comprehensive details from the bonus document
- **Step-by-step workflows** for each business process
- **Role-specific information** for all user types

### Modern, Responsive Design
- Clean, professional interface
- Fully responsive (mobile, tablet, desktop)
- Smooth animations and transitions
- Intuitive navigation with active page highlighting

### Interactive Elements
- Mobile-friendly hamburger menu
- Smooth scroll for anchor links
- Bonus calculator tool (on Dashboards page)
- Scroll animations for content sections

### Comprehensive Content
- All sections from the PRD document
- Detailed performance scoring from bonus system document
- Process flows and workflows
- Tables, cards, and visual breakdowns
- Implementation timeline and phases

## 🚀 How to Use

### Opening the Website

1. **Open in Browser:**
   ```
   Simply double-click on index.html
   ```

2. **Or use a local server (recommended for development):**
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Python 2
   python -m SimpleHTTPServer 8000

   # Using Node.js (http-server)
   npx http-server
   ```
   Then visit: `http://localhost:8000`

### Navigation

- Use the **top navigation menu** to browse between sections
- The **active page** is highlighted in the navigation
- All pages are **cross-linked** with relevant "Learn More" buttons
- **Mobile users**: Click the ☰ menu icon to access navigation

## 📄 Page Descriptions

| Page | Description |
|------|-------------|
| **Home** | Executive summary, business objectives, system overview |
| **User Roles** | Six user roles with detailed responsibilities and interactions |
| **Lead Management** | Lead capture, WhatsApp integration, status tracking, performance metrics |
| **Quotation** | Site visit, basic draft, quotation creation, approval, payment |
| **Design Phase** | Full design workflow, version control, collaboration, bonuses |
| **Manufacturing** | Production planning, materials, quality control, job tracking |
| **Installation** | Mobile app features, delivery orders, installation workflow |
| **Project Closure** | Final invoicing, payment tracking, project archival |
| **Dashboards** | Role-specific dashboards, reports, bonus calculator |
| **Performance Scoring** | Complete scoring system with all bonuses and calculations |
| **Integrations** | WhatsApp, Autocount API, website forms, security |
| **Implementation** | 4-phase rollout plan, timeline, training, next steps |

## 🎨 Customization

### Colors
Edit `css/style.css` to change the color scheme:

```css
:root {
    --primary-color: #2563eb;      /* Main blue */
    --secondary-color: #1e40af;    /* Darker blue */
    --accent-color: #f59e0b;       /* Orange accent */
    /* ... other colors ... */
}
```

### Logo
Replace the text logo in the header with an image:

```html
<!-- In each HTML file, replace: -->
<div class="logo">
    <h1>Signmastr</h1>
    <p>Business Management System</p>
</div>

<!-- With: -->
<div class="logo">
    <img src="assets/logo.png" alt="Signmastr">
</div>
```

## 📊 Key Highlights

### Performance Scoring Page
The most comprehensive page featuring:
- Complete scoring breakdown for all 4 roles
- Individual Performance (50%)
- Collaboration Quality (30%)
- Customer Impact (20%)
- Complexity multipliers
- Quarterly bonus calculation
- Quality safeguards
- Learning period explanation
- Transparency and appeals process

### Interactive Features
- **Bonus Calculator** on Dashboards page
- **Mobile-responsive navigation**
- **Smooth scroll** on all pages
- **Animated content** appearance on scroll

## 🔧 Technical Details

- **No frameworks or libraries** - Pure HTML, CSS, JavaScript
- **No build process required** - Works directly in browser
- **Fully responsive** - Mobile-first design
- **Modern CSS** - Flexbox, Grid, CSS Variables
- **Clean code** - Well-commented and organized

## 📱 Browser Compatibility

Tested and working on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Notes

- All content is extracted from the original PRD and Performance Scoring documents
- Performance scoring details are comprehensive from the bonus system document
- Navigation is consistent across all pages
- All pages link to each other for easy exploration
- Ready for deployment or further customization

## 🎯 Next Steps

1. **Review the content** - Ensure all information matches your requirements
2. **Add branding** - Replace logo and adjust colors if needed
3. **Add images** - Place any screenshots or diagrams in the `assets/` folder
4. **Deploy** - Host on your web server or share directly

## 📧 Support

For questions or modifications, refer to the original PRD and Performance Scoring documents.

---

**Version:** 1.0
**Date:** October 23, 2025
**Built for:** Signmastr Team Review
