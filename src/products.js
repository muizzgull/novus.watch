import productImage from '../public/home/images/hero-image.png';
import imageThree from '../public/home/images/watch-image-3.png';
import imageFour from '../public/home/images/watch-image-4.png';
import roninGold1 from '../public/home/images/ronin-gold-watch-more1.webp'
import roninGold from '../public/home/images/ronin-gold-watch-more2.webp'
import roninGold2 from '../public/home/images/ronin-gold-watch-more3.webp'
import roninGold3 from '../public/home/images/ronin-gold-watch-more4.webp'

  export const products = [
    {
  id: '1',
  name: 'Ronin: R-014 LUXE Smart Watch',
  price: 'Rs. 11000',
  image: `${roninGold}`,
  description: `
    ✨ Curren Original Smartwatch: Power & Elegance

    Experience the perfect blend of style and smart technology with the **Curren Watch Original**. Built with **stainless steel** and featuring a **functional crown**, this watch is designed to impress and perform.

    Display & Design
    Display: 466x466px FHD Display with 550 nits Max Brightness.
    Build: Premium Stainless Steel casing with a functional crown.
    Water Resistance: IP67 Rating.
    Strap Options: Comes with two 22mm straps: a Chain Strap (140g) and a Silicone Strap (72g).

    Performance & Connectivity
    Battery Life: More than 2 Days of usage from the 260mAh battery.
    Bluetooth: V5.3 (Wireless support: Bluetooth 5.2V).
    Compatibility: Connects to iOS 9.0 + / Android 4.4 + devices.

    🏃 Health & Wellness Tracking
    Sensors: Heart Rate Monitor, Motion Sensor (Accelerometer), SpO₂ (Blood Oxygen) Sensor, and Blood Pressure Tracking.
    Monitoring: 24/7 Heart Rate Monitoring, Sleep Analysis, Stress Level Monitoring.
    Activity: 100+ Sports Modes, Step Counter, Distance Measurement, Calorie Burn Tracking, Activity Log & History.
    Specialized: Guided Breathing Exercises and Women's Health & Cycle Tracking.

    📲 Enhanced Smart Features
    Calls: Caller Name Visibility, One-Tap Call Rejection.
    Utility: Quick-Access Calculator, Built-in Stopwatch & Timer, Phone Finder Feature.
    Controls: Remote Music Control and Control Camera Shutter Remotely.
    Customization: AI-enabled watch faces, Screen Brightness Adjustment, Raise-to-Wake Functionality.
    Alerts: Set Alarms & Custom Reminders, Live Weather Updates, Haptic (Vibration) Alerts, Do Not Disturb (DND) Setting.
  `,
  type: 'Original',
  moreImages: [{image: roninGold1}, {image: roninGold2}, {image: roninGold3}],
}, {
      id: '2',
      name: 'Ronin: R-013 Rugged Smart Watch',
      price: 'Rs. 8000',
      image: `../public/home/images/ronin-watch-2.webp`,
      description: `Display Type: AMOLED, Screen Size: 2.01", Pixel Resolution: 240 × 296, Ai Enabled Watch Faces, Max Brightness: 550 nits. Physical appearance: Watch Case Material: Rugged Design, Strap Size &amp; Material: 22mm with &amp; Silicone &amp; Chain, Water Resistance: IP67 Rating, Weight with Chain Strap: 107 grams, Weight with Silicone Strap: 50 grams. Battery & Charging: Typical usage Time: 3-4 days, Standby Duration: Up to 7 days, Battery Capacity: 250mAh, Charging Duration: Up to 2 hours. Health & Wellness: Step Counter, 24/7 Heart Rate Monitoring, Distance Measurement, Sleep Analysis, Blood Pressure Tracking, Stress Level Monitoring, SpO₂ (Blood Oxygen) Monitoring, Calorie Burn Tracking, Activity Log &amp; History, Guided Breathing Exercises, Women's Health &amp; Cycle Tracking, Multi-Sport Modes. Enhanced Smartwatch Features: Caller Name Visibility, One-Tap Call Rejection, Phone Finder Feature, Quick-Access Calculator, Control Camera Shutter Remotely, Built-in Stopwatch &amp; Timer, Screen Brightness Adjustment, Set Alarms &amp; Custom Reminders, Live Weather Updates, Raise-to-Wake Functionality, Haptic (Vibration) Alerts, Do Not Disturb (DND) Setting, Remote Music Control, Interactive Games. What's inside the box: 1x Smartwatch, 2x Charging Cables, User Manual, Warranty Card, 2x Straps.`,
      deliveryCharges: 'Rs. 500',
      type: 'Original',
      moreImages: [{image: '../public/home/images/ronin-watch-more-1.webp'}, {image: '../public/home/images/ronin-watch-more-2.webp'}, {image: '../public/home/images/ronin-watch-more-3.webp'}],
    }, {
      id: '3',
      name: 'Curren Watch Original',
      price: '$29.99',
      image: `${imageFour}`,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null.',
      deliveryCharges: 'Rs. 500',
      type: 'Original',
      moreImages: [{image: imageFour}, {image: imageThree}, {image: imageFour}],
    }, {
      id: '4',
      name: 'Classic Luxury Watch for Men / Boys.',
      price: 'Rs. 599',
      image: `${productImage}`,
      description: 'Stylish Stainless Steel Analog Quartz Mens Watches',
      deliveryCharges: 'Rs. 500',
      type: 'Original',
      moreImages: [{image: imageFour}, {image: imageThree}, {image: imageFour}],
    }, {
      id: '5',
      name: 'Curren Watch Original',
      price: '$29.99',
      image: `${imageFour}`,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null.',
      deliveryCharges: 'Rs. 500',
      type: 'Original',
      moreImages: [{image: imageFour}, {image: imageThree}, {image: imageFour}],
    }, {
      id: '6',
      name: 'Classic Luxury Watch for Men / Boys.',
      price: 'Rs. 599',
      image: `${imageFour}`,
      description: 'Stylish Stainless Steel Analog Quartz Mens Watches',
      deliveryCharges: 'Rs. 500',
      type: 'Original',
      moreImages: [{image: productImage}, {image: imageThree}, {image: imageFour}],
    }, {
      id: '7',
      name: 'Curren Watch Original',
      price: '$29.99',
      image: `${productImage}`,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null.',
      deliveryCharges: 'Rs. 500',
      type: 'Original',
      moreImages: [{image: imageFour}, {image: imageThree}, {image: imageFour}],
    }, {
      id: '8',
      name: 'Classic Luxury Watch for Men / Boys.',
      price: 'Rs. 599',
      image: `${imageThree}`,
      description: 'Stylish Stainless Steel Analog Quartz Mens Watches',
      deliveryCharges: 'Rs. 500',
      type: 'Original',
      moreImages: [{image: imageFour}, {image: imageThree}, {image: imageFour}],
    }
  ];