/*
 * Animated Circular Loader: Named Constants for Animation Fractions
 */

window.onload = function () {
  const circle = document.querySelector("circle");
  const r = circle.getAttribute("r");
  const circum = 2 * Math.PI * r;

  // Descriptive step constants
  const ANIMATION_STEPS = {
    // 0% Keyframe
    do0:      -0.81,   // Dash offset: 81% of circumference behind start (negative = backwards)
    da01:      0,      // Dash array part 1: invisible
    da02:      1.00,   // Dash array part 2: full circumference

    // 25% Keyframe
    do25:     -0.67,   // 67% offset backwards
    da251:     0.13,   // Dash array: 13% visible
    da252:     0.95,   // Dash array: 95% gap

    // 50% Keyframe
    do50:      1.19,   // 119% forward offset
    da501:     1.00,   // 100% visible
    da502:     0,      // 0% gap

    // 75% Keyframe
    do75:      1.18,   // 118% forward offset
    da751:     0.03,   // 3% visible
    da752:     0.97,   // 97% gap

    // 100% Keyframe
    do100:     1.18,   // 118% forward offset (loop wrap)
    da1001:    0,      // No visible dash
    da1002:    1.00    // Full circle as gap
  };

  // Set CSS variables: always multiply by circumference for actual value
  Object.entries(ANIMATION_STEPS).forEach(([key, coeff]) => {
    document.documentElement.style.setProperty(
      `--${key}`, Number(coeff) * circum
    );
  });
};
