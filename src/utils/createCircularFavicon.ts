/**
 * Utility to create a circular version of the website icon
 * This creates a canvas element to draw a circular version of the image
 */

export const createCircularFavicon = (): void => {
  // This function would be called when the component mounts
  // to create a circular version of the favicon
  
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.src = '/websiteIcon.png';
  
  img.onload = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;
    
    // Set canvas size
    const size = Math.min(img.width, img.height);
    canvas.width = size;
    canvas.height = size;
    
    // Create circular clipping path
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
    
    // Draw image centered
    const x = (size - img.width) / 2;
    const y = (size - img.height) / 2;
    ctx.drawImage(img, x, y, img.width, img.height);
    
    // Convert to data URL and set as favicon
    const dataUrl = canvas.toDataURL('image/png');
    
    // Update favicon
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = dataUrl;
    document.head.appendChild(link);
  };
  
  img.onerror = () => {
    console.warn('Failed to load website icon for circular conversion');
  };
};
