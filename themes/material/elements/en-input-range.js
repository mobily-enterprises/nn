import { css } from 'lit-element'

export const EnInputRange = (base) => {
  return class Base extends base {
    static get styles () {
      return [
        ...super.styles || [],
        css`
        `
      ]
    }
  }
}