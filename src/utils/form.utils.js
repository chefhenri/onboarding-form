/**
 * Constants
 */
export const DATE_PICKER_FMT = 'MM/dd/yyyy'
export const MIN_DATE_MSG = 'Date should not be before today.'
export const SLIDER_STEP = 1
export const SLIDER_MIN_VAL = 0
export const SLIDER_MAX_VAL = 500
export const SLIDER_DEFAULT_VAL = 90
export const SLIDER_UNLIMITED_VAL = -1

/**
 * Helpers
 */
export const getOptId = (id, idx) => `${id}-opt-${idx}`

export const getOptName = (name, idx) => `${name}Opt${idx}`

export const getValueText = (value) => `${value} Days`

export const getLabelFmt = (value) => value
