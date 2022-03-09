// Create all svg's as react components here
// Using SVGR

export const GreenBird = (props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 465 465"
    style={{
      enableBackground: "new 0 0 465 465",
    }}
    xmlSpace="preserve"
    width={512}
    height={512}
    {...props}
  >
    <path
      style={{
        fill: "#8aa92c",
      }}
      d="M354.58 134.27c7.31 0 13.24 5.93 13.24 13.24s-5.93 13.23-13.24 13.23c-7.31 0-13.23-5.92-13.23-13.23s5.92-13.24 13.23-13.24z"
    />
    <path
      style={{
        fill: "#ffd608",
      }}
      d="m458.5 147.51-30.92 30.91a155.943 155.943 0 0 0-7.73-30.91h38.65z"
    />
    <path
      style={{
        fill: "#c2dc71",
      }}
      d="M148.29 300.09 46.31 402.06H8.5l124.59-124.58c4.42 7.99 9.5 15.55 15.2 22.61zM369.08 208.42c-3.72 50.73-46.06 90.73-97.74 90.73-43.26 0-79.98-28.04-92.97-66.93-.01-.01 169.25-169.28 169.25-169.28 33.24 18.38 59.16 48.4 72.23 84.57 3.58 9.88 6.19 20.22 7.73 30.91 1.08 7.44 1.64 15.04 1.64 22.77 0 2.42-.05 4.84-.17 7.23h-59.97zm-1.26-60.91c0-7.31-5.93-13.24-13.24-13.24-7.31 0-13.23 5.93-13.23 13.24s5.92 13.23 13.23 13.23c7.31 0 13.24-5.92 13.24-13.23z"
    />
    <path
      style={{
        fill: "#8aa92c",
      }}
      d="M369.08 208.42h59.97c-3.77 83.84-72.94 150.65-157.71 150.65-49.75 0-94.12-23.02-123.05-58.98-5.7-7.06-10.78-14.62-15.2-22.61l45.27-45.27c13 38.9 49.72 66.94 92.98 66.94 51.68 0 94.02-40 97.74-90.73z"
    />
    <path
      style={{
        fill: "#591200",
      }}
      d="M353.581 126.772c-11.434 0-20.735 9.302-20.735 20.735s9.302 20.735 20.735 20.735 20.735-9.302 20.735-20.735-9.301-20.735-20.735-20.735zm0 26.469c-3.162 0-5.735-2.573-5.735-5.735s2.573-5.735 5.735-5.735 5.735 2.573 5.735 5.735-2.573 5.735-5.735 5.735z"
    />
    <path
      style={{
        fill: "#591200",
      }}
      d="M464.429 144.636a7.499 7.499 0 0 0-6.929-4.63h-33.548c-13.944-34.977-39.647-64.806-73.701-83.635-.016-.009-.033-.015-.049-.024a7.494 7.494 0 0 0-.468-.229c-.073-.033-.144-.07-.218-.101-.138-.058-.279-.106-.42-.155-.098-.034-.195-.073-.294-.103-.106-.032-.215-.056-.322-.083-.134-.034-.267-.071-.401-.098-.072-.014-.145-.022-.217-.034-.169-.028-.338-.057-.508-.073-.05-.005-.1-.005-.15-.008a7.222 7.222 0 0 0-.569-.027c-.061 0-.122.006-.184.008a7.713 7.713 0 0 0-.527.025c-.111.01-.22.03-.33.046-.124.017-.248.03-.37.053-.159.03-.316.072-.473.112-.073.019-.147.032-.219.053-.173.05-.342.111-.511.174-.056.021-.114.037-.169.059-.155.061-.305.134-.456.206-.07.033-.141.062-.21.097-.122.063-.24.135-.359.205-.095.056-.192.108-.285.169-.089.058-.175.124-.262.186-.118.084-.237.166-.35.257-.067.054-.131.115-.198.171-.125.108-.25.216-.368.333-.015.015-.031.027-.046.041L2.197 396.761a7.5 7.5 0 0 0 5.304 12.803 7.478 7.478 0 0 0 5.304-2.197l117.771-117.773a165.827 165.827 0 0 0 6.744 9.859l-97.308 97.308a7.5 7.5 0 0 0 5.304 12.803 7.478 7.478 0 0 0 5.304-2.197l96.22-96.22c31.027 34.812 75.785 55.419 123.505 55.419 91.188 0 165.374-74.187 165.374-165.374 0-15.855-2.294-31.377-6.606-46.186h10.282l-.431.432a7.498 7.498 0 0 0-.001 10.606 7.476 7.476 0 0 0 5.304 2.197 7.474 7.474 0 0 0 5.303-2.197l13.235-13.235a7.502 7.502 0 0 0 1.624-8.173zm-194.086 206.93c-45.964 0-88.917-21.018-117.199-56.154l-.096-.116a150.599 150.599 0 0 1-11.582-16.593l33.127-33.128c17.135 36.961 54.259 61.076 95.75 61.076 35.641 0 68.63-17.798 88.244-47.61a7.5 7.5 0 0 0-12.532-8.245c-16.831 25.582-45.136 40.855-75.713 40.855-37.474 0-70.793-22.927-84.325-57.502L347.852 72.313c45.084 27.162 72.865 76.03 72.865 128.879 0 82.917-67.458 150.374-150.374 150.374z"
    />
  </svg>
  )
}

export const PowerBtn = (props) => {
    return(
        <svg
            aria-hidden="true"
            data-prefix="fas"
            data-icon="power-off"
            className="svg-inline--fa fa-power-off fa-w-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            {...props}
        >
            <path
            fill={props.fill}
            d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"
            />
        </svg>
    )
}

export const Linkedin = (props) => {
  return(
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 504.4 504.4"
        style={{
          enableBackground: "new 0 0 504.4 504.4",
        }}
        xmlSpace="preserve"
        {...props}
      >
        <path d="M377.6.2H126.4C56.8.2 0 57 0 126.6v251.6c0 69.2 56.8 126 126.4 126H378c69.6 0 126.4-56.8 126.4-126.4V126.6C504 57 447.2.2 377.6.2zM168 408.2H96v-208h72v208zm-36.4-240c-20.4 0-36.8-16.4-36.8-36.8s16.4-36.8 36.8-36.8 36.8 16.4 36.8 36.8c-.4 20.4-16.8 36.8-36.8 36.8zm276.8 240H348V307.4c0-24.4-3.2-55.6-36.4-55.6-34 0-39.6 26.4-39.6 54v102.4h-60v-208h56v28h1.6c8.8-16 29.2-28.4 61.2-28.4 66 0 77.6 38 77.6 94.4v114z" />
      </svg>
  )
}

export const Github = (props) => {
    return (
        <svg
          aria-hidden="true"
          data-prefix="fab"
          data-icon="github"
          className="prefix__svg-inline--fa prefix__fa-github prefix__fa-w-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
          {...props}
        >
          <path
            fill={props.fill}
            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
          />
        </svg>
      )
}

export const Email = (props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 330.001 330.001"
    style={{
      enableBackground: "new 0 0 330.001 330.001",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path d="M173.871 177.097a14.982 14.982 0 0 1-8.87 2.903 14.98 14.98 0 0 1-8.871-2.903L30 84.602.001 62.603 0 275.001c.001 8.284 6.716 15 15 15L315.001 290c8.285 0 15-6.716 15-14.999V62.602l-30.001 22-126.129 92.495z" />
    <path d="M165.001 146.4 310.087 40.001 19.911 40z" />
    </svg>
  )
}

export const YinYang = (props) => {
    return (
        <svg
          aria-hidden="true"
          data-prefix="fas"
          data-icon="yin-yang"
          className="prefix__svg-inline--fa prefix__fa-yin-yang prefix__fa-w-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
          {...props}
        >
          <path
            fill={props.fill}
            d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"
          />
        </svg>
      )
}

export const Anchor = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="anchor"
      className="prefix__svg-inline--fa prefix__fa-anchor prefix__fa-w-18"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M12.971 352h32.394C67.172 454.735 181.944 512 288 512c106.229 0 220.853-57.38 242.635-160h32.394c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0l-67.029 67.029c-7.56 7.56-2.206 20.485 8.485 20.485h35.146c-20.29 54.317-84.963 86.588-144.117 94.015V256h52c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-52v-5.47c37.281-13.178 63.995-48.725 64-90.518C384.005 43.772 341.605.738 289.37.01 235.723-.739 192 42.525 192 96c0 41.798 26.716 77.35 64 90.53V192h-52c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h52v190.015c-58.936-7.399-123.82-39.679-144.117-94.015h35.146c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0L4.485 331.515C-3.074 339.074 2.28 352 12.971 352zM288 64c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32z"
      />
    </svg>
  )
}

export const Link = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="link"
      className="prefix__svg-inline--fa prefix__fa-link prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
      
    >
      <path
        fill={props.fill}
        
        d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"
      />
    </svg>
  )
}



export const Design = (props) => { 
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="palette"
      className="prefix__svg-inline--fa prefix__fa-palette prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
      />
    </svg>
  )

}

export const Develope = (props) => { 
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="laptop-code"
      className="prefix__svg-inline--fa prefix__fa-laptop-code prefix__fa-w-20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      {...props}
    >
      <path
         fill={props.fill}
        d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"
      />
    </svg>
  )
}