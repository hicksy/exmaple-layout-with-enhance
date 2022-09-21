
export default function MyHeader({ html, state }) {
  console.log(state)
  const { attrs={} } = state
  const sub = attrs?.sub || ''
  const heading = attrs?.heading || ''

  return html`
    <div class="p-4 sm:p-8 sm:pt-16">
      <div>
        <div>
          <p>${sub}</p>
          <h1>${heading}</h1>
          <slot name="description"></slot>
        </div>
      </div>
    </div>
  `
}