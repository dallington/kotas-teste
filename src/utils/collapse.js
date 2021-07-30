const duration = 300
/**
 * Toggle collapsed value.
 * @param {*} v
 * @returns
 */
function toggleCollapsed(v) {
  return !v
}

/**
 *  Collapse / expand element.
 * @param {*} element
 * @param {*} c
 */
function showHide(element, c) {
  if (c) {
    slideUp()
  } else {
    slideDown()
  }
}

/**
 * Increasing height of the Collapse element.
 *
 * @param {*} el
 * @param {*} progress
 */
function incrementHeight(el, progress) {
  el.style.height = `${progress * el.scrollHeight}px`
}

/**
 * Decrementing height of the Collapse element.
 *
 * @param {*} el
 * @param {*} progress
 */
function decrementHeight(el, progress) {
  el.style.height = `${el.scrollHeight - progress * el.scrollHeight}px`
  el.style.overflow = 'hidden'
}

/**
 * Expanding Collapse element.
 */
function slideDown(el) {
  const start = performance.now()

  requestAnimationFrame(function animate(time) {
    const runtime = time - start
    const relativeProgress = runtime / duration
    const process = Math.min(relativeProgress, 1)

    if (process < 1) {
      incrementHeight(el, process)
      requestAnimationFrame(animate)
    }

    if (process === 1) {
      el.style.height = 'auto'
      el.style.overflow = 'initial'
    }
  })
}

/**
 * Collapsing element.
 */
function slideUp(el) {
  const start = performance.now()
  requestAnimationFrame(function animate(time) {
    const runtime = time - start
    const relativeProgress = runtime / duration
    const process = Math.min(relativeProgress, 1)
    if (process < 1) {
      decrementHeight(el, process)
      requestAnimationFrame(animate)
    }
    if (process === 1) {
      el.style.height = ''
      el.style.overflow = ''
    }
  })
}

const handleCollapse = (el, collapseState = false) => {
  if (collapseState) {
    slideUp(el)
  } else {
    slideDown(el)
  }
}

export default handleCollapse
