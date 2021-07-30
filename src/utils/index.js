const defaultOptionsFormatMoney = {
  locale: 'pt-BR',
  minimumIntegerDigits: 1,
  precision: 1,
  showPlaceholder: false,
  grouping: true,
}

export const formatMoney = (
  value,
  options = { style: 'currency', currency: 'BRL' }
) => {
  const forbiddenStates = ['', '0.0', '.']
  const innerOptions = {
    ...defaultOptionsFormatMoney,
    ...options,
  }

  if (typeof value === 'number') {
    return value.toLocaleString(innerOptions.locale, {
      ...innerOptions,
    })
  }

  let result = value
  if (!innerOptions.showPlaceholder && forbiddenStates.includes(result)) {
    return ''
  }

  result = result.padStart(innerOptions.precision, '0')

  result = result === '' ? '0' : result

  result = result.length === 1 ? `0${result}` : result

  const lastDigitsRegex = new RegExp(
    `([0-9]{0,${innerOptions.precision}})$`,
    'g'
  )

  result = result.replace(/[^\d]/g, '').replace(lastDigitsRegex, '.$1')

  result = parseFloat(result)

  return result.toLocaleString(innerOptions.locale, {
    minimumFractionDigits: innerOptions.precision,
    useGrouping: innerOptions.grouping,
    minimumIntegerDigits: innerOptions.minimumIntegerDigits,
  })
}

export const numberStringUnformatter = (value) =>
  parseFloat(value.replaceAll('.', '').replace(',', '.'))

export default formatMoney

export const hashCode = (s) =>
  s.split('').reduce((a, b) => {
    a = (a << 5) - a + b.charCodeAt(0)
    return a & a
  }, 0)
