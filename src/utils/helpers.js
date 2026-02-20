/**
 * Utility functions for the portfolio application
 */

/**
 * Format a date string to a readable format
 * @param {string|Date} date - date to format
 * @param {string} locale - locale for formatting (default: 'en-US')
 * @returns {string} formatted date string
 */
export const formatDate = (date, locale = "en-US") => {
  return new Date(date).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

/**
 * Validate email format
 * @param {string} email - email to validate
 * @returns {boolean} true if valid, false otherwise
 */
export const validateEmail = email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number format
 * @param {string} phone - phone number to validate
 * @returns {boolean} true if valid, false otherwise
 */
export const validatePhone = phone => {
  const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
  return phoneRegex.test(phone);
};

/**
 * Truncate text to a specific length
 * @param {string} text - text to truncate
 * @param {number} maxLength - maximum length
 * @param {string} suffix - suffix to add (default: '...')
 * @returns {string} truncated text
 */
export const truncateText = (text, maxLength, suffix = "...") => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength).trim() + suffix;
};

/**
 * Debounce a function
 * @param {Function} func - function to debounce
 * @param {number} delay - delay in milliseconds
 * @returns {Function} debounced function
 */
export const debounce = (func, delay = 300) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * Throttle a function
 * @param {Function} func - function to throttle
 * @param {number} limit - time limit in milliseconds
 * @returns {Function} throttled function
 */
export const throttle = (func, limit = 300) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Copy text to clipboard
 * @param {string} text - text to copy
 * @returns {Promise<boolean>} true if successful
 */
export const copyToClipboard = async text => {
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    return true;
  } catch (error) {
    console.error("Failed to copy:", error);
    return false;
  }
};

/**
 * Scroll to element smoothly
 * @param {string} elementId - ID of element to scroll to
 * @param {number} offset - offset from top (default: 0)
 */
export const scrollToElement = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

/**
 * Generate a unique ID
 * @returns {string} unique ID
 */
export const generateUniqueId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - element to check
 * @returns {boolean} true if in viewport
 */
export const isInViewport = element => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Get query parameters from URL
 * @param {string} param - parameter name
 * @returns {string|null} parameter value
 */
export const getQueryParam = param => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
};

/**
 * Format file size
 * @param {number} bytes - file size in bytes
 * @returns {string} formatted file size
 */
export const formatFileSize = bytes => {
  if (bytes === 0) {
    return "0 Bytes";
  }
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
};

/**
 * Deep clone an object
 * @param {object} obj - object to clone
 * @returns {object} cloned object
 */
export const deepClone = obj => {
  return JSON.parse(JSON.stringify(obj));
};

/**
 * Check if object is empty
 * @param {object} obj - object to check
 * @returns {boolean} true if empty
 */
export const isEmptyObject = obj => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

/**
 * Capitalize first letter of each word
 * @param {string} str - string to capitalize
 * @returns {string} capitalized string
 */
export const capitalizeWords = str => {
  return str.replace(/\b\w/g, char => char.toUpperCase());
};

/**
 * Remove duplicates from array
 * @param {Array} arr - array with potential duplicates
 * @returns {Array} array without duplicates
 */
export const removeDuplicates = arr => {
  return [...new Set(arr)];
};

/**
 * Group array of objects by key
 * @param {Array} arr - array to group
 * @param {string} key - key to group by
 * @returns {object} grouped object
 */
export const groupBy = (arr, key) => {
  return arr.reduce((result, item) => {
    const group = item[key];
    if (!result[group]) {
      result[group] = [];
    }
    result[group].push(item);
    return result;
  }, {});
};

export default {
  formatDate,
  validateEmail,
  validatePhone,
  truncateText,
  debounce,
  throttle,
  copyToClipboard,
  scrollToElement,
  generateUniqueId,
  isInViewport,
  getQueryParam,
  formatFileSize,
  deepClone,
  isEmptyObject,
  capitalizeWords,
  removeDuplicates,
  groupBy,
};
